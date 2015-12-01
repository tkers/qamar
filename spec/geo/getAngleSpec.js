"use strict";

const getAngle = require("../../lib/geo/getAngle");

describe("getAngle", () => {

    it("should be exported", () => {
        expect(typeof getAngle).toEqual("function");
    });

    it("should return the brearing between 2 points", () => {

        const lon = {
            lat: 51.503329,
            lng: -0.119525
        };

        const osl = {
            lat: 59.911287,
            lng: 10.732904
        };

        const ber = {
            lat: 52.516397,
            lng: 13.378898
        };

        const lonOsl = getAngle(lon.lat, lon.lng, osl.lat, osl.lng);
        const oslBer = getAngle(osl.lat, osl.lng, ber.lat, ber.lng);
        const berLon = getAngle(ber.lat, ber.lng, lon.lat, lon.lng);

        expect(Math.round(lonOsl)).toBe(32);
        expect(Math.round(oslBer)).toBe(168);
        expect(Math.round(berLon)).toBe(268);
    });

});
