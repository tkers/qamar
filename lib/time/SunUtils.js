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

const init = (julianDate, lat) => {

    const getSunParams = time => {

        const t = time || 0;
        const D = julianDate + t / 24.0 - 2451545.0;

        const g = normalizeAngle(357.529 + 0.98560028 * D);
        const q = normalizeAngle(280.459 + 0.98564736 * D);
        const L = normalizeAngle(q + 1.915 * Math.sin(degToRad(g)) + 0.020 * Math.sin(degToRad(2 * g)));

        const e = 23.439 - 0.00000036 * D;
        const RA = normalizeHours(radToDeg(Math.atan2(Math.cos(degToRad(e)) * Math.sin(degToRad(L)), Math.cos(degToRad(L)))) / 15.0);

        const declination = radToDeg(Math.asin(Math.sin(degToRad(e)) * Math.sin(degToRad(L))));
        const eqt =  q / 15.0 - RA;

        return { declination, eqt };
    };

    const getEQT = time => getSunParams(time).eqt;
    const getDeclination = time => getSunParams(time).declination;

    const computeMidday = time => {
        const eqt = getEQT(time);
        return normalizeHours(12.0 - eqt);
    };

    const computeTime = (ang, time) => {
        const d = getDeclination(time);
        const v = radToDeg(Math.acos((-Math.sin(degToRad(ang)) - Math.sin(degToRad(d)) * Math.sin(degToRad(lat))) / (Math.cos(degToRad(d)) * Math.cos(degToRad(lat))))) / 15.0;
        return computeMidday(time) + (ang > 90 ? -v : v);
    };

    const getAsrAngle = (shadowLength, time) => {
        const d = getDeclination(time);
        return -radToDeg(Math.atan(1.0 / (shadowLength + Math.tan(degToRad(Math.abs(lat - d))))));
    };

    const computeAsr = (shadowLength, time) => {
        const asrAngle = getAsrAngle(shadowLength, time);
        return computeTime(asrAngle, time);
    };

    return { computeMidday, computeTime, computeAsr };
};

module.exports = { init, SUNRISE_ANGLE, SUNSET_ANGLE };
