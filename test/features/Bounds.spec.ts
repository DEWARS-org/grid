import { Bounds } from "../../lib/features/Bounds.ts";
import { Unit } from "../../lib/features/Unit.ts";
import { expect } from "@std/expect";

Deno.test("test construction", () => {
  let bounds = Bounds.bounds(-180, -90, 180, 90, Unit.Degree);
  expect(bounds.getUnit()).toEqual(Unit.Degree);
  let other = Bounds.degrees(
    bounds.getMinLongitude(),
    bounds.getMinLatitude(),
    bounds.getMaxLongitude(),
    bounds.getMaxLatitude(),
  );
  expect(bounds.equals(other)).toBe(true);

  bounds = bounds.toMeters();
  expect(bounds.getUnit()).toEqual(Unit.Meter);
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

Deno.test("test toUnit", () => {
  const boundsDegree = Bounds.bounds(-180, -90, 180, 90, Unit.Degree);

  let toUnit = boundsDegree.toUnit(Unit.Meter);
  toUnit = boundsDegree.toUnit(Unit.Degree);
  expect(boundsDegree.equals(toUnit)).toBe(true);
});
