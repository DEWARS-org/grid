import { test } from "@japa/runner";
import { Hemisphere } from "../lib/Hemisphere.js";
import { HemisphereUtils } from "../lib/HemisphereUtils.js";
import { Point } from "../lib/features/Point.js";

test.group("HemisphereUtils Tests", () => {
  test("test fromLatitude", ({ expect }) => {
    let hemisphere = HemisphereUtils.fromLatitude(80);
    expect(hemisphere).toEqual(Hemisphere.North);

    hemisphere = HemisphereUtils.fromLatitude(-80);
    expect(hemisphere).toEqual(Hemisphere.South);
  });

  test("test from", ({ expect }) => {
    let point = Point.degrees(0, 80);
    let hemisphere = HemisphereUtils.from(point);
    expect(hemisphere).toEqual(Hemisphere.North);

    point = Point.degrees(0, -80);
    hemisphere = HemisphereUtils.from(point);
    expect(hemisphere).toEqual(Hemisphere.South);
  });
});
