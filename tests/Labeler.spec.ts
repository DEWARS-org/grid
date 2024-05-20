import { test } from "@japa/runner";
import { TestLabeler } from "./TestLabeler.js";

test.group("Labeler Tests", () => {
  test("test zoom", ({ expect }) => {
    const labeler = new TestLabeler(true, 0, undefined, undefined, 12, 0.3);
    expect(labeler.hasMaxZoom()).toBe(false);
    expect(labeler.isWithin(labeler.getMinZoom())).toBe(true);

    labeler.setMaxZoom(10);
    expect(labeler.hasMaxZoom()).toBe(true);
    expect(labeler.isWithin(labeler.getMinZoom())).toBe(true);
  });

  test("test buffer", ({ expect }) => {
    const labeler = new TestLabeler(true, 0, undefined, undefined, 12, 0.3);
    expect(() => {
      labeler.setBuffer(-1);
    }).toThrow(Error);
  });
});
