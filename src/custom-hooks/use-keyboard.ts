/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { MyUseCallback } from "./custom-use-callback";

export function useKeyboard(chars: string[], callback: (char: string) => void) {
  const keyCallback = MyUseCallback(
    (event: KeyboardEvent) => {
      if (chars.includes(event.key)) {
        callback(event.key);
      }
    },
    [callback, chars]
  );

  useEffect(() => {
    console.log("Added handler for:", chars);
    document.addEventListener("keydown", keyCallback);

    return () => {
      console.log("Removed handler for:", chars);
      document.removeEventListener("keydown", keyCallback);
    };
  }, [keyCallback]);
}
