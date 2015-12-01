"use strict";

const getAsrAngle = require("./getAsrAngle");
const computeTime = require("./computeTime");

// compute the time for asr
const computeAsr = (julianDate, lat, shadowLength, time) => {
    const asrAngle = getAsrAngle(julianDate, lat, shadowLength, time);
    return computeTime(julianDate, lat, asrAngle, time);
};

module.exports = computeAsr;
