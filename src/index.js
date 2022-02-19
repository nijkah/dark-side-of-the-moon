import "./lib/canvas.js";
import { createDungeon } from "./lib/dungeon";
import { movement } from "./systems/movement";
import { redner, render } from "./systems/render";
import { player } from "./state/ecs";
import { Move } from "./state/components";

// init game map and player position
const dungeon = createDungeon();
player.position.x = dungeon.center.x;
player.position.y = dungeon.center.y;

render();

let userInput = null;

document.addEventListener("keydown", (ev) => {
    userInput = ev.key;
    processUserInput();
});

const processUserInput = () => {
    if (userInput === "k") {
        player.add(Move, { x: 0, y: -1 });
    }
    if (userInput === "l") {
        player.add(Move, { x: 1, y: 0 });
    }
    if (userInput === "j") {
        player.add(Move, { x: 0, y: 1 });
    }
    if (userInput === "h") {
        player.add(Move, { x: -1, y: 0 });
    }

    movement();
    render();
};