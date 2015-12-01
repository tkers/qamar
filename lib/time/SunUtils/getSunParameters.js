"use strict";

const AngleUtils = require("../../geo/AngleUtils");
const degToRad = AngleUtils.degToRad;
const radToDeg = AngleUtils.radToDeg;
const normalizeAngle = AngleUtils.normalizeAngle;

const TimeUtils = require("../TimeUtils");
const normalizeHours = TimeUtils.normalizeHours;

// calculates the Equation of Time and declination of the sun
const getSunParams = (julianDate, time) => {

    const t = time || 0;

    // elapsed days since the J2000.0 epoch
    const D = julianDate - 2451545.0 + t / 24.0;

    // mean anomaly of the sun
    const g = normalizeAngle(357.529 + 0.98560028 * D);

    // mean longitude of the sun
    const q = normalizeAngle(280.459 + 0.98564736 * D);

    // geocentric apparent ecliptic longitude of the sun - adjusted for aberration
    const L = normalizeAngle(q + 1.915 * Math.sin(degToRad(g)) + 0.020 * Math.sin(degToRad(2 * g)));

    //  mean obliquity of the ecliptic
    const e = 23.439 - 0.00000036 * D;

    // right ascension of the sun
    const RA = normalizeHours(radToDeg(Math.atan2(Math.cos(degToRad(e)) * Math.sin(degToRad(L)), Math.cos(degToRad(L)))) / 15.0);

    const declination = radToDeg(Math.asin(Math.sin(degToRad(e)) * Math.sin(degToRad(L))));
    const eqt =  q / 15.0 - RA;

    return { declination, eqt };
};

module.exports = getSunParams;
