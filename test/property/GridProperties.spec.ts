import { TestProperties } from "./TestProperties.ts";
import { expect } from "@std/expect";

Deno.test("test getProperty", () => {
  const props = new TestProperties();
  const prop = props.getProperty(
    props.buildProperty(["grid", "width"]),
    true,
  );
  expect(prop).not.toBeNull;
  if (prop) {
    expect(Number.parseInt(prop)).toBeCloseTo(2.0, 0.1);
  }
});

Deno.test("test getBooleanProperty", () => {
  const props = new TestProperties();
  const prop = props.getBooleanProperty(
    true,
    props.buildProperty(["test1", "propagate"]),
  );
  expect(prop).not.toBeNull;
  expect(prop).toBe(true);
});

Deno.test("test getFloatProperty", () => {
  const props = new TestProperties();
  const prop = props.getFloatProperty(
    true,
    props.buildProperty(["test2", "buffer"]),
  );
  expect(prop).not.toBeNull;
  expect(prop).toBeCloseTo(0.05, 0.01);
});
