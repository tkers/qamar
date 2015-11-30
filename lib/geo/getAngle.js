"use strict";

// dependencies
const AngleUtils = require("./AngleUtils");
const degToRad = AngleUtils.degToRad;
const radToDeg = AngleUtils.radToDeg;
const normalizeAngle = AngleUtils.normalizeAngle;

// returns the initial bearing from (lat1, lng1) to (lat2, lng2)
const getAngle = (fromLat, fromLng, toLat, toLng) => {

    const lat1 = degToRad(fromLat);
    const lng1 = degToRad(fromLng);
    const lat2 = degToRad(toLat);
    const lng2 = degToRad(toLng);

    const dLng = lng2 - lng1;
    const y = Math.sin(dLng) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);

    const brng = radToDeg(Math.atan2(y, x));
    return normalizeAngle(brng);
};

module.exports = getAngle;
