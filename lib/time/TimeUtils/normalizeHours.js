"use strict";

// dependencies
const makeNormalizer = require("../../makeNormalizer");

// normalizes the given number between 0 and 24
const normalizeHours = makeNormalizer(24.0);

module.exports = normalizeHours;
