import { renderHook } from "@testing-library/react-hooks";
import useKeyboard from "../src";

describe("pressed function", () => {
  const { result } = renderHook(() => useKeyboard());
  const { pressed, keys } = result.current;
  const spaceDown = new KeyboardEvent("keydown", { code: "Space" });
  const backspaceDown = new KeyboardEvent("keydown", { code: "Backspace" });

  beforeEach(() => {
    keys.current = {};
  });

  it("should return true if key is held", () => {
    window.dispatchEvent(spaceDown);
    expect(pressed("Space")).toBe(true);
  });

  it("should return false if key is not held", () => {
    expect(pressed("Space")).toBe(false);
  });

  describe("multiple keys", () => {
    it("should return true if all keys are held", () => {
      window.dispatchEvent(spaceDown);
      window.dispatchEvent(backspaceDown);
      console.log(keys.current);

      expect(pressed("Space", "Backspace")).toBe(true);
    });

    it("should return false if all keys are not held", () => {
      window.dispatchEvent(spaceDown);
      expect(pressed("Space", "Backspace")).toBe(false);
    });
  });
});
