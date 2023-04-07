import React from "react";

const AppleMusic = ({ src, title, height, width, ...props }) => (
  <div style={{ textAlign: "right", padding: "10px 0" }}>
    <sub>Sign in using your AppleId to listen.</sub>
    <div className="video" style={{ textAlign: "center", padding: "10px 0" }}>

      <iframe
        title={title}
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameborder="0"
        width={width ? width : "100%"}
        height={height ? height : "460"}
        allowFullScreen
        style={{ overflow: "hidden", background: "transparent" }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={src}
      />
    </div>
  </div>
);
export default AppleMusic;

