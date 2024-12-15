import React, { useState } from "react";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { MyUseCallback } from "../../custom-hooks/custom-use-callback";
import { useKeyboard } from "../../custom-hooks/use-keyboard";
import "./Playground.css";

const Playground = () => {
  const [isToggled, setIsToggled] = useState(false);
  useKeyboard(["a"], (char) => console.log(`Key ${char} pressed!`));

  // Memoize the toggle function with useCallback to prevent unnecessary re-renders of the child
  const handleToggle = MyUseCallback(() => {
    setIsToggled((prev) => !prev);
  }, []);

  return (
    <div className="examples-container">
      <div id="use-callback-example-1">
        <h4>The toggle is {isToggled ? "ON" : "OFF"}</h4>
        {/* Pass the memoized toggle function to the child */}
        <ToggleButton onToggle={handleToggle} />
      </div>
      <div id="use-keyboard-example-1">
        <h4>Press "a" to see the message in the console!</h4>
      </div>
    </div>
  );
};

export default Playground;
