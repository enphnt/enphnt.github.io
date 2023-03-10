import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from "@fortawesome/fontawesome-svg-core";
import { faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { svgIcon } from "./next-section-link.module.css";

// disables auto resizing of svgs
config.autoAddCss = false;

const NextSectionLink = ({ nextSection, size }) => {
  const svgStyles = {
    width: size ? size : 100,
  };

  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <a href={nextSection ? nextSection : "#top"}>
        <FontAwesomeIcon className={svgIcon} style={svgStyles} icon={nextSection ? faChevronCircleDown : faChevronCircleUp} />
      </a>
    </div>
  );
};

export default NextSectionLink;