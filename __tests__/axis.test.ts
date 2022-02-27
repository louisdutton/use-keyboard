import { renderHook, act } from "@testing-library/react-hooks";
import useKeyboard from "../src";

describe("axis function", () => {
  const leftDown = new KeyboardEvent("keydown", { code: "ArrowLeft" });
  const rightDown = new KeyboardEvent("keydown", { code: "ArrowRight" });

  it("should return 0 if neither key is held", () => {
    const { result } = renderHook(() => useKeyboard());
    const { axis } = result.current;
    expect(axis("ArrowLeft", "ArrowRight")).toBe(0);
  });

  it("should return 1 if positive key is held", () => {
    const { result } = renderHook(() => useKeyboard());
    const { axis } = result.current;
    window.dispatchEvent(rightDown);
    // keys.current["ArrowRight"] = true;

    expect(axis("ArrowLeft", "ArrowRight")).toBe(1);
  });

  it("should return -1 if negative key is held", () => {
    const { result } = renderHook(() => useKeyboard());
    const { axis } = result.current;
    window.dispatchEvent(leftDown);
    expect(axis("ArrowLeft", "ArrowRight")).toBe(-1);
  });

  it("should return 0 if both keys are held", () => {
    const { result } = renderHook(() => useKeyboard());
    const { axis } = result.current;
    window.dispatchEvent(leftDown);
    window.dispatchEvent(rightDown);
    expect(axis("ArrowLeft", "ArrowRight")).toBe(0);
  });
});
