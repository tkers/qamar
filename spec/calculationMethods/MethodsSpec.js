"use strict";

const Methods = require("../../lib/calculationMethods");

describe("Methods", () => {

    it("should be exported", () => {
        expect(typeof Methods).toEqual("object");
    });

    it("should export the Angle presents", () => {
        expect(typeof Methods.Angles).toEqual("object");
    });

    it("should export the HighLatitudes rules", () => {
        expect(typeof Methods.HighLatitudes).toEqual("object");
    });

    it("should export the Midnight rules", () => {
        expect(typeof Methods.Midnight).toEqual("object");
    });

    it("should export the Asr rules", () => {
        expect(typeof Methods.Asr).toEqual("object");
    });
});
