"use strict";

const makeNormalizer = require("../lib/makeNormalizer");

describe("makeNormalizer", () => {

    it("should be exported", () => {
        expect(typeof makeNormalizer).toEqual("function");
    });

});
