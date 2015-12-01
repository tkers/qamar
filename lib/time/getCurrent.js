"use strict";

const getFirstIndex = require("./getFirstIndex");
const TimeUtils = require("./TimeUtils");
const dateToSeconds = TimeUtils.dateToSeconds;
const hoursToSeconds = TimeUtils.hoursToSeconds;

// get the current salat index from a list of times
const getCurrent = (times, date) => {

    const now = date || new Date();
    const total = times.length;

    // round to seconds because it is possible that fajr == isha
    // and float comparisation is not so great
    const currentSecond = dateToSeconds(now);
    const timesInSec = times.map(hoursToSeconds);

    // get the earliest time (isha can be before or after 0:00)
    const first = getFirstIndex(timesInSec);

    for (let i = 0; i < total; i++) {

        // adjusted counter starts at lowest value
        const j = (first + i) % total;

        // loop over the times until we find an upcoming item
        if (currentSecond >= timesInSec[j])
            continue;

        // current salat was the previous item
        return (j + total - 1) % total;
    }

    // otherwise the current salat is the last item
    return (first + total - 1) % total;
};

module.exports = getCurrent;
