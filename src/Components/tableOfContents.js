import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const TableOfContents = ({ tocs }) => {
  const { items } = tocs;
  const [open, setOpen] = useState(true);
  const [hover, setHover] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const orderedList = {
    padding: "16px 3rem",
    borderBottom: "solid 1px lightgrey",
    borderRight: "solid 1px lightgrey",
    borderLeft: "solid 5px lightgrey",
  };

  const unorderedList = {
    padding: "0 1.6rem",
  };

  const toc = {
    marginTop: 0,
    lineHeight: "1.4em",
  };

  const toggleButton = {
    fontSize: "1.1em",
    fontWeight: 300,
    border: "none",
    borderBottom: "solid 1px lightgrey",
    borderRight: "solid 1px lightgrey",
    borderTop: "solid 1px lightgrey",
    borderLeft: "solid 5px lightgrey",
    color: "#222",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1.5rem",
    margin: 0,
  };

  const itemLink = {
    normal: {
      color: "#35435d",
      padding: 3,
    },
    hover: {
      backgroundColor: "#35435d",
      color: "#ffffff",
      fontWeight: 400,
    },
    subHover: {
      backgroundColor: "rgb(46, 107, 77)",
      color: "#ffffff",
      fontWeight: 400,
    }
  };

  return (
    <>
      <button style={toggleButton} onClick={toggle}>
        Table of Contents:
        <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
      </button>
      {open &&
        <div style={toc}>
          <ol style={orderedList}>
            {
              items.map(item =>
                <li key={item.title}>
                  <Link
                    style={{
                      ...itemLink.normal,
                      ...(hover === item.title ? itemLink.hover : null)
                    }}
                    key={item.title}
                    to={item.url}
                    onMouseEnter={() => {
                      setHover(item.title);
                    }}
                    onMouseLeave={() => {
                      setHover(false);
                    }}
                  >
                    {item.title}
                  </Link>
                  {
                    item.items ?
                      <ul style={unorderedList}>
                        {
                          item.items.map(h2 =>
                            <li>
                              <Link
                                to={h2.url}
                                onMouseEnter={() => {
                                  setHover(h2.title);
                                }}
                                onMouseLeave={() => {
                                  setHover(false);
                                }}
                                style={{
                                  ...itemLink.normal,
                                  ...(hover === h2.title ? itemLink.subHover : null)
                                }}
                              >
                                {h2.title}
                              </Link>
                            </li>
                          )
                        }
                      </ul>
                      : null
                  }
                </li>
              )
            }
          </ol>
        </div>
      }
    </>
  );
};

export default TableOfContents;
