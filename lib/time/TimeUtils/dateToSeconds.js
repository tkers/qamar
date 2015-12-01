"use strict";

// converts the given date to seconds
const dateToSeconds = date => date.getSeconds() + 60 * date.getMinutes() + 60 * 60 * date.getHours();

module.exports = dateToSeconds;
