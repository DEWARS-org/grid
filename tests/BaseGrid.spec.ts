import { BaseGrid } from "../lib/BaseGrid.ts";
import { expect } from "@std/expect";

Deno.test("test zoom", () => {
  const baseGrid = new BaseGrid();
  expect(baseGrid.getMaxZoom()).toBeUndefined;
  expect(baseGrid.hasMaxZoom()).toBe(false);

  expect(baseGrid.getLinesMaxZoom()).toBeUndefined;
  expect(baseGrid.hasLinesMaxZoom()).toBe(false);

  expect(baseGrid.getLinesMinZoom()).toEqual(baseGrid.getMinZoom());
  expect(baseGrid.hasLinesMinZoom()).toBe(false);

  expect(baseGrid.isWithin(baseGrid.getMinZoom())).toBe(true);
  expect(baseGrid.isWithin(baseGrid.getMinZoom() - 1)).toBe(false);
  baseGrid.setMaxZoom(2);
  const maxZoom = baseGrid.getMaxZoom();
  expect(maxZoom).not.toBeUndefined;
  if (maxZoom) {
    expect(baseGrid.isWithin(maxZoom)).toBe(true);
    expect(baseGrid.isWithin(maxZoom + 1)).toBe(false);
  }

  expect(baseGrid.isLinesWithin(0)).toBe(true);

  baseGrid.setLinesMinZoom(0);
  expect(baseGrid.isLinesWithin(baseGrid.getLinesMinZoom())).toBe(true);
  expect(baseGrid.isLinesWithin(baseGrid.getLinesMinZoom() - 1)).toBe(false);
  baseGrid.setLinesMaxZoom(10);
  const linesMaxZoom = baseGrid.getLinesMaxZoom();
  expect(linesMaxZoom).not.toBeUndefined;
  if (linesMaxZoom) {
    expect(baseGrid.isLinesWithin(linesMaxZoom)).toBe(true);
    expect(baseGrid.isLinesWithin(linesMaxZoom + 1)).toBe(false);
  }
});

Deno.test("test style", () => {
  const baseGrid = new BaseGrid();
  expect(baseGrid.getStyle()).not.toBeUndefined;
  baseGrid.setStyle(undefined);
  expect(baseGrid.getStyle()).not.toBeUndefined;
});
