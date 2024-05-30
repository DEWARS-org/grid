import { TestLabeler } from "./TestLabeler.ts";
import { expect } from "@std/expect";

Deno.test("test zoom", () => {
  const labeler = new TestLabeler(true, 0, undefined, undefined, 12, 0.3);
  expect(labeler.hasMaxZoom()).toBe(false);
  expect(labeler.isWithin(labeler.getMinZoom())).toBe(true);

  labeler.setMaxZoom(10);
  expect(labeler.hasMaxZoom()).toBe(true);
  expect(labeler.isWithin(labeler.getMinZoom())).toBe(true);
});

Deno.test("test buffer", () => {
  const labeler = new TestLabeler(true, 0, undefined, undefined, 12, 0.3);
  expect(() => {
    labeler.setBuffer(-1);
  }).toThrow(Error);
});
