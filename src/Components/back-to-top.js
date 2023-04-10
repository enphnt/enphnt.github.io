import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BackToTopButton = styled.button`
  position: fixed;
  bottom: calc(12% - 30px);
  right: 0;
  z-index: 1;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: white !important;
  color: black;
  cursor: pointer;
  padding: 0;
  width: 60px;
  height: 60px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
  white-space: nowrap;
`;

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return showButton ? (
    <BackToTopButton onClick={scrollToTop}>
      <span>↑</span>
    </BackToTopButton>
  ) : null;
};

export default BackToTop;