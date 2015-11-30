"use strict";

// converts the (current) date to the Julian date
const getJulianDate = date => {

    const now = date || new Date();

    const day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    if (month <= 2) {
        year -= 1;
        month += 12;
    }

    const a = Math.floor(year / 100);
    const b = 2 - a + Math.floor(a / 4);

    return Math.floor((year + 4716) * 365.25) + Math.floor((month + 1) * 30.6001) + day + b - 1524.5;
};

module.exports = getJulianDate;
