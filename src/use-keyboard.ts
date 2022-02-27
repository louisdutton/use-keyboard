import { useEffect, useRef } from "react";
import { Key } from "./keys";

type Handler = () => void;
type HandlerRecord = Partial<Record<Key, Handler>>;

type Options = {
  down?: HandlerRecord;
  up?: HandlerRecord;
};

const defaultOptions = {
  down: {} as HandlerRecord,
  up: {} as HandlerRecord,
};

/** Provides a method of querying the list of currently pressed keys. */
export const useKeyboard = (options?: Options) => {
  const { up, down } = { ...defaultOptions, ...options };
  const keys = useRef<Record<string, boolean>>({});

  const handleDown = ({ code }: KeyboardEvent) => {
    if (!keys.current[code]) keys.current[code] = true;
    const handler = down[code as Key];
    if (handler) handler();
  };

  const handleUp = ({ code }: KeyboardEvent) => {
    if (keys.current[code]) keys.current[code] = false;
    const handler = up[code as Key];
    if (handler) handler();
  };

  /** Returns true if all supplied keys are currently pressed. */
  const pressed = (...codes: Key[]) => {
    return codes.every((c) => keys.current[c]) ?? false;
  };

  /** Returns the sum of the supplied axis definition. */
  const axis = (negative: Key, positive: Key): -1 | 0 | 1 => {
    return (+pressed(positive) - +pressed(negative)) as -1 | 0 | 1;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleDown);
    window.addEventListener("keyup", handleUp);

    return () => {
      window.removeEventListener("keydown", handleDown);
      window.removeEventListener("keyup", handleUp);
    };
  }, []);

  return { pressed, axis };
};
