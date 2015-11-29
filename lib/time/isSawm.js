"use strict";

// dependencies
const getCurrent = require("./getCurrent");

const isSawm = (times, date) => {
    const curr = typeof times === "number" ? times : getCurrent(times, date);
    return curr < 5;
};

module.exports = isSawm;
