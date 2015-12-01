"use strict";

const isSawm = require("../../lib/time/isSawm");

describe("isSawm", () => {

    it("should be exported", () => {
        expect(typeof isSawm).toEqual("function");
    });

});
