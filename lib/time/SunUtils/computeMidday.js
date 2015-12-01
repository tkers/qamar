"use strict";

const TimeUtils = require("../TimeUtils");
const normalizeHours = TimeUtils.normalizeHours;
const getSunEQT = require("./getSunEQT");

// compute the time of midday
const computeMidday = (julianDate, time) => {
    const eqt = getSunEQT(julianDate, time);
    return normalizeHours(12.0 - eqt);
};

module.exports = computeMidday;
