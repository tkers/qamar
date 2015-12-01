"use strict";

const TimeUtils = require("../TimeUtils");
const normalizeHours = TimeUtils.normalizeHours;

// compute the middle of the night
const computeMidnight = (nightStart, nightEnd) => normalizeHours(nightEnd - nightStart) / 2 + nightStart;

module.exports = computeMidnight;
