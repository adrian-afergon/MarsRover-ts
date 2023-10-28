import { Point } from "./Point.js";
import { Direction } from "./Direction.js";
import { Rover } from "./Rover.js";


export class MarsRoverSystem {

  private rovers: Rover[] = [];

  landRoverAtMars(input: string) {
    const [inputOfX, inputOfY, inputOfDirection] = input.split(":")

    try {
      const x = Point.create(Number(inputOfX));
      const y = Point.create(Number(inputOfY));
      const direction = Direction.create(inputOfDirection);
      this.rovers.push(new Rover(x, y, direction));
    } catch (error) {
      return "Invalid position"
    }

    return input;
  }

  hasPosition(position: string): boolean {
    const [inputOfX, inputOfY, inputOfDirection] = position.split(":")

    const x = Point.create(Number(inputOfX));
    const y = Point.create(Number(inputOfY));
    const direction = Direction.create(inputOfDirection);
    return this.rovers[0].hasCoordinates(x, y) && this.rovers[0].isFacing(direction)
  }
}

