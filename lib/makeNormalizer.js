"use strict";

// returns a curried normalizer function wich wraps x to the [0, max) range
const makeNormalizer = max => x => {
    const y = x % max;
    return y < 0 ? y + max : Math.abs(y);
};

module.exports = makeNormalizer;
