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
              After studying linguistic anthropology, I'm now a {highlight("software developer")} and {highlight("product owner")}.
            </p>
            <p>
              I lead a team that collects user behavior {highlight("data")} and visualizes {highlight("analytics")} using Javascript and Java.
              With our tools, businesses can identify friction points and respond accordingly.
            </p>
            <p>
              I prefer to make things that are {highlight("useful")} and {highlight("engaging")} because I
              eat {highlight("feedback")} for breakfast.
            </p >
            <a href={data.file.publicURL} download>
              <button>
                Download My Resume
                <span role="img" aria-label="hugging"> &#129303;</span>
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