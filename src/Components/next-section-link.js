import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from "@fortawesome/fontawesome-svg-core";
import { faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

// disables auto resizing of svgs
config.autoAddCss = false;

const NextSectionLink = ({ nextSection, size }) => {
  const svgStyles = {
    width: size ? size : 100,
    color: "#7280b5",
    position: "static"
  };

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <a href={nextSection ? nextSection : "#top"}>
        <FontAwesomeIcon style={svgStyles} icon={nextSection ? faChevronCircleDown : faChevronCircleUp} />
      </a>
    </div>
  );
};

export default NextSectionLink;