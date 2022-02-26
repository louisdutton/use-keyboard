import { renderHook, act } from "@testing-library/react-hooks";
import useKeyboard from "../src";

describe("axis function", () => {
  const { result } = renderHook(() => useKeyboard());
  const { axis, reset, keys } = result.current;

  const leftDown = new KeyboardEvent("keydown", { code: "ArrowLeft" });
  const rightDown = new KeyboardEvent("keydown", { code: "ArrowRight" });

  beforeEach(() => {
    reset();
  });

  it("should return 0 if neither key is held", () => {
    expect(axis("ArrowLeft", "ArrowRight")).toBe(0);
  });

  it("should return 1 if positive key is held", () => {
    window.dispatchEvent(rightDown);

    expect(axis("ArrowLeft", "ArrowRight")).toBe(1);
  });

  it("should return -1 if negative key is held", () => {
    window.dispatchEvent(leftDown);
    expect(axis("ArrowLeft", "ArrowRight")).toBe(-1);
  });

  it("should return 0 if both keys are held", () => {
    window.dispatchEvent(leftDown);
    window.dispatchEvent(rightDown);
    expect(axis("ArrowLeft", "ArrowRight")).toBe(0);
  });
});
