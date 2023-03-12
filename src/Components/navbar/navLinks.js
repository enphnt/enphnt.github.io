import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #4DA167;
    height: 2px;
    transition: all 0.4s ease-in;
  }
  :hover {
    color: #35435d; 
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    margin: 0 0 16px;
    ::after {
      height: 8px;
    }
  }
`;
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/#about">About</NavItem>
      <NavItem to="/#portfolio">Portfolio</NavItem>
      <NavItem to="/#testimonials">Testimonials</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <NavItem to="/#contact">Contact</NavItem>
    </>
  );
};

export default NavbarLinks;