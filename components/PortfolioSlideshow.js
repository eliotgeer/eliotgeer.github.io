"use client";

import { useEffect, useState } from "react";

const FADE_MS = 900;

export default function PortfolioSlideshow({ slides, interval = 7000 }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setVisible(true);
      }, FADE_MS);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const slide = slides[index];

  return (
    <div className="PortfolioSlideshow">
      <figure
        className="SlideshowFigure"
        style={{
          opacity: visible ? 1 : 0,
          transition: `opacity ${FADE_MS}ms ease`,
        }}
      >
        <img src={slide.image} alt={slide.title} />
        <figcaption>{slide.title}</figcaption>
      </figure>
    </div>
  );
}
