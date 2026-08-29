"use client";

import { useEffect } from "react";

export default function ScrollDirection() {
  useEffect(() => {
    let lastY = window.scrollY;

    function onScroll() {
      const currentY = window.scrollY;
      if (currentY < lastY) {
        document.body.classList.add("ScrollingUp");
      } else if (currentY > lastY) {
        document.body.classList.remove("ScrollingUp");
      }
      lastY = currentY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
