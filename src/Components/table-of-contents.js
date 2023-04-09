import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const TableOfContents = ({ tocs }) => {
  const { items } = tocs;
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const orderedList = {
    padding: "4px 3rem 16px",
    borderLeft: "solid 5px lightgrey",
  };

  const unorderedList = {
    padding: "0 1.6rem",
  };

  const toc = {
    margin: 0,
    lineHeight: "1.4em",
  };

  const toggleButton = {
    fontSize: "1.1em",
    fontWeight: 300,
    border: "none",
    borderLeft: "solid 5px lightgrey",
    borderRadius: "0 23px 23px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1.5rem 0 1rem",
    margin: 0,
    boxShadow: `5px 5px 95px rgba(183, 183, 183, 0.335) inset`
  };

  const itemLink = {
    normal: {
      color: "#35435d",
      padding: 3,
    },
    hover: {
      backgroundColor: "rgb(46, 107, 77)",
      color: "#ffffff",
      fontWeight: 400,
    },
    subHover: {
      backgroundColor: "#35435d",
      color: "#ffffff",
      fontWeight: 400,
    }
  };

  const icon = { width: 32, height: 32, };

  return (
    <>
      <button style={toggleButton} onClick={toggle}>
        Table of Contents:
        <FontAwesomeIcon style={icon} icon={open ? faChevronUp : faChevronDown} />
      </button>
      {open &&
        <div style={toc}>
          <ol style={orderedList}>
            {
              items.map(item =>
                <li key={item.title}>
                  <Link
                    key={item.title}
                    style={{
                      ...itemLink.normal,
                      ...(hover === item.title ? itemLink.hover : null)
                    }}

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
                            <li key={h2.url}>
                              <Link
                                key={h2.url}
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
                              {
                                h2.items ?
                                  <ul style={unorderedList}>
                                    {
                                      h2.items.map(h3 =>
                                        <li key={h3.url}>
                                          <Link
                                            key={h3.url}
                                            to={h3.url}
                                            onMouseEnter={() => {
                                              setHover(h3.title);
                                            }}
                                            onMouseLeave={() => {
                                              setHover(false);
                                            }}
                                            style={{
                                              ...itemLink.normal,
                                              ...(hover === h3.title ? itemLink.hover : null)
                                            }}
                                          >
                                            {h3.title}
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
