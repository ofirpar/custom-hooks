import React from "react";

type ToggleButtonProps = {
  onToggle: () => void;
};

export const ToggleButton = React.memo(({ onToggle }: ToggleButtonProps) => {
  console.log("Rendering ToggleButton");

  return <button onClick={onToggle}>Toggle</button>;
});
