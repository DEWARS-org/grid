import { BaseGrid } from "../lib/BaseGrid.ts";
import { BaseZoomGrids } from "../lib/BaseZoomGrids.ts";
import { expect } from "@std/expect";

/**
 * Test the iterator
 */
Deno.test("test iterations", () => {
  const zoomGrids = new BaseZoomGrids<BaseGrid>(5);
  zoomGrids.addGrid(new BaseGrid());
  zoomGrids.addGrid(new BaseGrid());

  let count = 0;

  for (const _ of zoomGrids) {
    count++;
  }

  expect(count).toEqual(zoomGrids.numGrids());
});
