"use strict";

const TimeUtils = require("./TimeUtils");
const dateToSeconds = TimeUtils.dateToSeconds;
const hoursToSeconds = TimeUtils.hoursToSeconds;

const getFirst = times => {

    let low = 0;
    for (let i = 1; i < times.length; i++) {
        if (times[i] < times[low])
            low = i;
    }

    return low;
};

const getCurrent = (times, date) => {

    const now = date || new Date();
    const currentSecond = dateToSeconds(now);

    // Round because floats are terrible when fajr == isha
    // Although I assume there are neater solutions for this...
    const timesInSec = times.map(hoursToSeconds);
    const total = times.length;

    const first = getFirst(timesInSec);

    for (let i = 0; i < total; i++) {

        if (currentSecond >= timesInSec[i])
            continue;

        return (first + total - 1 + i) % total;
    }

    return (first + total - 1) % total;
};

module.exports = getCurrent;
