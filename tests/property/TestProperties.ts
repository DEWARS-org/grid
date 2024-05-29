import { GridProperties } from "../../lib/property/GridProperties.ts";
import config from "./test.json" with { type: "json" };

export class TestProperties extends GridProperties {
  constructor() {
    super(config);
  }
}
