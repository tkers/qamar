"use strict";

const TimeUtils = require("./TimeUtils");
const dateToSeconds = TimeUtils.dateToSeconds;

const getCurrent = (times, date) => {

    const now = date || new Date();
    const currentSecond = dateToSeconds(now);

    // Round because floats are terrible when fajr == isha
    // Although I assume there are neater solutions for this...
    const timeSwitch = times.map(t => Math.round(t * 3600));

    let minTime = 86401;
    let minIndex = -1;
    for (let i = 0; i < timeSwitch.length; i++) {
        if (timeSwitch[i] > minTime)
            continue;

        minTime = timeSwitch[i];
        minIndex = i;
    }

    for (let i = 0; i < 7; i++) {

        if (currentSecond >= timeSwitch[i])
            continue;

        const j = (i + minIndex) % 7;
        return (j + 6) % 7;
    }

    return (minIndex + 6) % 7;
};

module.exports = getCurrent;
