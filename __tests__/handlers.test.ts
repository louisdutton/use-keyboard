import { renderHook } from "@testing-library/react-hooks";
import useKeyboard from "../src";

describe("custom handlers", () => {
  const downHandler = jest.fn();
  const upHandler = jest.fn();

  const spaceDown = new KeyboardEvent("keydown", { code: "Space" });
  const spaceUp = new KeyboardEvent("keyup", { code: "Space" });

  const { result } = renderHook(() =>
    useKeyboard({
      down: {
        Space: downHandler,
      },
      up: {
        Space: upHandler,
      },
    })
  );

  it("should receive custom keydown handler", () => {
    window.dispatchEvent(spaceDown);
    expect(downHandler).toBeCalled();
  });

  it("should receive custom keyup handler", () => {
    window.dispatchEvent(spaceUp);
    expect(upHandler).toBeCalled();
  });
});
