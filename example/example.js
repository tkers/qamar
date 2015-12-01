"use strict";

// import lib
const Qamar = require("../index");

// user settings
const settings = {
    angles: Qamar.Methods.Angles.JAFARI,
    asr: Qamar.Methods.Asr.STANDARD,
    highLatitudes: Qamar.Methods.HighLatitudes.ANGLE_BASED,
    midnight: Qamar.Methods.Midnight.SHIA,
    latitude: 52.3785,
    longitude: 4.9010
};

// display info
const result = Qamar.getInfo(settings);
console.log(result);
