"use strict";

// dependencies
const AngleUtils = require("../geo/AngleUtils");
const degToRad = AngleUtils.degToRad;
const radToDeg = AngleUtils.radToDeg;
const normalizeAngle = AngleUtils.normalizeAngle;

const TimeUtils = require("./TimeUtils");
const normalizeHours = TimeUtils.normalizeHours;

const SUNSET_ANGLE = 0.833;
const SUNRISE_ANGLE = 180 - SUNSET_ANGLE;

// initialise this module with the (current) julianDate and latitude
const init = (julianDate, lat) => {

    // calculates the Equation of Time and declination of the sun
    const getSunParams = time => {

        const t = time || 0;

        // elapsed days since the J2000.0 epoch
        const D = julianDate - 2451545.0 + t / 24.0 ;

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

    // get the equation of time
    const getEQT = time => getSunParams(time).eqt;

    // get the declination of the sun
    const getDeclination = time => getSunParams(time).declination;

    // compute the time of midday
    const computeMidday = time => {
        const eqt = getEQT(time);
        return normalizeHours(12.0 - eqt);
    };

    // compute the middle of the night
    const computeMidnight = (nightStart, nightEnd) => normalizeHours(nightEnd - nightStart) / 2 + nightStart;

    // compute the time when the sun reaches a certain angle
    const computeTime = (ang, time) => {
        const d = getDeclination(time);
        const v = radToDeg(Math.acos((-Math.sin(degToRad(ang)) - Math.sin(degToRad(d)) * Math.sin(degToRad(lat))) / (Math.cos(degToRad(d)) * Math.cos(degToRad(lat))))) / 15.0;
        return computeMidday(time) + (ang > 90 ? -v : v);
    };

    // compute the angle of the sun for asr
    const getAsrAngle = (shadowLength, time) => {
        const d = getDeclination(time);
        return -radToDeg(Math.atan(1.0 / (shadowLength + Math.tan(degToRad(Math.abs(lat - d))))));
    };

    // compute the time for asr
    const computeAsr = (shadowLength, time) => {
        const asrAngle = getAsrAngle(shadowLength, time);
        return computeTime(asrAngle, time);
    };

    return { computeMidday, computeMidnight, computeTime, computeAsr };
};

module.exports = { init, SUNRISE_ANGLE, SUNSET_ANGLE };
