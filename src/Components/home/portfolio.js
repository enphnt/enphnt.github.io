import * as React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import { anchorTile, portfolioProjects, portfolio } from "./portfolio.module.css";
import NextSectionLink from "../next-section-link";
import { Link } from "gatsby";

const projectData = [
  {
    title: "Bot_is_Love",
    category: "IM bot simulation, built with React, that I redesigned to give users a more mindful outlook.",
    image: (
      <StaticImage
        alt={"image of Referral Bot"}
        src={`../../../projects/bot-is-love/thumbnail.png`}
        height={111}
      />
    ),
    url: "/projects/bot-is-love"
  },
  {
    title: "Banterer",
    category: "npm package that displays comical and smart quotes in the terminal for dev inspiration.",
    image: (
      <StaticImage
        alt={"image of Banterer"}
        src={`../../images/portfolio-banterer.png`}
      />
    ),
    url: "https://www.npmjs.com/package/banterer"
  },
  {
    title: "nighthelper",
    category: "npm package for quickly generating tests, page objects, configuration files and custom commands.",
    image: (
      <StaticImage
        alt={"image of nighthelper.jpg"}
        src={`../../images/portfolio-nighthelper.jpg`}
      />
    ),
    url: "https://www.npmjs.com/package/nighthelper"
  },

  {
    title: "This Very Website!",
    category: "🙌  I dare you to audit this site to really appreciate the site performance.",
    image: (
      <StaticImage
        alt={"image of resume-website.jpg"}
        src={`../../images/portfolio-resume-website.jpg`}
      />
    ),
    url: "https://github.com/enphnt/enphnt.github.io/tree/develop"
  },
  {
    title: "uTest Community",
    category: "I've tested everything from shopping cart systems to 'smart' digital set top boxes for TV.",
    image: (
      <StaticImage
        alt={"image of utest.jpg"}
        src={`../../images/portfolio-utest.jpg`}
      />
    ),
    url: "https://www.utest.com/profile/enphnt/about"
  },
];

const deadProjectData = [
  {
    title: "TotM",
    category: "Family-Feud-style guessing game with Google search autocomplete.",
    image: (
      <StaticImage
        alt={"image of totm.jpg"}
        src={`../../images/portfolio-totm.jpg`}
      />
    ),
    url: "http://www.playtotm.com/"
  },
  {
    title: "Chat Application",
    category: "A basic chat app built with React, Redux, Redux-Saga, and web sockets.",
    image: (
      <StaticImage
        alt={"image of chat-app.jpg"}
        src={`../../images/portfolio-chat-app.jpg`}
      />
    ),
    url: "https://github.com/enphnt/chat/"
  },
  {
    title: "IoT in Emergency",
    category: "IoT device to warn users of impending natural disasters.",
    image: (
      <StaticImage
        alt={"image of iot-emergency-research.jpg"}
        src={`../../images/portfolio-iot-emergency-research.jpg`}
      />
    ),
    url: "https://www.sciencedirect.com/science/article/pii/S0306437915302192"
  },
];

const generateTiles = (data) => data.map(proj =>
  <a
    href={proj.url}
    key={proj.title}
    title={proj.title}
    className={anchorTile}
  >
    <div>
      <h3 >{proj.title}</h3>
      {proj.image}
      <p>{proj.category}</p>
    </div>
  </a>
);

const Portfolio = () => (
  <section
    id="portfolio"
    className={portfolio}
  >
    <h1>Check out ongoing projects</h1>
    <div className={portfolioProjects}>
      {generateTiles(projectData)}
    </div>
    <Link to="/projects">more projects...</Link>
    <div style={{ textAlign: "center" }}>
      <h1>Dead Projects</h1>
      <sub>
        Sadly, this work is no longer maintained for one reason
        or another but it's important to remember the good times.
      </sub>
    </div>
    <div className={portfolioProjects} >
      {generateTiles(deadProjectData)}
    </div>
    <div style={{ marginTop: 12 }}>
      <NextSectionLink nextSection="/#testimonials" />
    </div>
  </section>
);

export default Portfolio;