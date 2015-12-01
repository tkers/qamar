"use strict";

const getFirstIndex = require("../../lib/time/getFirstIndex");

describe("getFirstIndex", () => {

    it("should be exported", () => {
        expect(typeof getFirstIndex).toEqual("function");
    });

    it("expects a list as input", () => {

        let a;
        const doTest = () => {
            a = getFirstIndex();
        };

        expect(doTest).toThrowError();
        expect(a).not.toBeDefined();
    });

    it("returns 0 on an empty list", () => {

        const a = getFirstIndex([]);
        expect(a).toBe(0);
    });

    it("should return the index of the lowest value in a list", () => {

        const a = getFirstIndex([1, 2, 3, 4, 5]);
        const b = getFirstIndex([5, 1, 2, 3, 4]);
        const c = getFirstIndex([4, 5, 1, 2, 3]);
        const d = getFirstIndex([3, 4, 5, 1, 2]);
        const e = getFirstIndex([2, 3, 4, 5, 1]);

        expect(a).toBe(0);
        expect(b).toBe(1);
        expect(c).toBe(2);
        expect(d).toBe(3);
        expect(e).toBe(4);
    });

    it("should return the lowest index when multiple values are the lowest", () => {

        const a = getFirstIndex([1, 1, 2, 2, 2]);
        const b = getFirstIndex([2, 1, 1, 1, 1]);
        const c = getFirstIndex([4, 5, 1, 1, 1]);
        const d = getFirstIndex([3, 4, 5, 1, 1]);
        const e = getFirstIndex([1, 1, 1, 1, 1]);

        expect(a).toBe(0);
        expect(b).toBe(1);
        expect(c).toBe(2);
        expect(d).toBe(3);
        expect(e).toBe(0);
    });

});
