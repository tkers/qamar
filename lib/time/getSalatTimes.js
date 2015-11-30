"use strict";

// dependencies
const getJulianDate = require("./getJulianDate");
const TimeUtils = require("./TimeUtils");
const normalizeHours = TimeUtils.normalizeHours;
const SunUtils = require("./SunUtils");
const Methods = require("../calculationMethods");

const calculateTimes = opts => {

    // get options
    const now = opts.date || new Date();
    const lngOffset = opts.longitude / 15.0;
    const lat = opts.latitude;
    const timezone = opts.timezone || -now.getTimezoneOffset() / 60.0;
    let precision = opts.precision || 3;

    const angles = opts.angles;
    const asrShadowLength = opts.asr || Methods.Asr.STANDARD;
    const midnight = opts.midnight || Methods.Midnight.STANDARD;
    const getNightPortion = opts.highLatitudes;

    const dhuhrAsOffset = typeof angles.dhuhrOffset !== "undefined";
    const maghribAsOffset = typeof angles.maghribOffset !== "undefined";
    const ishaAsOffset = typeof angles.ishaOffset !== "undefined";

    // init
    const julianDate = getJulianDate(now) - lngOffset / 24.0;
    const sunCalc = SunUtils.init(julianDate, lat);

    let times = Array(8).fill(0);

    // Calculate times
    while (precision --> 0) {

        times[0] = sunCalc.computeTime(180 - angles.fajrAngle, times[0]);
        times[1] = sunCalc.computeTime(SunUtils.SUNRISE_ANGLE, times[1]);
        times[2] = sunCalc.computeMidday(times[2]);
        times[3] = sunCalc.computeAsr(asrShadowLength, times[3]);
        times[4] = sunCalc.computeTime(SunUtils.SUNSET_ANGLE, times[4]);
        if (!maghribAsOffset)
            times[5] = sunCalc.computeTime(angles.maghribAngle, times[5]);
        if (!ishaAsOffset)
            times[6] = sunCalc.computeTime(angles.ishaAngle, times[6]);
    }

    // Add offsets
    if (dhuhrAsOffset)   times[2] += angles.dhuhrOffset / 60.0;
    if (maghribAsOffset) times[5] = times[4] + angles.maghribOffset / 60.0;
    if (ishaAsOffset)    times[6] = times[5] + angles.ishaOffset    / 60.0;

    // Adjust for high latitudes
    if (typeof getNightPortion !== "undefined") {

        const nightTime = normalizeHours(times[1] - times[4]);

        const fajrDiff = nightTime * getNightPortion(angles.fajrAngle);
        const ishaDiff = nightTime * getNightPortion(ishaAsOffset ? 18.0 : angles.ishaAngle);
        const maghribDiff = nightTime * getNightPortion(maghribAsOffset ? 4.0 : angles.maghribAngle);

        if (isNaN(times[0]) || normalizeHours(times[1] - times[0]) > fajrDiff)
            times[0] = times[1] - fajrDiff;
        if (isNaN(times[5]) || normalizeHours(times[5] - times[4]) > maghribDiff)
            times[5] = times[4] + maghribDiff;
        if (isNaN(times[6]) || normalizeHours(times[6] - times[4]) > ishaDiff)
            times[6] = times[4] + ishaDiff;
    }

    // add midnight
    times[7] = sunCalc.computeMidnight(times[midnight[0]], times[midnight[1]]);

    // Adjust for timezone
    times = times.map(t => t + timezone - lngOffset);

    // normalize to 24h
    return times.map(normalizeHours);
};

module.exports = calculateTimes;
