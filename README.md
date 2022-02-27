# useKeyboard

An react hook for handling keyboard input.

> This package is under development and is not production-ready.

## Install

```bash
npm i use-keyboard
```

or

```
yarn add use-keyboard
```

## Basic usage

```tsx
const { pressed } = useKeyboard();
const spacePressed = pressed("Space");
```

## Axis abstraction

```tsx
  const { axis } = useKeyboard();
  const horizontal = axis("LeftArrow", "RightArrow");
};
```

## Key handlers

```tsx
const _keyboard = useKeyboard({
  down: {
    Space: () => console.log("Spacebar pressed"),
  },
  up: {
    Space: () => console.log("Spacebar released"),
  },
});
```
