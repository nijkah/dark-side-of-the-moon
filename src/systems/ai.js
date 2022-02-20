import world from "../state/ecs";
import { Ai, Description } from "../state/components";

const aiEntities = world.createQuery({
    all: [Ai, Description],
});

export const ai = () => {
    aiEntities.get().forEach((entity) => {
        console.log(
            `${entity.description.name} ${entity.id} ponders it's existence.`
        );
    });
};