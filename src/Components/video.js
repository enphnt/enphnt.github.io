import React from "react";

const Video = ({ src, title, height, width, ...props }) => (
  <div className="video" style={{ textAlign: "center", padding: "10px 0" }}>
    <iframe
      style={{ borderRadius: 8 }}
      src={src}
      title={title}
      id={src}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width={width ? width : "600"}
      height={height ? height : "400"}
      sandbox="allow-top-navigation allow-same-origin allow-scripts allow-presentation"
    />
  </div>
);
export default Video;