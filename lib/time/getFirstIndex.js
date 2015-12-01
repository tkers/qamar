"use strict";

// returns the index of the lowest item in the list
const getFirstIndex = times => {

    let low = 0;
    for (let i = 1; i < times.length; i++) {
        if (times[i] < times[low])
            low = i;
    }

    return low;
};

module.exports = getFirstIndex;
