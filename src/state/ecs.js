import { Engine } from 'geotic';
import {
    Appearance,
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
ecs.registerComponent(Appearance);
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


export default world;