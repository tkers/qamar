"use strict";

const makeNormalizer = require("../lib/makeNormalizer");

describe("makeNormalizer", () => {

    it("should be exported", () => {
        expect(typeof makeNormalizer).toEqual("function");
    });

    it("should generate a new function", () => {

        const myNormalizer = makeNormalizer(10);
        expect(typeof myNormalizer).toEqual("function");
    });

    it("should generate a new function that normalizes its input", () => {

        const binNormalizer = makeNormalizer(2); // {0, 1}
        const octNormalizer = makeNormalizer(8); // [0 - 7)
        const decNormalizer = makeNormalizer(10); // [0 - 9)

        const origA = 0;
        const origB = 1;
        const origC = 6;
        const origD = 27;

        const binA = binNormalizer(origA);
        const binB = binNormalizer(origB);
        const binC = binNormalizer(origC);
        const binD = binNormalizer(origD);

        const octA = octNormalizer(origA);
        const octB = octNormalizer(origB);
        const octC = octNormalizer(origC);
        const octD = octNormalizer(origD);

        const decA = decNormalizer(origA);
        const decB = decNormalizer(origB);
        const decC = decNormalizer(origC);
        const decD = decNormalizer(origD);

        expect(binA).toBe(0);
        expect(binB).toBe(1);
        expect(binC).toBe(0);
        expect(binD).toBe(1);

        expect(octA).toBe(0);
        expect(octB).toBe(1);
        expect(octC).toBe(6);
        expect(octD).toBe(3);

        expect(decA).toBe(0);
        expect(decB).toBe(1);
        expect(decC).toBe(6);
        expect(decD).toBe(7);
    });

    it("should correctly wrap negative numbers", () => {

        const binNormalizer = makeNormalizer(2); // {0, 1}
        const octNormalizer = makeNormalizer(8); // [0 - 7)
        const decNormalizer = makeNormalizer(10); // [0 - 9)

        const origA = -0;
        const origB = -1;
        const origC = -23;

        const binA = binNormalizer(origA);
        const binB = binNormalizer(origB);
        const binC = binNormalizer(origC);

        const octA = octNormalizer(origA);
        const octB = octNormalizer(origB);
        const octC = octNormalizer(origC);

        const decA = decNormalizer(origA);
        const decB = decNormalizer(origB);
        const decC = decNormalizer(origC);

        expect(binA).toBe(0);
        expect(binB).toBe(1);
        expect(binC).toBe(1);

        expect(octA).toBe(0);
        expect(octB).toBe(7);
        expect(octC).toBe(1);

        expect(decA).toBe(0);
        expect(decB).toBe(9);
        expect(decC).toBe(7);
    });
});
