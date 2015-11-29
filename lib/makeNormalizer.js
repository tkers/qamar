"use strict";

const makeNormalizer = max => x => {
    const y = x % max;
    return y < 0 ? y + max : Math.abs(y);
};

module.exports = makeNormalizer;
