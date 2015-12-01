"use strict";

const getKaabaAngle = require("../../lib/geo/getKaabaAngle");

describe("getKaabaAngle", () => {

    it("should be exported", () => {
        expect(typeof getKaabaAngle).toEqual("function");
    });

});
