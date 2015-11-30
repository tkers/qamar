"use strict";

const getAngle = require("./getAngle");

// position of the ka'aba
const KAABA = {
    lat: 21.4225,
    lng: 39.8262
};

// returns the bearing of the ka'aba from (lat, lng)
const getKaabaAngle = (lat, lng) => getAngle(lat, lng, KAABA.lat, KAABA.lng);

module.exports = getKaabaAngle;
