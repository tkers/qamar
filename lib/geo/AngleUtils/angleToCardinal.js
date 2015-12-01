"use strict";

const angleToCardinal = angle => {

    const angleNorm = Math.floor(angle + 22.5) % 360;
    const part = Math.floor(angleNorm / 45);

    const DIRECTIONS = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return DIRECTIONS[part];
};

module.exports = angleToCardinal;
