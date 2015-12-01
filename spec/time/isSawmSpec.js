"use strict";

const isSawm = require("../../lib/time/isSawm");

describe("isSawm", () => {

    it("should be exported", () => {
        expect(typeof isSawm).toEqual("function");
    });

    it("should accept the current hour as argument", () => {

        const a = isSawm(0);
        const b = isSawm(1);
        const c = isSawm(4);
        const d = isSawm(5);
        const e = isSawm(6);

        expect(a).toEqual(true);
        expect(b).toEqual(true);
        expect(c).toEqual(true);
        expect(d).toEqual(false);
        expect(e).toEqual(false);
    });

    it("should accept a list of hours and the current date as argument", () => {

        const hour = 10;
        const fakeNow = new Date(2020, 1, 1, hour, 0, 0);

        const fakeTimesA = [hour - 5, hour - 4, hour - 3, hour - 2, hour - 1, hour + 1, hour + 2];
        const fakeTimesB = [hour - 6, hour - 5, hour - 4, hour - 3, hour - 2, hour - 1, hour + 1];
        const fakeTimesC = [hour - 7, hour - 6, hour - 5, hour - 4, hour - 3, hour - 2, hour - 1];

        const sawmA = isSawm(fakeTimesA, fakeNow);
        const sawmB = isSawm(fakeTimesB, fakeNow);
        const sawmC = isSawm(fakeTimesC, fakeNow);

        expect(sawmA).toBe(true);
        expect(sawmB).toBe(false);
        expect(sawmC).toBe(false);
    });

});
