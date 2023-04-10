import React from "react";

const SpotifyPlaylist = ({ src, title, height, width, ...props }) => (
  <div className="video" style={{ textAlign: "center", padding: "10px 0" }}>
    <iframe
      title={title}
      style={{ borderRadius: 12 }}
      src={src}
      width={width ? width : "100%"}
      height={height ? height : "524"}
      frameBorder="0"
      allowfullscreen=""
      allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </div>
);
export default SpotifyPlaylist;

