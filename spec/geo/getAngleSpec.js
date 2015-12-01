"use strict";

const getAngle = require("../../lib/geo/getAngle");

describe("getAngle", () => {

    it("should be exported", () => {
        expect(typeof getAngle).toEqual("function");
    });

});
