import { get, sample, times } from "lodash";
import "./lib/canvas.js";
import { grid, pxToCell } from "././lib/canvas";
import { toLocId } from "./lib/grid";
import { readCacheSet } from "./state/cache";
import { createDungeon } from "./lib/dungeon";
import { ai } from "./systems/ai";
import { fov } from "./systems/fov";
import { movement } from "./systems/movement";
import { render } from "./systems/render";
import world from "./state/ecs";
import {
    Position
} from "./state/components";
import { processUserInput } from "./lib/user-input.js";

// init game map and player position
const dungeon = createDungeon({
    x: grid.map.x,
    y: grid.map.y,
    width: grid.map.width,
    height: grid.map.height,
});

const player = world.createPrefab("Player");
player.add(Position, {
    x: dungeon.rooms[0].center.x,
    y: dungeon.rooms[0].center.y,
});

const openTiles = Object.values(dungeon.tiles).filter(
    (x) => x.sprite === "FLOOR"
);

times(5, () => {
    const tile = sample(openTiles);
    world.createPrefab("Ghoul").add(Position, { x: tile.x, y: tile.y });
});

fov(player);
render();

let userInput = null;
let playerTurn = true;

document.addEventListener("keydown", (ev) => {
    userInput = ev.key;
});

const update = () => {
    if (player.isDead) {
        return;
    }
    if (playerTurn && userInput) {
        console.log('I am @, hear me roar.');
        userInput = processUserInput(player, userInput);
        movement();
        fov(player);
        render();

        playerTurn = false;
    }

    if (!playerTurn) {
        ai(player);
        movement();
        fov(player);
        render();

        playerTurn = true;
    }
};

const gameLoop = () => {
    update();
    requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);

// Only do this during development
if (process.env.NODE_ENV === "development") {
    const canvas = document.querySelector("#canvas");

    canvas.onclick = (e) => {
        const [x, y] = pxToCell(e);
        const locId = toLocId({ x, y });

        readCacheSet("entitiesAtLocation", locId).forEach((eId) => {
            const entity = world.getEntity(eId);

            console.log(
                `${get(entity, "appearance.char", "?")} ${get(
                    entity,
                    "description.name",
                    "?"
                )}`,
                entity.serialize()
            );
        });
    };
}