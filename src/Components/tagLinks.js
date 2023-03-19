import React, { useState } from 'react';
import { Link } from 'gatsby';

const TagLinks = ({ tags }) => {
  const [hover, setHover] = useState(false);
  const style = {
    normal: {
      color: "#333",
    },
    hover: {
      backgroundColor: "#444",
      color: "#ffffff"

    }
  };

  return tags.map((tag, index) =>
    <>
      <Link
        key={tag}
        to={`/tags/${tag.replace(/ /g, "-")}`}
        style={{
          ...style.normal,
          ...(hover === tag ? style.hover : null)
        }}
        onMouseEnter={() => {
          setHover(tag);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {tag}
      </Link>
      {
        index === tags.length - 1 ? <></> : <>,{" "}</>
      }
    </>
  );
};

export default TagLinks;
