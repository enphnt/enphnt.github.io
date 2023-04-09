import React from 'react';

const YouTubePlaylist = ({ src, title, width, height }) => (
  <div className="video" style={{ textAlign: "center", padding: "10px 0" }}>
    <iframe
      style={{
        borderRadius: ".75rem"
      }}
      width={width ? width : "100%"}
      height={height ? height : "524"}
      src={src}
      title={title}
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

export default YouTubePlaylist;