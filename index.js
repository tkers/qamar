"use strict";

// calculation methods
const Methods = require("./lib/calculationMethods");

// salat names for convenience
const salatNames = require("./lib/salatNames");

// geo dependencies
const getQibla = require("./lib/geo/getQibla");

// time dependencies
const getSalatTimes = require("./lib/time/getSalatTimes");
const getCurrent = require("./lib/time/getCurrent");
const isSawm = require("./lib/time/isSawm");
const TimeUtils = require("./lib/time/TimeUtils");
const hoursToString = TimeUtils.hoursToString;

// returns the salat times as formatted "hh:mm" strings
const getTimes = opts => {
    const times = getSalatTimes(opts);
    return times.map(hoursToString);
}

// utility function that returns all available info
const getInfo = opts => {
    const times = getSalatTimes(opts);
    const curr = getCurrent(times, opts.date);
    const sawm = isSawm(curr);
    const qibla = getQibla(opts);

    return {
        times: times.map(hoursToString),
        names: salatNames.EN,
        current: [curr, salatNames.EN[curr]],
        sawm,
        qibla
    };
}

// export public interface
module.exports = { Methods, getTimes, getQibla, getInfo };
