import { renderHook, act } from "@testing-library/react-hooks";
import useKeyboard from "../src";

it("renders", () => {
  const { result } = renderHook(() => useKeyboard());
});

//FIXME: fireEvent is not being picked up by hook event listener
describe("pressed()", () => {
  const { result, rerender } = renderHook(() => useKeyboard());
  const { pressed, keys } = result.current;

  it("should return true if key is held", () => {
    keys.current["ArrowLeft"] = true;
    expect(pressed("ArrowLeft")).toEqual(true);
  });
});

describe("axis()", () => {
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
