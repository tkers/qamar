"use strict";

// methods
const Methods = require("./lib/calculationMethods");

// geo
const getQibla = require("./lib/geo/getQibla");

// times
const getSalatTimes = require("./lib/time/getSalatTimes");
const getCurrent = require("./lib/time/getCurrent");
const isSawm = require("./lib/time/isSawm");
const TimeUtils = require("./lib/time/TimeUtils");
const hoursToString = TimeUtils.hoursToString;

const getTimes = opts => {
    const times = getSalatTimes(opts);
    return times.map(hoursToString);
}

// strings
const salatNames = require("./lib/salatNames");

// utility function
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
