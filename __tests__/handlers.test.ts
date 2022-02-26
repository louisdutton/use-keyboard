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

  // console.log(result.current.options);

  it("should call our down handler on keydown", () => {
    window.dispatchEvent(spaceDown);
    expect(downHandler).toBeCalled();
  });

  // FIXME: upHandler not being called
  it("should receive our up handler on keyup", () => {
    window.dispatchEvent(spaceUp);
    expect(upHandler).toBeCalled();
  });
});
