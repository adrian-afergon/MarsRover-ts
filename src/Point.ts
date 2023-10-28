export class Point {
  private constructor(public readonly value: number) {
  }

  static create(value: number): Point {
    if (Number(value) < 0 || Number(value) >= 10 || isNaN(value)) throw new Error("Invalid point value");
    return new Point(value);
  }
}
