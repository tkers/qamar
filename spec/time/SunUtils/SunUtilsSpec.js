"use strict";

const SunUtils = require("../../../lib/time/SunUtils");

describe("SunUtils", () => {

    it("should be exported", () => {
        expect(typeof SunUtils).toEqual("object");
    });

    describe("sunrise angle constant", () => {

        it("should be exported", () => {
            expect(typeof SunUtils.SUNRISE_ANGLE).toEqual("number");
        });
    });

    describe("sunset angle constant", () => {

        it("should be exported", () => {
            expect(typeof SunUtils.SUNSET_ANGLE).toEqual("number");
        });
    });

    describe("date and latitude initializer", () => {
        it("should be exported", () => {
            expect(typeof SunUtils.init).toEqual("function");
        });

        it("should return the initialized functions", () => {

            const initedUtils = SunUtils.init(1, 1);
            expect(typeof initedUtils.computeMidday).toEqual("function");
            expect(typeof initedUtils.computeMidnight).toEqual("function");
            expect(typeof initedUtils.computeTime).toEqual("function");
            expect(typeof initedUtils.computeAsr).toEqual("function");

            const doCompute = () => {
                const initedMidday = initedUtils.computeMidday(1);
                const initedMidnight = initedUtils.computeMidnight();
                const initedTime = initedUtils.computeTime(1, 1);
                const initedAsr = initedUtils.computeAsr(1, 1);

                expect(typeof initedMidday).toEqual("number");
                expect(typeof initedMidnight).toEqual("number");
                expect(typeof initedTime).toEqual("number");
                expect(typeof initedAsr).toEqual("number");
            }

            expect(doCompute).not.toThrowError();
        });
    });

});
