import world from "../state/ecs";
import {
    Appearance,
    IsInFov,
    IsRevealed,
    Position,
} from "../state/components";
import { Layer100, Layer300, Layer400 } from "../state/layers"
import { clearCanvas, drawCell } from "../lib/canvas";

const layer100Entities = world.createQuery({
    all: [Position, Appearance, Layer100],
    any: [IsInFov, IsRevealed],
});

const layer300Entities = world.createQuery({
    all: [Position, Appearance, Layer300],
    any: [IsInFov, IsRevealed],
});

const layer400Entities = world.createQuery({
    all: [Position, Appearance, Layer400, IsInFov],
});

export const render = () => {
    clearCanvas();

    layer100Entities.get().forEach((entity) => {
        if (entity.isInFov) {
            drawCell(entity);
        } else {
            drawCell(entity, { color: "#333" });
        }
    });

    layer300Entities.get().forEach((entity) => {
        if (entity.isInFov) {
            drawCell(entity);
        } else {
            drawCell(entity, { color: "#333" });
        }
    });

    layer400Entities.get().forEach((entity) => {
        if (entity.isInFov) {
            drawCell(entity);
        } else {
            drawCell(entity, { color: "#100" });
        }
    });
};