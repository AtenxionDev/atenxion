import { useEffect, useState } from "react";

const hasWindow = typeof window !== "undefined";
const getScrollPosition = () => {
  const scrollY = hasWindow ? window.scrollY : null;
  return {
    scrollY,
  };
};

export const useScrollPositions = () => {
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition());
  useEffect(() => {
    if (hasWindow) {
      const handleScroll = () => {
        setScrollPosition(getScrollPosition());
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [hasWindow]);
  return scrollPosition;
};
