"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = ["about", "skills", "experience", "portfolio", "contact"];
const DOCK_STOPS = [0, 20, 40, 60, 80, 100];

export default function GuySidebar() {
  const [dock, setDock] = useState(0);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );

    let ticking = false;

    function updateDock() {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      let activeIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= viewportCenter) {
          activeIndex = i + 1;
        }
      }
      setDock(DOCK_STOPS[activeIndex]);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateDock);
      }
    }

    updateDock();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div className="Guy" style={{ top: `${dock}%` }} />;
}
