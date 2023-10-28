export class Direction {
  private constructor(public readonly value: string) {
  }

  static create(value: string): Direction {
    if (value !== "N" && value !== "S" && value !== "E" && value !== "W") throw new Error("Invalid position");
    return new Direction(value);
  }
}
