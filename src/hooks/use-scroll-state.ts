"use client";

import { useEffect, useState } from "react";

export function useScrollState(threshold = 32) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateScrollState = () => {
      setIsScrolled(window.scrollY > threshold);
      animationFrame = null;
    };

    const handleScroll = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateScrollState);
      }
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [threshold]);

  return isScrolled;
}

