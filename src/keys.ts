export type AlphaKey =
  | "KeyA"
  | "KeyB"
  | "KeyC"
  | "KeyD"
  | "KeyE"
  | "KeyF"
  | "KeyG"
  | "KeyH"
  | "KeyI"
  | "KeyJ"
  | "KeyK"
  | "KeyL"
  | "KeyM"
  | "KeyN"
  | "KeyO"
  | "KeyP"
  | "KeyQ"
  | "KeyR"
  | "KeyS"
  | "KeyT"
  | "KeyU"
  | "KeyV"
  | "KeyW"
  | "KeyX"
  | "KeyY"
  | "KeyZ";

export type DigitKey =
  | "Digit0"
  | "Digit1"
  | "Digit2"
  | "Digit2"
  | "Digit3"
  | "Digit4"
  | "Digit5"
  | "Digit6"
  | "Digit7"
  | "Digit8"
  | "Digit9";

export type NumpadKey =
  | "Numpad0"
  | "Numpad1"
  | "Numpad2"
  | "Numpad2"
  | "Numpad3"
  | "Numpad4"
  | "Numpad5"
  | "Numpad6"
  | "Numpad7"
  | "Numpad8"
  | "Numpad9"
  | "NumpadAdd"
  | "NumpadSubtract"
  | "NumpadMultiply"
  | "NumpadDivide"
  | "NumpadDecimal"
  | "NumpadEnter";

export type FunctionKey = "F1" | "F2" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10" | "F11" | "F12";

export type MiscKey =
  | "Space"
  | "IntlBackslash"
  | "Comma"
  | "Period"
  | "Slash"
  | "Semicolon"
  | "Quote"
  | "Backslash"
  | "Enter"
  | "BracketLeft"
  | "BracketRight"
  | "Minus"
  | "Equal"
  | "Backspace"
  | "Backquote"
  | "Tab"
  | "CapsLock"
  | "Escape";

export type ArrowKey = "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight";

export type Key = AlphaKey | DigitKey | FunctionKey | ArrowKey | MiscKey;
