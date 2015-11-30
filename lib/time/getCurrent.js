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

    for (let i = 0; i < timeSwitch.length; i++) {

        if (currentSecond >= timeSwitch[i])
            continue;

        const j = (i + minIndex) % timeSwitch.length;
        return (j + timeSwitch.length - 1) % timeSwitch.length;
    }

    return (minIndex + timeSwitch.length - 1) % timeSwitch.length;
};

module.exports = getCurrent;
