"use strict";

/*
    Most schools of thought concider midnight (when Isha ends) to be
    exaclty between sunset and sunrise. For Shia school of thought this is
    between sunset and Fajr (slightly earlier).
*/

const STANDARD = [4, 1]; // between sunset and sunrise
const SHIA = [4, 0];     // between sunset and fajr

module.exports = { STANDARD, SHIA };
