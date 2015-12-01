"use strict";

const getJulianDate = require("../../lib/time/getJulianDate");

describe("getJulianDate", () => {

    it("should be exported", () => {
        expect(typeof getJulianDate).toEqual("function");
    });
    
});
