import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import styled from "styled-components";
import { Link } from "gatsby";

const offset = "7";
const LogoWrap = styled.div`
  margin: auto ${offset}vw auto calc(-36px - ${offset}vw);
  flex: 0 1 36px;
  transition: transform .7s ease-in-out;
  @media (max-width: 768px){
    margin: auto 0;
  }
  :hover {
    transform: rotate(367.4deg);
  }
`;

const Logo = () => {

  return (
    <LogoWrap as={Link} to="/">
      <StaticImage src={`../../images/favicon.png`} alt="logo" />
    </LogoWrap>
  );
};

export default Logo;
