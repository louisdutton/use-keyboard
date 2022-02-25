import { renderHook } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import useKeyboard from "../src";

it("renders", () => {
  const { result } = renderHook(() => useKeyboard());
});

const { result } = renderHook(() => useKeyboard());
const { axis, pressed } = result.current;

describe("Axis function", () => {
  const leftDown = new KeyboardEvent("keydown", { code: "ArrowLeft" });
  const rightDown = new KeyboardEvent("keydown", { code: "ArrowRight" });

  it("should return 0 if neither key is held", () => {
    expect(axis("ArrowLeft", "ArrowRight")).toEqual(0);
  });

  it("should return 1 if positive key is held", () => {
    fireEvent(window, rightDown);
    expect(axis("ArrowLeft", "ArrowRight")).toEqual(0);
  });

  it("should return -1 if negative key is held", () => {
    fireEvent(window, leftDown);
    expect(axis("ArrowLeft", "ArrowRight")).toEqual(0);
  });

  it("should return 0 if both keys are held", () => {
    fireEvent(window, leftDown);
    fireEvent(window, rightDown);
    expect(axis("ArrowLeft", "ArrowRight")).toEqual(0);
  });
});
