"use strict";

const getCurrent = require("../../lib/time/getCurrent");

describe("getCurrent", () => {

    it("should be exported", () => {
        expect(typeof getCurrent).toEqual("function");
    });
    
});
