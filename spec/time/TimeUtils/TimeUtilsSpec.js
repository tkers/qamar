"use strict";

const TimeUtils = require("../../../lib/time/TimeUtils");

describe("TimeUtils", () => {

    it("should be exported", () => {
        expect(typeof TimeUtils).toEqual("object");
    });

    it("should export the utility functions", () => {
        expect(typeof TimeUtils.normalizeHours).toEqual("function");
        expect(typeof TimeUtils.hoursToString).toEqual("function");
        expect(typeof TimeUtils.dateToSeconds).toEqual("function");
        expect(typeof TimeUtils.hoursToSeconds).toEqual("function");
    });

});
