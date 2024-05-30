import { Hemisphere } from "../lib/Hemisphere.ts";
import { HemisphereUtils } from "../lib/HemisphereUtils.ts";
import { Point } from "../lib/features/Point.ts";
import { expect } from "@std/expect";

Deno.test("test fromLatitude", () => {
  let hemisphere = HemisphereUtils.fromLatitude(80);
  expect(hemisphere).toEqual(Hemisphere.North);

  hemisphere = HemisphereUtils.fromLatitude(-80);
  expect(hemisphere).toEqual(Hemisphere.South);
});

Deno.test("test from", () => {
  let point = Point.degrees(0, 80);
  let hemisphere = HemisphereUtils.from(point);
  expect(hemisphere).toEqual(Hemisphere.North);

  point = Point.degrees(0, -80);
  hemisphere = HemisphereUtils.from(point);
  expect(hemisphere).toEqual(Hemisphere.South);
});
