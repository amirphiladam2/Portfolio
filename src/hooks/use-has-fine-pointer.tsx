import * as React from "react";

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";

export function useHasFinePointer() {
  const [hasFinePointer, setHasFinePointer] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(FINE_POINTER_QUERY);
    const updateMatch = () => {
      setHasFinePointer(mediaQuery.matches);
    };

    updateMatch();

    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

  return hasFinePointer;
}
