import { test } from "@japa/runner";
import { Line } from "../../lib/features/Line.js";
import { Point } from "../../lib/features/Point.js";
import { Unit } from "../../lib/features/Unit.js";

test.group("Line Tests", () => {
  test("test setPoints", ({ expect }) => {
    const point1 = Point.degrees(0, 0);
    const point2 = Point.degrees(1, 1);

    const line = Line.line(point1, point2);
    expect(line).not.toBeUndefined;
  });

  test("test toMeters", ({ expect }) => {
    const point1 = Point.degrees(0, 0);
    const point2 = Point.degrees(1, 1);

    const line = Line.line(point1, point2);
    expect(line).not.toBeUndefined;

    const metersLine = line.toMeters();
    expect(metersLine.getPoint1().getUnit()).toEqual(Unit.METER);
    expect(metersLine.getPoint2().getUnit()).toEqual(Unit.METER);
  });
});
