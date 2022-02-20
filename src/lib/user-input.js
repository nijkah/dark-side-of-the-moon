import { Move } from "../state/components";

export const processUserInput = (player, userInput) => {
    if (userInput === "k" || userInput === "ArrowUp") {
        player.add(Move, { x: 0, y: -1 });
    }
    if (userInput === "l" || userInput === "ArrowRight") {
        player.add(Move, { x: 1, y: 0 });
    }
    if (userInput === "j" || userInput === "ArrowDown") {
        player.add(Move, { x: 0, y: 1 });
    }
    if (userInput === "h" || userInput === "ArrowLeft") {
        player.add(Move, { x: -1, y: 0 });
    }
    if (userInput === "y") {
        player.add(Move, { x: -1, y: -1 });
    }
    if (userInput === "u") {
        player.add(Move, { x: 1, y: -1 });
    }
    if (userInput === "b") {
        player.add(Move, { x: -1, y: 1 });
    }
    if (userInput === "n") {
        player.add(Move, { x: 1, y: 1 });
    }

    return null;
};

