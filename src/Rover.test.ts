import {describe, expect, it} from "vitest";
import {Rover} from "./Rover.js";
import { Point } from "./Point.js";
import { Direction } from "./Direction.js";

describe("Rover", () => {

  it("should has given position", () => {
    const givenX = Point.create(0);
    const givenY = Point.create(0);
    const rover = new Rover(
      givenX,
      givenY,
      Direction.create("N")
    );

    expect(rover.hasCoordinates(givenX, givenY)).toBeTruthy();
  });

});
