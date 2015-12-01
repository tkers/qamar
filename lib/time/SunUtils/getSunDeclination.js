"use strict";

const getSunParameters = require("./getSunParameters");

// get the declination of the sun
const getSunDeclination = (julianDate, time) => getSunParameters(julianDate, time).declination;

module.exports = getSunDeclination;
