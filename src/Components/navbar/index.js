import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Logo from "./logo";

const Navigation = styled.nav`
  height: 6vh;
  min-height: 20px;
  display: flex;
  background-color: #fff;
  justify-content: center;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 4vw;
  z-index: 2;
  align-self: center;
  @media (max-width: 768px) {
    justify-content: space-between;
    position: sticky;
    height: 6vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 1vw;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    border-top: solid;
    top: 6vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`;

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
    props.open ? "rotate(-450deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(450deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  opacity: 1;
  animation: fadeInOpacity 1s linear;
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
    transition: all 0.3s ease-in;
  }
  :hover {
    color: #35435d; 
    ::after {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    padding: 15px 0;
    font-size: 2rem;
    animation: none;
    z-index: 6;
    margin: 0 0 16px;
    ::after {
      height: 8px;
    }
  }
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navigation>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavItem onClick={() => setNavbarOpen(false)} to="/#top">Home</NavItem>
          <NavItem onClick={() => setNavbarOpen(false)} to="/#about">About</NavItem>
          <NavItem onClick={() => setNavbarOpen(false)} to="/#portfolio">Portfolio</NavItem>
          <NavItem onClick={() => setNavbarOpen(false)} to="/#testimonials">Testimonials</NavItem>
          <NavItem onClick={() => setNavbarOpen(false)} to="/blog">Blog</NavItem>
          <NavItem onClick={() => setNavbarOpen(false)} to="/#contact">Contact</NavItem>
        </Navbox>
      ) : (
        <Navbox open>
          <NavItem to="/#top">Home</NavItem>
          <NavItem to="/#about">About</NavItem>
          <NavItem to="/#portfolio">Portfolio</NavItem>
          <NavItem to="/#testimonials">Testimonials</NavItem>
          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/#contact">Contact</NavItem>
        </Navbox>
      )}
    </Navigation>
  );
};

export default Navbar;