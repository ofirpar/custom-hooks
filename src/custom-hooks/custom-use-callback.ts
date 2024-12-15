import { useEffect, useRef } from "react";

export const MyUseCallback = <T extends (...args: any[]) => any>(
  callback: T,
  dependencies: React.DependencyList
): T => {
  const ref = useRef<T>(callback);

  useEffect(() => {
    ref.current = callback;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, ...dependencies]);

  return useRef(((...args: Parameters<T>) => ref.current(...args)) as T)
    .current;
};
