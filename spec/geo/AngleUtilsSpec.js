"use strict";

const AngleUtils = require("../../lib/geo/AngleUtils");

describe("AngleUtils", () => {

    it("should be exported", () => {
        expect(typeof AngleUtils).toEqual("object");
    });

    describe("degToRad", () => {

        it("should be exported", () => {
            expect(typeof AngleUtils.degToRad).toEqual("function");
        });

        it("expects a number as input", () => {

            const x = AngleUtils.degToRad();
            expect(x).not.toBe(NaN);
        });

        it("should convert the degrees to radii", () => {

            const a = AngleUtils.degToRad(0);
            const b = AngleUtils.degToRad(180);
            const c = AngleUtils.degToRad(-90);
            const d = AngleUtils.degToRad(450);
            const e = AngleUtils.degToRad(135);

            expect(a).toEqual(0);
            expect(b).toEqual(Math.PI);
            expect(c).toEqual(-Math.PI / 2);
            expect(d).toEqual(2.5 * Math.PI);
            expect(e).toEqual(0.75 * Math.PI);
        });

    });

    describe("radToDeg", () => {

        it("should be exported", () => {
            expect(typeof AngleUtils.radToDeg).toEqual("function");
        });

        it("expects a number as input", () => {

            const x = AngleUtils.radToDeg();
            expect(x).not.toBe(NaN);
        });

        it("should convert the degrees to radii", () => {

            const a = AngleUtils.radToDeg(0);
            const b = AngleUtils.radToDeg(Math.PI);
            const c = AngleUtils.radToDeg(-Math.PI / 2);
            const d = AngleUtils.radToDeg(2.5 * Math.PI);
            const e = AngleUtils.radToDeg(0.75 * Math.PI);

            expect(a).toEqual(0);
            expect(b).toEqual(180);
            expect(c).toEqual(-90);
            expect(d).toEqual(450);
            expect(e).toEqual(135);
        });

    });

    describe("normalizeAngle", () => {

        it("should be exported", () => {
            expect(typeof AngleUtils.normalizeAngle).toEqual("function");
        });

        it("should normalize angles to values between 0 and 360", () => {

            const a = AngleUtils.normalizeAngle(0);
            const b = AngleUtils.normalizeAngle(360);
            const c = AngleUtils.normalizeAngle(-90);
            const d = AngleUtils.normalizeAngle(3780);
            const e = AngleUtils.normalizeAngle(-640);

            expect(a).toEqual(0);
            expect(b).toEqual(0);
            expect(c).toEqual(270);
            expect(d).toEqual(180);
            expect(e).toEqual(80);
        });

    });

    describe("angleToCardinal", () => {

        it("should be exported", () => {
            expect(typeof AngleUtils.angleToCardinal).toEqual("function");
        });

        it("should convert an angle to one of 8 cardinal directions", () => {

            const a = AngleUtils.angleToCardinal(0);
            const b = AngleUtils.angleToCardinal(180);
            const c = AngleUtils.angleToCardinal(45);
            const d = AngleUtils.angleToCardinal(140);
            const e = AngleUtils.angleToCardinal(295);

            expect(a).toEqual("N");
            expect(b).toEqual("S");
            expect(c).toEqual("NE");
            expect(d).toEqual("SE");
            expect(e).toEqual("NW");
        });

    });
});
