import React, { useState } from "react";

import people from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import NextSectionLink from "../../next-section-link";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />

        <span className="quote-icon">
          <FontAwesomeIcon style={{ padding: 6 }} size="lg" icon={faQuoteRight} />

        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FontAwesomeIcon style={{ padding: 6 }} size="lg" icon={faChevronLeft} />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FontAwesomeIcon style={{ padding: 6 }} size="lg" icon={faChevronRight} />
        </button>
      </div>
    </article>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 70 }}>
        <h1 style={{ textAlign: "center" }}>What people say</h1>
        <div className="container">
          <Review />
        </div>
      </div>
      <NextSectionLink nextSection="/#contact" />
    </section>
  );
};

export default Testimonials;