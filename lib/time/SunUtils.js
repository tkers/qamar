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

    const getEQT = time => {

        const D = julianDate + time / 24.0 - 2451545.0;

        const g = normalizeAngle(357.529 + 0.98560028 * D);
        const q = normalizeAngle(280.459 + 0.98564736 * D);
        const L = normalizeAngle(q + 1.915 * Math.sin(degToRad(g)) + 0.020 * Math.sin(degToRad(2 * g)));

        const e = 23.439 - 0.00000036 * D;
        const RA = normalizeHours(radToDeg(Math.atan2(Math.cos(degToRad(e)) * Math.sin(degToRad(L)), Math.cos(degToRad(L)))) / 15);

        return q / 15 - RA;
    };

    const getD = time => {

        const D = julianDate + time / 24.0 - 2451545.0;

        const g = normalizeAngle(357.529 + 0.98560028 * D);
        const q = normalizeAngle(280.459 + 0.98564736 * D);
        const L = normalizeAngle(q + 1.915 * Math.sin(degToRad(g)) + 0.020 * Math.sin(degToRad(2 * g)));

        const e = 23.439 - 0.00000036 * D;
        return radToDeg(Math.asin(Math.sin(degToRad(e)) * Math.sin(degToRad(L))));
    };

    const computeMidday = time => {
        const eqt = getEQT(time);
        return normalizeHours(12 - eqt);
    };

    const computeTime = (ang, time) => {
        const d = getD(time);
        const v = 1 / 15 * radToDeg(Math.acos((-Math.sin(degToRad(ang)) - Math.sin(degToRad(d)) * Math.sin(degToRad(lat))) / (Math.cos(degToRad(d)) * Math.cos(degToRad(lat)))));
        return computeMidday(time) + (ang > 90 ? -v : v);
    };

    const getAsrAngle = (shadowLength, time) => {
        const d = getD(time);
        return -radToDeg(Math.atan(1 / (shadowLength + Math.tan(degToRad(Math.abs(lat - d))))));
    };

    const computeAsr = (shadowLength, time) => {
        const asrAngle = getAsrAngle(shadowLength, lat, time);
        return computeTime(asrAngle, lat, time);
    };

    return { computeMidday, computeTime, computeAsr };
};

module.exports = { init, SUNRISE_ANGLE, SUNSET_ANGLE };
