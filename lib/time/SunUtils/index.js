"use strict";

const computeMidday = require("./computeMidday");
const computeMidnight = require("./computeMidnight");
const computeTime = require("./computeTime");
const computeAsr = require("./computeAsr");

const SUNSET_ANGLE = 0.833;
const SUNRISE_ANGLE = 180 - SUNSET_ANGLE;

// initialise this module with the (current) julianDate and latitude
const init = (julianDate, lat) => ({

    computeMidday: time => computeMidday(julianDate, time),
    computeMidnight,
    computeTime: (ang, time) => computeTime(julianDate, lat, ang, time),
    computeAsr: (shadowLength, time) => computeAsr(julianDate, lat, shadowLength, time)
});

module.exports = { init, SUNRISE_ANGLE, SUNSET_ANGLE };
