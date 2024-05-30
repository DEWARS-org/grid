import { GridProperties } from "../../lib/property/GridProperties.ts";
import * as config from "./test.json";

export class TestProperties extends GridProperties {
  constructor() {
    super(config);
  }
}
