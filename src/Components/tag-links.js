import React, { useState } from 'react';
import { Link } from 'gatsby';

const TagLinks = ({ tags }) => {
  const [hover, setHover] = useState(false);
  const style = {
    normal: {
      color: "#35435d",
      fontWeight: 600,
    },
    hover: {
      backgroundColor: "#35435d",
      color: "#ffffff"
    }
  };

  return <p>
    Tags:{" "}
    {
      tags.map((tag, index) =>
        <span key={tag}>
          <Link
            key={tag}
            to={`/tags/${tag.replace(/ /g, "-")}/`}
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
        </span>
      )
    }
  </p>;
};

export default TagLinks;
