"use strict";

const getJulianDate = require("../../lib/time/getJulianDate");

describe("getJulianDate", () => {

    it("should be exported", () => {
        expect(typeof getJulianDate).toEqual("function");
    });

    it("should return the Julian date of a given date", () => {

        const d1 = new Date(2010, 5, 15);
        const j1 = getJulianDate(d1);

        const d2 = new Date(2015, 9, 30);
        const j2 = getJulianDate(d2);

        const d3 = new Date(2020, 0, 3);
        const j3 = getJulianDate(d3);

        expect(j1).toBe(2455362.5);
        expect(j2).toBe(2457325.5);
        expect(j3).toBe(2458851.5);
    });

    it("should ignore hours, minutes and seconds", () => {

        const d1 = new Date(2010, 5, 15, 1, 0, 0);
        const j1 = getJulianDate(d1);

        const d2 = new Date(2015, 9, 30, 12, 30, 0);
        const j2 = getJulianDate(d2);

        const d3 = new Date(2020, 0, 3, 20, 45, 45);
        const j3 = getJulianDate(d3);

        expect(j1).toBe(2455362.5);
        expect(j2).toBe(2457325.5);
        expect(j3).toBe(2458851.5);
    });
});
