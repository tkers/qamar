"use strict";

// dependencies
const getCurrent = require("./getCurrent");

// returns true when we are between fajr and maghreb
// accepts either the list of times or the current salat index
const isSawm = (times, date) => {
    const curr = typeof times === "number" ? times : getCurrent(times, date);
    return curr < 5;
};

module.exports = isSawm;
