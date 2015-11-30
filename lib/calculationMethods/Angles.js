"use strict";

/*
    fajrAngle: angle between sun and the horizon (in degrees)
    dhuhrOffset: time offset relative to true noon (in minutes)
    maghribOffset: time offset relative to sunset
    maghribAngle: angle between sun and horizon (overrides maghribOffset)
    ishaOffset: time offset relative to maghrib
    ishaAngle: angle between sun and horizon (overrides ishaOffset)
*/

const KARACHI = {
    fajrAngle: 18,
    dhuhrOffset: 0,
    maghribOffset: 0,
    ishaAngle: 18
};

const JAFARI = {
    fajrAngle: 16,
    dhuhrOffset : 0,
    maghribAngle : 4,
    ishaAngle : 15
};

const WML = {
    fajrAngle: 18,
    dhuhrOffset : 0,
    maghribOffset : 0,
    ishaAngle : 17
};

const ISNA = {
    fajrAngle : 15,
    dhuhrOffset : 0,
    maghribOffset : 0,
    ishaAngle : 15
};

const MAKKAH = {
    fajrAngle : 19,
    dhuhrOffset : 0,
    maghribOffset : 0,
    ishaOffset : 90
};

const EGYPT = {
    fajrAngle : 19.5,
    dhuhrOffset : 0,
    maghribOffset : 0,
    ishaAngle : 17.5
};

module.exports = { KARACHI, JAFARI, WML, ISNA, MAKKAH, EGYPT };
