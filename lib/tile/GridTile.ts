import { GridUtils } from "../GridUtils.ts";
import type { Bounds } from "../features/Bounds.ts";
import type { Point } from "../features/Point.ts";
import { Unit } from "../features/Unit.ts";
import type { Pixel } from "./Pixel.ts";

/**
 * Grid Tile
 */
export class GridTile {
  /**
   * Tile width
   */
  private width = 0;

  /**
   * Tile height
   */
  private height = 0;

  /**
   * Zoom level
   */
  private zoom = 0;

  /**
   * Bounds
   */
  private bounds?: Bounds;

  /**
   * Create a tile
   *
   * @param width tile width
   * @param height tile height
   * @param x x coordinate
   * @param y y coordinate
   * @param zoom zoom level
   * @return tile
   */
  public static tile(
    width: number,
    height: number,
    x: number,
    y: number,
    zoom: number,
  ): GridTile {
    const tile = new GridTile();
    tile.width = width;
    tile.height = height;
    tile.zoom = zoom;
    tile.bounds = GridUtils.getBounds(x, y, zoom);
    return tile;
  }

  /**
   * Create a tile
   *
   * @param width tile width
   * @param height tile height
   * @param bounds tile bounds
   * @return tile
   */
  public static tileWithBounds(
    width: number,
    height: number,
    bounds: Bounds,
  ): GridTile {
    const tile = new GridTile();
    tile.width = width;
    tile.height = height;
    tile.bounds = bounds;
    tile.zoom = Math.round(GridUtils.getZoomLevel(bounds));
    return tile;
  }

  /**
   * Get the tile width
   *
   * @return tile width
   */
  public getWidth(): number {
    return this.width;
  }

  /**
   * Get the tile height
   *
   * @return tile height
   */
  public getHeight(): number {
    return this.height;
  }

  /**
   * Get the zoom level
   *
   * @return zoom level
   */
  public getZoom(): number {
    return this.zoom;
  }

  /**
   * Get the bounds in the optional units
   *
   * @param unit units
   * @return bounds in units
   */
  public getBounds(unit?: Unit): Bounds | undefined {
    let tmpBounds = this.bounds;
    if (unit !== null && unit !== undefined && this.bounds) {
      tmpBounds = this.bounds.toUnit(unit);
    }
    return tmpBounds;
  }

  /**
   * Get the bounds in degrees
   *
   * @return bounds in degrees
   */
  public getBoundsDegrees(): Bounds | undefined {
    return this.getBounds(Unit.Degree);
  }

  /**
   * Get the bounds in meters
   *
   * @return bounds in meters
   */
  public getBoundsMeters(): Bounds | undefined {
    return this.getBounds(Unit.Meter);
  }

  /**
   * Get the point pixel location in the tile
   *
   * @param point point
   * @return pixel
   */
  public getPixel(point: Point): Pixel {
    if (!this.bounds) {
      throw new Error("Bounds is not set");
    }
    return GridUtils.getPixel(this.width, this.height, this.bounds, point);
  }

  /**
   * Get the longitude in meters x pixel location in the tile
   *
   * @param longitude longitude in meters
   * @return x pixel
   */
  public getXpixel(longitude: number): number {
    if (!this.bounds) {
      throw new Error("Bounds is not set");
    }
    return GridUtils.getXPixel(this.width, this.bounds, longitude);
  }

  /**
   * Get the latitude (in meters) y pixel location in the tile
   *
   * @param latitude latitude in meters
   * @return y pixel
   */
  public getYpixel(latitude: number): number {
    if (!this.bounds) {
      throw new Error("Bounds is not set");
    }
    return GridUtils.getYPixel(this.height, this.bounds, latitude);
  }
}
