"use strict";

const getQibla = require("../../lib/geo/getQibla");

describe("getQibla", () => {

    it("should be exported", () => {
        expect(typeof getQibla).toEqual("function");
    });

    it("should return the brearing and cardinal direction towards the ka'aba", () => {

        const lon = {
            latitude: 51.503329,
            longitude: -0.119525
        };

        const osl = {
            latitude: 59.911287,
            longitude: 10.732904
        };

        const ber = {
            latitude: 52.516397,
            longitude: 13.378898
        };

        const lonQ = getQibla(lon);
        const oslQ = getQibla(osl);
        const berQ = getQibla(ber);

        expect(Math.round(lonQ[0])).toBe(119);
        expect(lonQ[1]).toBe("SE");
        expect(Math.round(oslQ[0])).toBe(139);
        expect(oslQ[1]).toBe("SE");
        expect(Math.round(berQ[0])).toBe(137);
        expect(berQ[1]).toBe("SE");
    });
});
