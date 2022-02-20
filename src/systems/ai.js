import world from "../state/ecs";
import { aStar } from "../lib/pathfinding";
import { Ai, IsInFov, Description, Move } from "../state/components";

const aiEntities = world.createQuery({
    all: [Ai, Description],
});

const moveToTarget = (entity, target) => {
    const path = aStar(entity.position, target.position);
    if (path.length) {
        const newLoc = path[1];
        entity.add(Move, { x: newLoc[0], y: newLoc[1], relative: false });
    }
};

export const ai = (player) => {
    aiEntities.get().forEach((entity) => {
        if (entity.has(IsInFov)) {
            moveToTarget(entity, player);
        }
    });
};