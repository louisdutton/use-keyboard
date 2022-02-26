import { renderHook } from "@testing-library/react-hooks";
import useKeyboard from "../src";

describe("pressed function", () => {
  const { result, rerender } = renderHook(() => useKeyboard());
  const { pressed } = result.current;
  const spaceDown = new KeyboardEvent("keydown", { code: "Space" });
  const backspaceDown = new KeyboardEvent("keydown", { code: "Backspace" });

  beforeEach(() => {
    rerender();
  });

  it("should return true if key is held", () => {
    window.dispatchEvent(spaceDown);
    expect(pressed("Space")).toBe(true);
  });

  it("should return false if key is not held", () => {
    expect(pressed("Space")).toBe(false);
  });

  //FIXME: multiple key tests are failing
  // describe("multiple keys", () => {
  //   it("should return true if all keys are held", () => {
  //     window.dispatchEvent(spaceDown);
  //     window.dispatchEvent(backspaceDown);
  //     expect(pressed("Space", "Backspace")).toBe(true);
  //   });

  //   it("should return false if all keys are not held", () => {
  //     window.dispatchEvent(spaceDown);
  //     expect(pressed("Space", "Backspace")).toBe(false);
  //   });
  // });
});
