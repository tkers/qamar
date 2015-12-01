"use strict";

// dependency
const normalizeHours = require("./normalizeHours");

// adds a single leading zero to numbers lower than 10
const zeroPad = x => x < 10 ? "0" + x : "" + x;

// formats an amount of hours to a "hh:mm" string
const hoursToString = hours => {

    const normHours = normalizeHours(hours);

    const h = Math.floor(normHours);
    const m = Math.floor((normHours - h) * 60);

    return h + ":" + zeroPad(m);
};

module.exports = hoursToString;
