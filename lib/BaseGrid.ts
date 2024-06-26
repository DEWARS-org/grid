import type { Color } from "@dewars/color";
import { GridStyle } from "./GridStyle.ts";
import type { Labeler } from "./Labeler.ts";

/**
 * Base Grid
 */
export class BaseGrid {
  /**
   * Enabled grid
   */
  private enabled = false;

  /**
   * Minimum zoom level
   */
  private minZoom = 0;

  /**
   * Maximum zoom level
   */
  private maxZoom?: number;

  /**
   * Minimum zoom level override for drawing grid lines
   */
  private linesMinZoom?: number;

  /**
   * Maximum zoom level override for drawing grid lines
   */
  private linesMaxZoom?: number;

  /**
   * Grid line style
   */
  private style: GridStyle = new GridStyle(undefined, 0);

  /**
   * Grid labeler
   */
  private labeler?: Labeler;

  /**
   * Is the grid enabled
   *
   * @return enabled flag
   */
  public isEnabled(): boolean {
    return this.enabled;
  }

  /**
   * Set the enabled flag
   *
   * @param enabled enabled flag
   */
  public setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  /**
   * Get the minimum zoom level
   *
   * @return minimum zoom level
   */
  public getMinZoom(): number {
    return this.minZoom;
  }

  /**
   * Set the minimum zoom level
   *
   * @param minZoom minimum zoom level
   */
  public setMinZoom(minZoom: number): void {
    this.minZoom = minZoom;
  }

  /**
   * Get the maximum zoom level
   *
   * @return maximum zoom level
   */
  public getMaxZoom(): number | undefined {
    return this.maxZoom;
  }

  /**
   * Has a maximum zoom level
   *
   * @return true if has a maximum, false if unbounded
   */
  public hasMaxZoom(): boolean {
    return this.maxZoom !== undefined;
  }

  /**
   * Set the maximum zoom level
   *
   * @param maxZoom maximum zoom level
   */
  public setMaxZoom(maxZoom?: number): void {
    this.maxZoom = maxZoom;
  }

  /**
   * Is the zoom level within the grid zoom range
   *
   * @param zoom zoom level
   * @return true if within range
   */
  public isWithin(zoom: number): boolean {
    return (
      zoom >= this.minZoom &&
      (this.maxZoom === undefined || zoom <= this.maxZoom)
    );
  }

  /**
   * Get the minimum zoom level for drawing grid lines
   *
   * @return minimum zoom level
   */
  public getLinesMinZoom(): number {
    return this.linesMinZoom !== undefined
      ? this.linesMinZoom
      : this.getMinZoom();
  }

  /**
   * Has a minimum zoom level override for drawing grid lines
   *
   * @return true if has a minimum, false if not overridden
   */
  public hasLinesMinZoom(): boolean {
    return this.linesMinZoom !== undefined;
  }

  /**
   * Set the minimum level override for drawing grid lines
   *
   * @param linesMinZoom minimum zoom level or undefined to remove
   */
  public setLinesMinZoom(linesMinZoom?: number): void {
    this.linesMinZoom = linesMinZoom;
  }

  /**
   * Get the maximum zoom level for drawing grid lines
   *
   * @return maximum zoom level
   */
  public getLinesMaxZoom(): number | undefined {
    return this.linesMaxZoom !== undefined
      ? this.linesMaxZoom
      : this.getMaxZoom();
  }

  /**
   * Has a maximum zoom level override for drawing grid lines
   *
   * @return true if has a maximum, false if not overridden
   */
  public hasLinesMaxZoom(): boolean {
    return this.linesMaxZoom !== undefined;
  }

  /**
   * Set the maximum level override for drawing grid lines
   *
   * @param linesMaxZoom maximum zoom level or undefined to remove
   */
  public setLinesMaxZoom(linesMaxZoom?: number): void {
    this.linesMaxZoom = linesMaxZoom;
  }

  /**
   * Is the zoom level within the grid lines zoom range
   *
   * @param zoom zoom level
   * @return true if within range
   */
  public isLinesWithin(zoom: number): boolean {
    let isWithin = true;
    if (this.linesMinZoom !== null && this.linesMinZoom !== undefined) {
      isWithin = zoom >= this.linesMinZoom;
    }
    if (
      isWithin &&
      this.linesMaxZoom !== null &&
      this.linesMaxZoom !== undefined
    ) {
      isWithin = zoom <= this.linesMaxZoom;
    }
    return isWithin;
  }

  /**
   * Get the grid line style
   *
   * @return grid line style
   */
  public getStyle(): GridStyle {
    return this.style;
  }

  /**
   * Set the grid line style
   *
   * @param style grid line style
   */
  public setStyle(style?: GridStyle): void {
    this.style = style !== undefined ? style : new GridStyle(undefined, 0);
  }

  /**
   * Get the grid line color
   *
   * @return grid line color
   */
  public getColor(): Color | undefined {
    return this.getStyle().getColor();
  }

  /**
   * Set the grid line color
   *
   * @param color grid line color
   */
  public setColor(color?: Color): void {
    this.getStyle().setColor(color);
  }

  /**
   * Get the grid line width
   *
   * @return grid line width
   */
  public getWidth(): number {
    return this.getStyle().getWidth();
  }

  /**
   * Set the grid line width
   *
   * @param width grid line width
   */
  public setWidth(width: number): void {
    this.getStyle().setWidth(width);
  }

  /**
   * Get the grid labeler
   *
   * @return grid labeler
   */
  public getLabeler(): Labeler | undefined {
    return this.labeler;
  }

  /**
   * Has a grid labeler
   *
   * @return true if has a grid labeler
   */
  public hasLabeler(): boolean {
    return this.labeler !== undefined;
  }

  /**
   * Set the grid labeler
   *
   * @param labeler grid labeler
   */
  public setLabeler(labeler?: Labeler): void {
    this.labeler = labeler;
  }

  /**
   * Is labeler zoom level within the grid zoom range
   *
   * @param zoom zoom level
   * @return true if within range
   */
  public isLabelerWithin(zoom: number): boolean {
    if (!this.labeler) {
      throw new Error("Labeler is not set");
    }

    return (
      this.hasLabeler() &&
      this.labeler.isEnabled() &&
      this.labeler.isWithin(zoom)
    );
  }

  /**
   * Get the label grid edge buffer
   *
   * @return label buffer (greater than or equal to 0.0 and less than 0.5)
   */
  public getLabelBuffer(): number {
    if (!this.labeler) {
      throw new Error("Labeler is not set");
    }

    return this.hasLabeler() ? this.labeler.getBuffer() : 0.0;
  }
}
