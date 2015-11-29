"use strict";

// dependencies
const AngleUtils = require("./AngleUtils");
const degToRad = AngleUtils.degToRad;
const radToDeg = AngleUtils.radToDeg;
const normalizeAngle = AngleUtils.normalizeAngle;

const getAngle = (fromLat, fromLng, toLat, toLng) => {

    const lat1 = degToRad(fromLat);
    const lng1 = degToRad(fromLng);
    const lat2 = degToRad(toLat);
    const lng2 = degToRad(toLng);

    const dLng = lng2 - lng1;
    const a = Math.sin(dLng);
    const b = Math.cos(lat1) * Math.tan(lat2) - Math.sin(lat1) * Math.cos(dLng);

    const ang = radToDeg(Math.atan2(a, b));
    return normalizeAngle(ang);
};

module.exports = getAngle;
