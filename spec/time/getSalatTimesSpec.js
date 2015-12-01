"use strict";

const getSalatTimes = require("../../lib/time/getSalatTimes");

describe("getSalatTimes", () => {

    it("should be exported", () => {
        expect(typeof getSalatTimes).toEqual("function");
    });
    
});
