import type { SyntheticEvent } from "react";

export default function ReactOnClick() {
  const onClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles } = e;
    console.log("mouse click occures on <button>", isTrusted, target, bubbles);
  };

  return (
    <div>
      <p>ReactonClick</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}
