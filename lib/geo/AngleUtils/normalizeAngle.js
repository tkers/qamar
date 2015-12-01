"use strict";

// dependencies
const makeNormalizer = require("../../makeNormalizer");

// normalizes an angle from 0 to 360
const normalizeAngle = makeNormalizer(360.0);

module.exports = normalizeAngle;
