"use strict";

const getQibla = require("../../lib/geo/getQibla");

describe("getQibla", () => {

    it("should be exported", () => {
        expect(typeof getQibla).toEqual("function");
    });

});
