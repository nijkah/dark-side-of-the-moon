// Base
export const Tile = {
    name: "Tile",
    components: [
        { type: "Appearance" },
        { type: "Description" },
        { type: "Layer100" },
    ],
};

export const Being = {
    name: "Being",
    components: [
        { type: "Appearance" },
        { type: "Defense" },
        { type: "Description" },
        { type: "Health" },
        { type: "IsBlocking" },
        { type: "Layer400" },
        { type: "Power" },
    ],
};

// Complex
export const Wall = {
    name: "Wall",
    inherit: ["Tile"],
    components: [
        { type: "IsBlocking" },
        { type: "IsOpaque" },
        {
            type: "Appearance",
            properties: { char: "#", color: "#AAA" },
        },
        {
            type: "Description",
            properties: { name: "wall" },
        },
    ],
};

export const Floor = {
    name: "Floor",
    inherit: ["Tile"],
    components: [
        {
            type: "Appearance",
            properties: { char: "•", color: "#555" },
        },
        {
            type: "Description",
            properties: { name: "floor" },
        },
    ],
};

export const Player = {
    name: "Player",
    inherit: ["Being"],
    components: [
        {
            type: "Appearance",
            properties: { char: "@", color: "#FFF" },
        },
        {
            type: "Description",
            properties: { name: "You" },
        },
    ],
};

export const Ghoul = {
    name: "Ghoul",
    inherit: ["Being"],
    components: [
        { type: "Ai" },
        {
            type: "Appearance",
            properties: { char: "g", color: "purple" },
        },
        {
            type: "Description",
            properties: { name: "ghoul" },
        },
    ],
};