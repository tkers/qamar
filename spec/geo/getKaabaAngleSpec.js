"use strict";

const getKaabaAngle = require("../../lib/geo/getKaabaAngle");

describe("getKaabaAngle", () => {

    it("should be exported", () => {
        expect(typeof getKaabaAngle).toEqual("function");
    });

    it("should return the brearing towards the ka'aba", () => {

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

        const lonQ = getKaabaAngle(lon.lat, lon.lng);
        const oslQ = getKaabaAngle(osl.lat, osl.lng);
        const berQ = getKaabaAngle(ber.lat, ber.lng);

        expect(Math.round(lonQ)).toBe(119);
        expect(Math.round(oslQ)).toBe(139);
        expect(Math.round(berQ)).toBe(137);
    });

});
