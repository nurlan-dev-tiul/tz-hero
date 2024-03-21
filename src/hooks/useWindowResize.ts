import { useState, useEffect } from "react";

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState<any>({
    width: undefined
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    handleResize();

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize;
}