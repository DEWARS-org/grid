import { test } from "@japa/runner";
import { Bounds } from "../../lib/features/Bounds.js";
import { Unit } from "../../lib/features/Unit.js";

test.group("Bounds Tests", () => {
  test("test construction", ({ expect }) => {
    let bounds = Bounds.bounds(-180, -90, 180, 90, Unit.DEGREE);
    expect(bounds.getUnit()).toEqual(Unit.DEGREE);
    let other = Bounds.degrees(
      bounds.getMinLongitude(),
      bounds.getMinLatitude(),
      bounds.getMaxLongitude(),
      bounds.getMaxLatitude(),
    );
    expect(bounds.equals(other)).toBe(true);

    bounds = bounds.toMeters();
    expect(bounds.getUnit()).toEqual(Unit.METER);
    other = Bounds.meters(
      bounds.getMinLongitude(),
      bounds.getMinLatitude(),
      bounds.getMaxLongitude(),
      bounds.getMaxLatitude(),
    );
    expect(bounds.equals(other)).toBe(true);

    other = Bounds.boundsFromBounds(bounds);
    expect(bounds.equals(other)).toBe(true);

    other = Bounds.boundsFromCorners(
      bounds.getSouthwest(),
      bounds.getNortheast(),
    );
    expect(bounds.equals(other)).toBe(true);
  });

  test("test toUnit", ({ expect }) => {
    const boundsDegree = Bounds.bounds(-180, -90, 180, 90, Unit.DEGREE);

    let toUnit = boundsDegree.toUnit(Unit.METER);
    toUnit = boundsDegree.toUnit(Unit.DEGREE);
    expect(boundsDegree.equals(toUnit)).toBe(true);
  });
});
