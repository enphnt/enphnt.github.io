import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

const NextSectionLink = ({ nextSection, size }) => {

  if (!nextSection) {
    return (
      <div style={{ textAlign: "center", marginTop: 12 }}>
        <a href="#top" style={{ color: "#7280b5" }}>
          <FontAwesomeIcon size="4x" icon={faChevronCircleUp} />
        </a>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: 12, position: "relative", bottom: "10%" }}>
      <a href={nextSection} style={{ color: "#7280b5" }}>
        <FontAwesomeIcon size={size ? size : "4x"} icon={faChevronCircleDown} />
      </a>
    </div>
  );
};

export default NextSectionLink;