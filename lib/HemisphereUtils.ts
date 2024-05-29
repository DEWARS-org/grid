import { Hemisphere } from "./Hemisphere.ts";
import type { Point } from "./features/Point.ts";

/**
 * Helper functions for Hemisphere
 *
 * @since 1.0.0
 */
export class HemisphereUtils {
  /**
   * Get the hemisphere for the latitude
   *
   * @param latitude latitude
   * @return hemisphere
   */
  public static fromLatitude(latitude: number): Hemisphere {
    return latitude >= 0 ? Hemisphere.North : Hemisphere.South;
  }

  /**
   * Get the hemisphere for the point
   *
   * @param point point
   * @return hemisphere
   */
  public static from(point: Point): Hemisphere {
    return HemisphereUtils.fromLatitude(point.getLatitude());
  }
}
