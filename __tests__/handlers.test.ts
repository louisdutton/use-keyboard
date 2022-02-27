import { renderHook } from "@testing-library/react-hooks";
import useKeyboard from "../src";

describe("custom handlers", () => {
  const downHandler = jest.fn();
  const upHandler = jest.fn();

  const spaceDown = new KeyboardEvent("keydown", { code: "Space" });
  const spaceUp = new KeyboardEvent("keyup", { code: "Space" });

  it("should call our down handler on keydown", () => {
    const { result } = renderHook(() =>
      useKeyboard({
        down: {
          Space: downHandler,
        },
      })
    );
    window.dispatchEvent(spaceDown);
    expect(downHandler).toBeCalled();
  });

  it("should receive our up handler on keyup", () => {
    const { result } = renderHook(() =>
      useKeyboard({
        up: {
          Space: upHandler,
        },
      })
    );
    window.dispatchEvent(spaceUp);
    expect(upHandler).toBeCalled();
  });
});
