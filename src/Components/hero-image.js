import * as React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const maxHeight = "45vh";

const HeroImage = ({
  image,
  alt,
  credit,
  link,
}) =>
  <div style={{ textAlign: "right" }}>
    <div style={{ position: "relative", maxHeight: maxHeight, borderRadius: 5 }}>
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
        fontSize: "max(5vh, 2.7vw)",
        textAlign: "right",
        fontWeight: 600,
        textShadow: "0px 1px 8px black",
        transformOrigin: "bottom",
        maxWidth: "80%",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
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