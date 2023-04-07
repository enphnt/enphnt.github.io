import React from "react";

const Audio = ({ src, text, ...props }) => (
  <div style={{ textAlign: "center" }}>
    <figure style={{ textAlign: "center", width: "100%" }} type="audio/mpeg">
      <figcaption>{text}</figcaption>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        style={{ width: "inherit" }}
        controls="nodownload"
        type="audio/mp3"
        src={src}>
      </audio>
    </figure>
  </div>
);
export default Audio;