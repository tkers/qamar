"use strict";

// calculation methods
const Methods = require("./calculationMethods");

// salat names for convenience
const salatNames = require("./salatNames");

// geo dependencies
const getQibla = require("./geo/getQibla");

// time dependencies
const getSalatTimes = require("./time/getSalatTimes");
const getCurrent = require("./time/getCurrent");
const isSawm = require("./time/isSawm");
const TimeUtils = require("./time/TimeUtils");
const hoursToString = TimeUtils.hoursToString;

// returns the salat times as formatted "hh:mm" strings
const getTimes = opts => {
    const times = getSalatTimes(opts);
    return times.map(hoursToString);
};

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
};

// export public interface
module.exports = { Methods, getTimes, getQibla, getInfo };
