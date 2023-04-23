import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Marquee = styled.div`
  animation-duration: 6s;
  animation-name: ${scroll};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  overflow: hidden;
  display: block;
  height: 4em;

  > * {
    display: inline-block;
    white-space: nowrap;
    padding-right: 100%;
    text-align: left;
  }
`;

export default Marquee;