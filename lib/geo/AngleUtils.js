"use strict";

// dependencies
const makeNormalizer = require("../makeNormalizer");

const degToRad = deg => deg * Math.PI / 180;
const radToDeg = rad => rad * 180 / Math.PI;

const normalizeAngle = makeNormalizer(360.0);

const angleToCardinal = angle => {

    const angleNorm = Math.floor(angle + 22.5) % 360;
    const part = Math.floor(angleNorm / 45);

    const DIRECTIONS = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return DIRECTIONS[part];
};

module.exports = { degToRad, radToDeg, normalizeAngle, angleToCardinal };
