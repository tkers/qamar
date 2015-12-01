"use strict";

const AngleUtils = require("../../geo/AngleUtils");
const degToRad = AngleUtils.degToRad;
const radToDeg = AngleUtils.radToDeg;

const getSunDeclination = require("./getSunDeclination");
const computeMidday = require("./computeMidday");

// compute the time when the sun reaches a certain angle
const computeTime = (julianDate, lat, ang, time) => {
    const d = getSunDeclination(julianDate, time);
    const v = radToDeg(Math.acos((-Math.sin(degToRad(ang)) - Math.sin(degToRad(d)) * Math.sin(degToRad(lat))) / (Math.cos(degToRad(d)) * Math.cos(degToRad(lat))))) / 15.0;
    return computeMidday(julianDate, time) + (ang > 90 ? -v : v);
};

module.exports = computeTime;
