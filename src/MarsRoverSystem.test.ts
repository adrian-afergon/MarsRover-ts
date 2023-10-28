import { describe, expect, it } from "vitest";
import { MarsRoverSystem } from "./MarsRoverSystem.js";

describe("Mars Rover System", () => {

  describe("land", () => {
    it("should land rover at Mars", () => {
      const position = new MarsRoverSystem().landRoverAtMars("0:0:N");
      expect(position).toEqual("0:0:N");
    });

    it("should not land when X coordinate position is wrong", () => {
      expect(new MarsRoverSystem().landRoverAtMars("-1:0:N")).toEqual("Invalid position");
      expect(new MarsRoverSystem().landRoverAtMars("10:0:N")).toEqual("Invalid position");
      expect(new MarsRoverSystem().landRoverAtMars("x:0:N")).toEqual("Invalid position");
    });


    it("should not land when Y coordinate position is wrong", () => {
      expect(new MarsRoverSystem().landRoverAtMars("0:-1:N")).toEqual("Invalid position");
      expect(new MarsRoverSystem().landRoverAtMars("0:10:N")).toEqual("Invalid position");
      expect(new MarsRoverSystem().landRoverAtMars("0:y:N")).toEqual("Invalid position");
    });

    it("should not land when direction is wrong", () => {
      expect(new MarsRoverSystem().landRoverAtMars("0:0:Z")).toEqual("Invalid position");
    });
  });

});
