"use client";

import { useEffect, useState } from "react";

export default function PortfolioSlideshow({ slides, interval = 2000 }) {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(null);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const nextIndex = (current + 1) % slides.length;
      setNext(nextIndex);

      const slideTimer = requestAnimationFrame(() => {
        requestAnimationFrame(() => setSliding(true));
      });

      const endTimer = setTimeout(() => {
        setCurrent(nextIndex);
        setNext(null);
        setSliding(false);
      }, 250);

      return () => {
        cancelAnimationFrame(slideTimer);
        clearTimeout(endTimer);
      };
    }, interval);

    return () => clearTimeout(startTimer);
  }, [current, slides.length, interval]);

  const currentSlide = slides[current];
  const nextSlide = next !== null ? slides[next] : null;

  return (
    <div className="PortfolioSlideshow">
      <div className="SlideshowViewport">
        <figure
          className="SlideshowFigure"
          style={{
            transform: sliding ? "translateX(-100%)" : "translateX(0%)",
          }}
        >
          <img src={currentSlide.image} alt={currentSlide.title} />
          <figcaption>{currentSlide.title}</figcaption>
        </figure>
        {nextSlide && (
          <figure
            className="SlideshowFigure"
            style={{
              transform: sliding ? "translateX(0%)" : "translateX(100%)",
            }}
          >
            <img src={nextSlide.image} alt={nextSlide.title} />
            <figcaption>{nextSlide.title}</figcaption>
          </figure>
        )}
      </div>
    </div>
  );
}
