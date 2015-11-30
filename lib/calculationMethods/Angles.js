"use strict";

const KARACHI = {
    imsaakOffset: 10,
    fajrAngle: 18,
    dhuhrOffset: 0,
    maghribOffset: 0,
    ishaAngle: 18
};

const JAFARI = {
    imsaakAngle: 18,
    fajrAngle: 16,
    dhuhrOffset : 0,
    maghribAngle : 4,
    ishaAngle : 15
};

const WML = {
    imsaakOffset: 10,
    fajrAngle: 18,
    dhuhrOffset : 0,
    maghribOffset : 0,
    ishaAngle : 17
};

const ISNA = {
    imsaakAngle: 18,
    fajrAngle : 15,
    dhuhrOffset : 0,
    maghribOffset : 0,
    ishaAngle : 15
};

const MAKKAH = {
    imsaakOffset: 10,
    fajrAngle : 19,
    dhuhrOffset : 0,
    maghribOffset : 0,
    ishaOffset : 90
};

const EGYPT = {
    imsaakOffset: 10,
    fajrAngle : 19.5,
    dhuhrOffset : 0,
    maghribOffset : 0,
    ishaAngle : 17.5
};

module.exports = { KARACHI, JAFARI, WML, ISNA, MAKKAH, EGYPT };
