"use strict";

// dependencies
const makeNormalizer = require("../makeNormalizer");

// normalizes the given number between 0 and 24
const normalizeHours = makeNormalizer(24.0);

// converts the given date to seconds
const dateToSeconds = date => date.getSeconds() + 60 * date.getMinutes() + 60 * 60 * date.getHours();

// converts the given hours to seconds
const hoursToSeconds = h => Math.round(h * 3600);

// adds a single leading zero to numbers lower than 10
const zeroPad = x => x < 10 ? "0" + x : "" + x;

// formats an amount of hours to a "hh:mm" string
const hoursToString = hours => {

    const normHours = normalizeHours(hours);

    const h = Math.floor(normHours);
    const m = Math.floor((normHours - h) * 60);

    return h + ":" + zeroPad(m);
};

module.exports = { normalizeHours, hoursToString, dateToSeconds, hoursToSeconds };
