import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Networks from '../networks';
import {
  aboutBackground,
  aboutText,
  aboutSection,
  aboutPic,
  flex,
  textHighlight
} from "./about.module.css";
import NextSectionLink from '../next-section-link';

const highlight = (txt) => <span className={textHighlight}>{txt}</span>;

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: {eq: "NathanPhennelProfile"}) {
        publicURL
      }
    }
  `);

  return (
    <section id="about" className={aboutBackground}>
      <div className={flex}>
        <div className={aboutSection}>
          <div className={aboutPic}>
            <StaticImage
              alt="Nathan Phennel Profile Pic"
              src="../../images/profile.png"
              width={200}
            />
            <Networks />
          </div>
          <div className={aboutText}>
            <h2>About Me</h2>
            <p>
              At work, I lead a team of experienced Javascript and Java  developers. We develop ways to collect user behavior {highlight("data")} and
              visualize {highlight("analytics")} insights. With the tools I make, businesses are able to identify friction points and respond accordingly.
            </p>
            <p>
              After hours, I'm usually working on some web project or making music.
            </p>
            <a aria-label="Download Resume" href={data.file.publicURL} download>
              <button aria-label="Download Resume">
                Download My Resume
                <span role="img" aria-label="BOOKMARK TABS"> &#128209;</span>
              </button>
            </a>
          </div >
        </div >
      </div >
      <NextSectionLink nextSection="/#portfolio" />
    </section >
  );
};


export default About;