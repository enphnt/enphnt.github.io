import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import Networks from "../networks";
import {
  background,
  bgVideo,
  bgVideoWrapper,
  container,
  containerItem,
  dividerWrap,
  dividerWrapFaded,
  dividerWrapFadedMore,
  transitionsContainer,
  transitionsItem
} from "./header.module.css";

import backgroundVideo from "../../videos/sydney-trains.mp4";
import NextSectionLink from "../next-section-link";

const blue = "#7280b5";
const green = "#4DA167";
const white = "black";

export default function Header() {
  const ref = useRef([]);
  const [items, set] = useState([]);

  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
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
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(
        () => set(["Nathan Phennel", "Software Dev", "Music Maker"]), 300)
    );
    ref.current.push(
      setTimeout(() => set(["Nathan Phennel", "Music Maker"]), 3000)
    );
    ref.current.push(
      setTimeout(
        () => set(["Nathan Phennel", "Software Dev", "Music Maker"]), 5000)
    );
    ref.current.push(
      setTimeout(() => set(["Nathan Phennel", "Software Dev"]), 7500)
    );
    ref.current.push(
      setTimeout(
        () => set(["Nathan Phennel", "Software Dev", "Music Maker"]), 9500)
    );
    ref.current.push(
      setTimeout(
        () => set(["Nathan Phennel"]), 11500)
    );
    ref.current.push(
      setTimeout(
        () => set(["Nathan Phennel", "Software Dev", "Music Maker"]), 12500)
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

  return (
    <>
      <div className={bgVideoWrapper}>
        <figure>
          <video className={bgVideo} autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </figure>
        <div className={background}>

          <div className={container}>
            <div className={containerItem}>

              <div className={transitionsContainer}>
                {transitions(({ innerHeight, ...rest }, item) => (
                  <animated.div
                    className={transitionsItem}
                    style={rest}
                    onClick={reset}
                  >
                    <animated.div style={{ overflow: "hidden", height: innerHeight }}>
                      {item}
                    </animated.div>
                  </animated.div>
                ))}
              </div>
              <Networks alignRight />
            </div>
            <div className={dividerWrapFadedMore} />
            <div className={dividerWrapFaded} />
            <div className={dividerWrap} />
          </div>
        </div>
        <NextSectionLink nextSection="/#about" size={120} />
      </div>

    </>
  );
}
