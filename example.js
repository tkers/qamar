"use strict";

// import lib
const Qamar = require("./index");

// user settings
const settings = {
    angles: Qamar.Methods.Angles.JAFARI,
    asrShadowLength: Qamar.Methods.Asr.STANDARD,
    highLatitudeCorrection: Qamar.Methods.HighLatitudes.ANGLE_BASED,
    latitude: 52.3785,
    longitude: 4.9010
};

// display info
const result = Qamar.getInfo(settings);
console.log(result);
