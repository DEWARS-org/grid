import { test } from "@japa/runner";
import { TestProperties } from "./TestProperties.js";

test.group("GridProperties Tests", () => {
  test("test getProperty", ({ expect }) => {
    const props = new TestProperties();
    const prop = props.getProperty(
      true,
      props.buildProperty(["grid", "width"]),
    );
    expect(prop).not.toBeNull;
    expect(Number.parseInt(prop)).toBeCloseTo(2.0, 0.1);
  });

  test("test getBooleanProperty", ({ expect }) => {
    const props = new TestProperties();
    const prop = props.getBooleanProperty(
      true,
      props.buildProperty(["test1", "propagate"]),
    );
    expect(prop).not.toBeNull;
    expect(prop).toBe(true);
  });

  test("test getFloatProperty", ({ expect }) => {
    const props = new TestProperties();
    const prop = props.getFloatProperty(
      true,
      props.buildProperty(["test2", "buffer"]),
    );
    expect(prop).not.toBeNull;
    expect(prop).toBeCloseTo(0.05, 0.01);
  });
});
