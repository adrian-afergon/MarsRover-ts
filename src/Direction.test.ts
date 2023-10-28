import { describe, expect, it } from "vitest";
import { Direction } from "./Direction.js";

describe("Direction", () => {
  it("should create valid Direction", () => {
    expect(Direction.create("N").value).toEqual("N");
    expect(Direction.create("S").value).toEqual("S");
    expect(Direction.create("E").value).toEqual("E");
    expect(Direction.create("W").value).toEqual("W");
  });

  it("should not allows invalid Direction", () => {
    expect(() => Direction.create("Z")).toThrowError("Invalid position");
  });

});
