import { describe, expect, it } from "vitest";
import { Point } from "./Point.js";

describe("Point", () => {
  it("should create valid point", () => {
    const point = Point.create(0);
    expect(point.value).toEqual(0);
  });

  it("should not allows negative point", () => {
    expect(() => Point.create(-1)).toThrowError("Invalid point value");
  });

  it("should not allows over range point", () => {
    expect(() => Point.create(10)).toThrowError("Invalid point value");
  });

  it("should not allows not a number range point", () => {
    expect(() => Point.create(Number('a'))).toThrowError("Invalid point value");
  });

});
