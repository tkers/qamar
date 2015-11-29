"use strict";

const getAngle = require("./getAngle");

const KAABA = {
    lat: 21.4225,
    lng: 39.8262
};

const getKaabaAngle = (lat, lng) => getAngle(lat, lng, KAABA.lat, KAABA.lng);

module.exports = getKaabaAngle;
