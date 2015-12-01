"use strict";

// submodules
const normalizeHours = require("./normalizeHours");
const dateToSeconds = require("./dateToSeconds");
const hoursToSeconds = require("./hoursToSeconds");
const hoursToString = require("./hoursToString");

module.exports = { normalizeHours, hoursToString, dateToSeconds, hoursToSeconds };
