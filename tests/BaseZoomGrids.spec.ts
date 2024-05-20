import { test } from "@japa/runner";
import { BaseGrid } from "../lib/BaseGrid.js";
import { BaseZoomGrids } from "../lib/BaseZoomGrids.js";

test.group("BaseZoomGrids Tests", () => {
  /**
   * Test the iterator
   */
  test("test iterations", ({ expect }) => {
    const zoomGrids = new BaseZoomGrids<BaseGrid>(5);
    zoomGrids.addGrid(new BaseGrid());
    zoomGrids.addGrid(new BaseGrid());

    let count = 0;

    for (const _ of zoomGrids) {
      count++;
    }

    expect(count).toEqual(zoomGrids.numGrids());
  });
});
