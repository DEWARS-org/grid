import { test } from "@japa/runner";
import { Point } from "../../lib/features/Point.js";
import { Unit } from "../../lib/features/Unit.js";

test.group("Point Tests", () => {
  test("test unit", ({ expect }) => {
    const point = Point.degrees(-112.500003, 21.943049);
    expect(point.getUnit()).toEqual(Unit.Degree);
    expect(point.getLongitude()).toBeCloseTo(-112.500003, 0.0);
    expect(point.getLatitude()).toBeCloseTo(21.943049, 0.0);

    const point2 = point.toMeters();
    expect(point2.getUnit()).toEqual(Unit.Meter);
    expect(point2.getLongitude()).toBeCloseTo(-12523443.048201751, 0.0);
    expect(point2.getLatitude()).toBeCloseTo(2504688.958883909, 0.0);

    const point3 = point2.toDegrees();
    expect(point3.getUnit()).toEqual(Unit.Degree);
    expect(point3.getLongitude()).toBeCloseTo(-112.500003, 0.0000000000001);
    expect(point3.getLatitude()).toBeCloseTo(21.943049, 0.0000000000001);
  });
});
