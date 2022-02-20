import { Engine } from 'geotic';
import {
    Ai,
    Appearance,
    Description,
    IsBlocking,
    IsInFov,
    IsOpaque,
    IsRevealed,
    Layer100,
    Layer300,
    Layer400,
    Move,
    Position,
} from "./components";

const ecs = new Engine();
const world = ecs.createWorld();

// all Components must be `registered` by the engine
ecs.registerComponent(Ai);
ecs.registerComponent(Appearance);
ecs.registerComponent(Description);
ecs.registerComponent(IsBlocking);
ecs.registerComponent(IsInFov);
ecs.registerComponent(IsOpaque);
ecs.registerComponent(IsRevealed);
ecs.registerComponent(Layer100);
ecs.registerComponent(Layer300);
ecs.registerComponent(Layer400);
ecs.registerComponent(Move);
ecs.registerComponent(Position);

export const player = world.createEntity();
player.add(Appearance, { char: "@", color: "#fff" });
player.add(Layer400);
player.add(Description, { name: "You" });


export default world;