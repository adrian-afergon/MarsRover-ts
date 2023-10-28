import { Point } from "./Point.js";
import { Direction } from "./Direction.js";
import { Rover } from "./Rover.js";


export class MarsRoverSystem {

  landRoverAtMars(input: string) {
    const [inputOfX, inputOfY, inputOfDirection] = input.split(":")

    try {
      const x = Point.create(Number(inputOfX));
      const y = Point.create(Number(inputOfY));
      const direction = Direction.create(inputOfDirection);
    } catch (error) {
      return "Invalid position"
    }

    return input;
  }
}

