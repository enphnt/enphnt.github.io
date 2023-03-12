import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import styled from "styled-components";
import { Link } from "gatsby";
const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;
  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;

const Logo = () => {

  return (
    <LogoWrap as={Link} to="/">
      <StaticImage src={`../../images/logo.png`} alt="logo" />
    </LogoWrap>
  );
};

export default Logo;
