import gridConfig from "../../resources/grid.json";
import { PropertyConstants } from "./PropertyConstants.ts";

/**
 * Grid property loader
 */
export abstract class GridProperties {
  private readonly extraConfig: unknown;

  constructor(config: unknown) {
    this.extraConfig = config;
  }

  /**
   * Get a property by key
   *
   * @param key key
   * @param required true if required
   * @return value
   */
  public getProperty(key: string, required = false): string | undefined {
    const paths = key.split(".");
    const extractValue = (config: any) => {
      return paths.reduce((acc, path) => acc?.[path], config);
    };

    let value: string | undefined = extractValue(this.extraConfig);

    if (!value) {
      value = extractValue(gridConfig);
    }

    if (value) {
      value = value.toString();
      if (value.trim().length === 0) {
        value = undefined;
      }
    }
    if (!value && required) {
      throw new Error(`Property not found: ${key}`);
    }
    return value;
  }

  /**
   * Get an integer property by key
   *
   * @param required true if required
   * @param key key
   * @return integer value
   */
  public getIntegerProperty(
    required = false,
    ...key: string[]
  ): number | undefined {
    let value: number | undefined;
    const stringValue = this.getProperty(this.buildProperty(key), required);
    if (stringValue) {
      value = Number.parseInt(stringValue, 10);
    }
    return value;
  }

  /**
   * Get a float by key
   *
   * @param required true if required
   * @param key key
   * @return float value
   */
  public getFloatProperty(
    required = false,
    ...key: string[]
  ): number | undefined {
    let value: number | undefined;
    const stringValue = this.getProperty(this.buildProperty(key), required);
    if (stringValue) {
      value = Number.parseFloat(stringValue);
    }
    return value;
  }

  /**
   * Get a double by key
   *
   * @param required true if required
   * @param key key
   * @return double value
   */
  public getDoubleProperty(
    required = false,
    ...key: string[]
  ): number | undefined {
    let value: number | undefined;
    const stringValue = this.getProperty(this.buildProperty(key), required);
    if (stringValue) {
      value = +stringValue;
    }
    return value;
  }

  /**
   * Get a boolean by key
   *
   * @param required true if required
   * @param key key
   * @return boolean value
   */
  public getBooleanProperty(
    required = false,
    ...key: string[]
  ): boolean | undefined {
    let value: boolean | undefined;
    const stringValue = this.getProperty(this.buildProperty(key), required);
    if (stringValue) {
      value = stringValue.toLowerCase() === "true";
    }
    return value;
  }

  /**
   * Build a combined property separated by
   * {@link PropertyConstants#PROPERTY_DIVIDER}
   *
   * @param properties property parts
   *
   * @return combined property
   */
  public buildProperty(properties: string[]): string {
    let combined = "";
    for (const property of properties) {
      if (property) {
        if (combined.length > 0) {
          combined += PropertyConstants.PROPERTY_DIVIDER;
        }
        combined += property;
      }
    }
    return combined;
  }
}
