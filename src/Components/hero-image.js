import * as React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const HeroImage = ({
  image,
  alt,
  maxHeight,
  credit,
  link,
}) =>
  <div style={{ textAlign: "right" }}>
    <div style={{ position: "relative", maxHeight: maxHeight }}>
      <GatsbyImage
        image={getImage(image)}
        alt={alt}
        style={{ maxHeight: maxHeight, borderRadius: 5, boxSizing: "border-box" }}
      />
      <span style={{
        position: "absolute",
        top: "4%",
        right: "4%",
        color: "white",
        fontSize: "max(3vh, 2.2vw)",
        textAlign: "right",
        fontWeight: 600,
        textShadow: "2px 2px 6px black",
        transformOrigin: "bottom",
        maxWidth: "80%",
        whiteSpace: "pre-wrap",
        letterSpacing: ".2rem",
      }}>
        {/* Use the alt as the overlay text */}
        {alt}
      </span>
    </div>
    <p style={{ margin: 0, fontSize: 12 }}>
      Photo:{" "}
      <a
        aria-label={link}
        href={link}
      >
        {credit}
      </a>
    </p>
  </div>;

export default HeroImage;