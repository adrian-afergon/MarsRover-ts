import { Point } from "./Point.js";
import { Direction } from "./Direction.js";

export class Rover {
  constructor(private x: Point, private y: Point, private direction: Direction) {

  }

  hasCoordinates(x: Point, y: Point): boolean {
    throw new Error("Method not implemented.");
  }

  isFacing(direction: Direction): boolean {
    throw new Error("Method not implemented.");
  }
}
