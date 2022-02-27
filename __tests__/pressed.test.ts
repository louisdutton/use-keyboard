import { renderHook } from "@testing-library/react-hooks";
import useKeyboard from "../src";

describe("pressed function", () => {
  const spaceDown = new KeyboardEvent("keydown", { code: "Space" });
  const backspaceDown = new KeyboardEvent("keydown", { code: "Backspace" });

  it("should return true if key is held", () => {
    const { result } = renderHook(() => useKeyboard());
    const { pressed } = result.current;
    window.dispatchEvent(spaceDown);
    expect(pressed("Space")).toBe(true);
  });

  it("should return false if key is not held", () => {
    const { result } = renderHook(() => useKeyboard());
    const { pressed } = result.current;
    expect(pressed("Space")).toBe(false);
  });

  describe("multiple keys", () => {
    it("should return true if all keys are held", () => {
      const { result } = renderHook(() => useKeyboard());
      const { pressed } = result.current;
      window.dispatchEvent(spaceDown);
      window.dispatchEvent(backspaceDown);
      expect(pressed("Space", "Backspace")).toBe(true);
    });

    it("should return false if all keys are not held", () => {
      const { result } = renderHook(() => useKeyboard());
      const { pressed } = result.current;
      window.dispatchEvent(spaceDown);
      expect(pressed("Space", "Backspace")).toBe(false);
    });
  });
});
