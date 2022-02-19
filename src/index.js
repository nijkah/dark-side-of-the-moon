import "./lib/canvas.js";
import { clearCanvas, drawChar } from "./lib/canvas";

const player = {
    char: "@",
    color: "white",
    position: {
        x: 0,
        y: 0,
    },
};

drawChar(player);

let userInput = null;

document.addEventListener("keydown", (ev) => {
    userInput = ev.key;
    processUserInput();
});

const processUserInput = () => {
    if (userInput === "k") {
        player.position.y -= 1;
    }
    if (userInput === "l") {
        player.position.x += 1;
    }
    if (userInput === "j") {
        player.position.y += 1;
    }
    if (userInput === "h") {
        player.position.x -= 1;
    }

    clearCanvas();
    drawChar(player);
};