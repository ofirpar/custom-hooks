import { useState } from "react";
import { useDebounce } from "../../custom-hooks/use-debounce";

export function UseDebounceComponent() {
  const [inputValue, setInputValue] = useState("");
  const debouncedInput = useDebounce(inputValue, 2000);
  return (
    <div id="use-debouncer-example-1">
      <input
        type="text"
        style={{ width: "300px" }}
        placeholder="Text here will be debounced to the field below"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <h4>Debounced Value: {debouncedInput}</h4>
    </div>
  );
}
