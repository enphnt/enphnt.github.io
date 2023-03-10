import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { verticalFlexContainer } from "../layout.module.css";
import NextSectionLink from '../next-section-link';

const Contact = () => {
  const [state, handleSubmit] = useForm("xgebyzzr");

  if (state.succeeded) {
    return <p>Thanks for the message! I'll be in touch.</p>;
  }

  return (
    <section id="contact" className={verticalFlexContainer}>
      <div>
        <h1 style={{ textAlign: "center" }}>Get in touch</h1>
        <h5 style={{ textAlign: "center" }}>Use this handy lil form and I'll receive your message.</h5>
      </div>
      <form onSubmit={handleSubmit} className={verticalFlexContainer}>
        <label htmlFor="email">
          Email Address:
        </label>
        <input
          id="email"
          type="email"
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message to send:
        </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>

      <NextSectionLink size={120} />
    </section>
  );
};
export default Contact;