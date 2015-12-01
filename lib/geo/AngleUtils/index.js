"use strict";

// convert between degrees and radius
const degToRad = require("./degToRad");
const radToDeg = require("./radToDeg");

// wrap an angle between 0 and 360 degrees
const normalizeAngle = require("./normalizeAngle");

// returns one of 8 cardinal names for the given angle (NESW and diagonals)
const angleToCardinal = require("./angleToCardinal");

module.exports = { degToRad, radToDeg, normalizeAngle, angleToCardinal };
