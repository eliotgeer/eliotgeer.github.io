"use client";

import { useEffect, useState } from "react";

// function posterSrc(image) {
//   return image.replace(/\.gif$/i, "-poster.jpg");
// }

export default function ProjectCard({
  image,
  thumbnail,
  title,
  subtitle,
  children,
}) {
  // const [hovered, setHovered] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  // const isGif = image && /\.gif$/i.test(image);
  // const displayImage = isGif
  //   ? hovered
  //     ? image
  //     : thumbnail || posterSrc(image)
  //   : image;
  const displayImage = image;

  useEffect(() => {
    if (!hasOpened) return;
    if (window.twttr?.widgets) {
      window.twttr.widgets.load();
    }
    if (window.instgrm?.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, [hasOpened]);

  return (
    <details
      className="ProjectCard"
      onToggle={(e) => {
        if (e.target.open) setHasOpened(true);
      }}
    >
      <summary
        className="ProjectSummary"
        // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
      >
        <div
          className="ProjectImage"
          style={
            displayImage ? { backgroundImage: `url(${displayImage})` } : undefined
          }
        />
        <div className="ProjectTitleGroup">
          <span className="ProjectTitle">{title}</span>
          {subtitle && <span className="ProjectSubtitle">{subtitle}</span>}
        </div>
        <span className="ProjectArrow" aria-hidden="true" />
      </summary>
      <div className="ProjectDetails">{hasOpened ? children : null}</div>
    </details>
  );
}
