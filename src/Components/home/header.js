import React, { useState, useCallback, useRef, useMemo } from "react";
import { useTransition, animated } from "@react-spring/web";
import Networks from "../networks";
import NextSectionLink from "../next-section-link";
import styled from "styled-components";

const name = "Nathan Phennel";
const music = "Music Maker";
const dev = "Software Dev";

const blue = "rgb(72,93,146)";
const green = "rgb(46,107,77)";
const white = "black";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: max(85vh, 700px);
  padding: 0 3vw;
`;

const TransitionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;  
  height: 18em;
`;

const TransitionsItem = styled(animated.div)`
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 6em;
  text-shadow: 1px 1px 3px lightgray;
  font-weight: 800;
  will-change: transform, opacity, height;
  cursor: pointer;
  line-height: 95px;
  box-sizing: border-box;
`;

const TransitionsTxt = styled(animated.div)`
    overflow: hidden;
    min-width: 410px;
`;

export default function Header() {
  const init = useMemo(() => [
    <span style={{ color: "black" }}>Nathan Phennel</span>,
    <span style={{ color: green }}>Software Dev</span>,
    <span style={{ color: blue }}>Music Maker</span>
  ], []);
  const ref = useRef([]);
  const [items, set] = useState(init);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      color: blue
    },
    enter: [
      { opacity: 1, height: 95, innerHeight: 95 },
      { transform: "perspective(600px) rotateX(180deg)", color: white },
      { transform: "perspective(600px) rotateX(0deg)", color: blue }
    ],
    leave: [{ color: blue }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: green }
  });

  const reset = useCallback(() => {
    set([]);
    ref.current.forEach(clearTimeout);
    ref.current = [];
    const timeouts = [
      [500, []],
      [1500, [name, music]],
      [2500, [name, dev, music]],
      [4000, [name, dev]],
      [5000, [name, dev, music]],
      [6500, [name]],
      [7500, []],
      [8000, init]
    ];
    timeouts.forEach(([delay, value]) => {
      ref.current.push(setTimeout(() => set(value), delay));
    });
  }, [init]);

  return (
    <section>
      <Wrapper>
        <TransitionsContainer>
          {transitions(({ innerHeight, ...rest }, item) =>
            <TransitionsItem style={rest} onClick={reset}>
              <TransitionsTxt style={{ height: innerHeight }}>
                {item}
              </TransitionsTxt>
            </TransitionsItem>
          )}
        </TransitionsContainer>
        <Networks />
      </Wrapper>
      <NextSectionLink nextSection="/#about" size={120} />
    </section>
  );
}