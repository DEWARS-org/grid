import { Line } from "../../lib/features/Line.ts";
import { Point } from "../../lib/features/Point.ts";
import { Unit } from "../../lib/features/Unit.ts";
import { expect } from "@std/expect";

Deno.test("test setPoints", () => {
  const point1 = Point.degrees(0, 0);
  const point2 = Point.degrees(1, 1);

  const line = Line.line(point1, point2);
  expect(line).not.toBeUndefined;
});

Deno.test("test toMeters", () => {
  const point1 = Point.degrees(0, 0);
  const point2 = Point.degrees(1, 1);

  const line = Line.line(point1, point2);
  expect(line).not.toBeUndefined;

  const metersLine = line.toMeters();
  expect(metersLine.getPoint1().getUnit()).toEqual(Unit.Meter);
  expect(metersLine.getPoint2().getUnit()).toEqual(Unit.Meter);
});
