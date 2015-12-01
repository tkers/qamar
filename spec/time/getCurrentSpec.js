"use strict";

const getCurrent = require("../../lib/time/getCurrent");

describe("getCurrent", () => {

    it("should be exported", () => {
        expect(typeof getCurrent).toEqual("function");
    });

    it("expects a list of hours as input", () => {

        let a;
        const doTest = () => {
            a = getCurrent();
        };

        expect(doTest).toThrowError();
        expect(a).not.toBeDefined();
    });

    it("should return the highest passed hour in the list", () => {

        const hour = 10;
        const fakeNow = new Date(2020, 1, 1, hour, 0, 0);
        const fakeTimes = [hour - 2, hour - 1, hour + 1, hour + 2];

        const current = getCurrent(fakeTimes, fakeNow);

        expect(current).toBe(1);
    });

    it("should include the current hour", () => {

        const hour = 10;
        const fakeNow = new Date(2020, 1, 1, hour, 0, 0);
        const fakeTimes = [hour - 2, hour - 1, hour, hour + 1, hour + 2];

        const current = getCurrent(fakeTimes, fakeNow);

        expect(current).toBe(2);
    });

    it("should take into account 24h wrapping", () => {

        const hour = 10;
        const fakeNow = new Date(2020, 1, 1, hour, 0, 0);

        const fakeTimesA = [hour + 2, hour - 2, hour - 1, hour + 1];
        const fakeTimesB = [hour + 1, hour + 2, hour - 2, hour - 1];
        const fakeTimesC = [hour - 1, hour + 1, hour + 2, hour - 2];

        const currentA = getCurrent(fakeTimesA, fakeNow);
        const currentB = getCurrent(fakeTimesB, fakeNow);
        const currentC = getCurrent(fakeTimesC, fakeNow);

        expect(currentA).toBe(2);
        expect(currentB).toBe(3);
        expect(currentC).toBe(0);
    });

    it("should return the last hour if all hours are passed", () => {

        const hour = 10;
        const fakeNow = new Date(2020, 1, 1, hour, 0, 0);
        const fakeTimes = [hour - 3, hour - 2, hour - 1];

        const current = getCurrent(fakeTimes, fakeNow);

        expect(current).toBe(2);
    });

    it("should return the last hour (of the previous day) if no hour has passed yet", () => {

        const hour = 10;
        const fakeNow = new Date(2020, 1, 1, hour, 0, 0);
        const fakeTimes = [hour + 1, hour + 2, hour + 3];

        const current = getCurrent(fakeTimes, fakeNow);

        expect(current).toBe(2);
    });
});
