"use strict";

const getKaabaAngle = require("./getKaabaAngle");
const AngleUtils = require("./AngleUtils");
const angleToCardinal = AngleUtils.angleToCardinal;

const getQibla = opts => {

    const lat = opts.latitude;
    const lng = opts.longitude;

    const angle = Math.round(getKaabaAngle(lat, lng));
    const cardinal = angleToCardinal(angle);
    return [angle, cardinal];
};

module.exports = getQibla;
