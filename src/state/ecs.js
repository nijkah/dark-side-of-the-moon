import { Engine } from 'geotic';
import {
    Ai,
    Appearance,
    Description,
    IsBlocking,
    IsDead,
    IsInFov,
    IsOpaque,
    IsRevealed,
    Move,
    Position,
} from "./components";

import { Layer100, Layer300, Layer400 } from "./layers";

import { Defense, Health, Power } from "./combat";

import { Being, Tile, Ghoul, Player, Wall, Floor } from "./prefabs";

const ecs = new Engine();
const world = ecs.createWorld();

// all Components must be `registered` by the engine
ecs.registerComponent(Ai);
ecs.registerComponent(Appearance);
ecs.registerComponent(Description);
ecs.registerComponent(IsBlocking);
ecs.registerComponent(IsDead);
ecs.registerComponent(IsInFov);
ecs.registerComponent(IsOpaque);
ecs.registerComponent(IsRevealed);
ecs.registerComponent(Layer100);
ecs.registerComponent(Layer300);
ecs.registerComponent(Layer400);
ecs.registerComponent(Move);
ecs.registerComponent(Position);

// Combat Copmonents
ecs.registerComponent(Defense);
ecs.registerComponent(Health);
ecs.registerComponent(Power);

// register "base" prefabs first!
ecs.registerPrefab(Tile);
ecs.registerPrefab(Being);

ecs.registerPrefab(Wall);
ecs.registerPrefab(Floor);
ecs.registerPrefab(Ghoul);
ecs.registerPrefab(Player);

export const messageLog = ["", "Welcome to Dark Side of the Moon.", ""];
export const addLog = (text) => {
    messageLog.unshift(text);
};

export default world;