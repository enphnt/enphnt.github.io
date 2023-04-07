import React from 'react';

const YouTubePlaylist = ({ src, title }) => (
  <div className="video" style={{ textAlign: "center", padding: "10px 0" }}>
    <iframe
      width="560"
      height="500"
      src={src}
      title={title}
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

export default YouTubePlaylist;