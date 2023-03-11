import React from "react";

const Video = ({ videoSrcURL, videoTitle, height, width, ...props }) => (
  <div className="video" style={{ textAlign: "center" }}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      id={videoSrcURL}
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