"use strict";

const Qamar = require("../lib/Qamar");

describe("Qamar", () => {

    it("should be exported", () => {
        expect(typeof Qamar).toEqual("object");
    });

    it("should export the calculation methods", () => {
        expect(typeof Qamar.Methods).toEqual("object");
    });

    it("should export the getTimes function", () => {
        expect(typeof Qamar.getTimes).toEqual("function");
    });

    it("should export the getQibla function", () => {
        expect(typeof Qamar.getQibla).toEqual("function");
    });

    it("should export the getInfo function", () => {
        expect(typeof Qamar.getInfo).toEqual("function");
    });
});
