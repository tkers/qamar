"use strict";

const getSunParameters = require("./getSunParameters");

// get the equation of time
const getSunEQT = (julianDate, time) => getSunParameters(julianDate, time).eqt;

module.exports = getSunEQT;
