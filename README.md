# useKeyboard

An easy-to-use keyboard hook for react applications.

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
// MyComponent.tsx
import useKeyboard from "use-keyboard";

const MyComponent = () => {
  const { pressed } = useKeyboard();

  return <p>Spacebar pressed: {pressed("Space").toString()}</p>;
};
```
