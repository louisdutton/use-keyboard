import { renderHook, act } from "@testing-library/react-hooks";
import useKeyboard from "../src";

describe("axis function", () => {
  const { result } = renderHook(() => useKeyboard());
  const { axis, keys } = result.current;

  it("should return 0 if neither key is held", () => {
    keys.current = {};
    expect(axis("ArrowLeft", "ArrowRight")).toEqual(0);
  });

  it("should return 1 if positive key is held", () => {
    keys.current = {};
    keys.current["ArrowRight"] = true;
    expect(axis("ArrowLeft", "ArrowRight")).toEqual(1);
  });

  it("should return -1 if negative key is held", () => {
    keys.current = {};
    keys.current["ArrowLeft"] = true;
    keys.current["ArrowRight"] = false;
    expect(axis("ArrowLeft", "ArrowRight")).toEqual(-1);
  });

  it("should return 0 if both keys are held", () => {
    keys.current = {};
    keys.current["ArrowLeft"] = true;
    keys.current["ArrowRight"] = true;
    expect(axis("ArrowLeft", "ArrowRight")).toEqual(0);
  });
});
