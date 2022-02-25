import { renderHook } from "@testing-library/react-hooks";
import useKeyboard from "../src";

const App = () => {
  const { axis, pressed } = useKeyboard();
  return null;
};

it("renders", () => {
  const { result } = renderHook(() => useKeyboard());
});

// describe("Axis function", () => {
//   const { axis } = useKeyboard();
//   const leftDown = new KeyboardEvent("keydown", { code: "ArrowLeft" });
//   const rightDown = new KeyboardEvent("keydown", { code: "ArrowLeft" });

//   it("should return 0 if no specified keys are held", () => {
//     // window.dispatchEvent(leftDown);
//     expect(axis("ArrowLeft", "ArrowRight")).toEqual(0);
//   });
// });
