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
} from "../layout.module.css";
import NextSectionLink from '../next-section-link';

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
              After studying linguistic anthropology, I'm now a <span className={textHighlight}> software developer </span> and <span className={textHighlight}>product owner</span>. </p>
            <p>
              I use Javascript and Java to collect user behavior <span className={textHighlight}> data</span>, structure  <span className={textHighlight}>information</span>, and visualize <span className={textHighlight}>analytics</span>. The tools I build help businesses identify and reduce customer friction and track progress over time.
            </p>
            <p>
              I prefer to make things that are <span className={textHighlight}>useful</span> and  <span className={textHighlight}>engaging</span> because I eat <span className={textHighlight}>feedback</span> for breakfast. </p>
            <p>
              When not looking at <span className={textHighlight}>code</span>, I can be found perfecting my ollie or making music.
            </p>
            <a href={data.file.publicURL} download>
              <button>
                Download My Resume
                <span role="img" aria-label="hugging"> &#129303;</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <NextSectionLink nextSection="/#portfolio" size="3x" />
    </section>
  );
};


export default About;