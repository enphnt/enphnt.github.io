import React, { useState } from "react";

import people from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import NextSectionLink from "../../next-section-link";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  // Define a function to check the number
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  // Define a function to handle both prev and next buttons
  const changePerson = (direction) => {
    setIndex(checkNumber(index + direction));
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
      <p className="info">'{text}'</p>
      <div className="button-container">
        <button aria-label="prev" className="prev-btn" onClick={() => changePerson(-1)}>
          <FontAwesomeIcon style={{ padding: 6 }} size="lg" icon={faChevronLeft} />
        </button>
        <button aria-label="next" className="next-btn" onClick={() => changePerson(1)}>
          <FontAwesomeIcon style={{ padding: 6 }} size="lg" icon={faChevronRight} />
        </button>
      </div>
    </article>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="testimonials-container">
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