import * as React from "react";
import NextSectionLink from "../next-section-link";
import {
  paper,
  entry,
  date
} from "./resume.module.css";

const work = [
  {
    company: "Temenos",
    site: "https://www.linkedin.com/company/temenos",
    title: "Tech Lead, Product Owner",
    years: "January 2020 - Present",
    description: "Developing user-behavior analytics products to improve conversion rates internationally for tier 1 banks."
  },
  {
    company: "Avoka",
    site: "https://www.linkedin.com/company/avoka",

    title: "Software Developer, Test Engineer",
    years: "January 2018 - January 2020",
    description: "Unified test development across products by building a framework for writing unit, integration, and end to end tests to better align testers and devs."
  },
  {
    company: "Domain Group",
    site: "https://www.linkedin.com/company/domain-com-au",
    title: "Test Engineer",
    years: "October 2016 - December 2017",
    description: "Developed CI test automation to decrease deployment times and improve quality confidence for one of the most popular sites in Australia, with millions of weekly users."
  },
  {
    company: "Quantium",
    site: "https://www.linkedin.com/company/quantium/",
    title: "Test Engineer",
    years: "January 2014 - October 2016",
    description: "I reduced everyday overhead and release anxiety from analytics products for Australia's largest grocery supplier."
  }
];

const schools = [
  {
    name: "University of Technology, Sydney",
    site: "https://www.unt.edu/",
    degree: "Master of Information Technology",
    graduated: "April 2014",
    link: "https://www.sciencedirect.com/science/article/pii/S0306437915302192",
    description: "I concentrated on IT software development, design, implementation and maintenance strategies. My research for IoT use in emergencies was published in a scholarly journal: "
  },
  {
    name: "University of North Texas",
    site: "https://www.uts.edu.au/",
    degree: "Bachelor of Arts, International Studies",
    graduated: "December 2009",
    link: "https://www.ntdaily.com/students-to-teach-in-korea/",
    description: "Due to my focus in cultural and linguistic anthropology, I studied abroad to Mexico, for language courses, and India, for Carnatic music. I spearheaded a new program to send teachers to Korea: "
  }
];

const Resume = () => {
  return (
    <section id="resume">
      <div className={paper} >
        <div>
          <h1>Work</h1>
          {
            work.map(job =>
              <div className={entry} key={job.company}>
                <h2><a href={job.site}>{job.company}</a></h2>
                <h3>{job.title}</h3>
                <p className={date}>{job.years}</p>
                <p />
                <p>{job.description}</p>
              </div>
            )
          }
        </div>
        <div>
          <h1>Education</h1>
          {
            schools.map(school => {
              var link = school.link ?
                <a target="_blank" rel="noreferrer" href={school.link}>Article</a> :
                null;

              return (
                <div className={entry} key={school.name}>
                  <h2><a href={school.site}>{school.name}</a></h2>
                  <h3>{school.degree}</h3>
                  <p className={date}>{school.graduated}</p>
                  <p />
                  <p>{school.description}{link}</p>
                </div>);
            })
          }
        </div>
      </div>
      <NextSectionLink nextSection="/#portfolio" />
    </section>
  );
};

export default Resume;