"use strict";

// dependencies
const makeNormalizer = require("../makeNormalizer");

const normalizeHours = makeNormalizer(24.0);

const dateToSeconds = date => date.getSeconds() + 60 * date.getMinutes() + 60 * 60 * date.getHours();
const hoursToSeconds = h => Math.round(h * 3600);

const zeroPad = x => x < 10 ? "0" + x : "" + x;

const hoursToString = hours => {

    const normHours = normalizeHours(hours);

    const h = Math.floor(normHours);
    const m = Math.floor((normHours - h) * 60);

    return h + ":" + zeroPad(m);
};

module.exports = { normalizeHours, hoursToString, dateToSeconds, hoursToSeconds };
