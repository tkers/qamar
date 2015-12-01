"use strict";

// dependencies
const AngleUtils = require("../../geo/AngleUtils");
const degToRad = AngleUtils.degToRad;
const radToDeg = AngleUtils.radToDeg;

const getSunDeclination = require("./getSunDeclination");

// compute the angle of the sun for asr
const getAsrAngle = (julianDate, lat, shadowLength, time) => {
    const d = getSunDeclination(julianDate, time);
    return -radToDeg(Math.atan(1.0 / (shadowLength + Math.tan(degToRad(Math.abs(lat - d))))));
};

module.exports = getAsrAngle;
