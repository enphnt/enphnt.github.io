import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import NextSectionLink from '../next-section-link';
import {
  centerText,
  contact,
  contactCover,
  flexContainer,
  completed,
  rightSide,
} from "./contact.module.css";

const reasons = ["Let's go skate", "Let's make a song", "Do some programming", "Just hang out", "Discuss a job", "Do something else"];
const dates = ["ASAP", "Next few days", "In about a week", "Within the month", "In more than a month"];
const Contact = () => {
  const [state, handleSubmit] = useForm("xgebyzzr");
  const [date, setDate] = useState(null);
  const [reason, setReason] = useState(null);
  const [emailAddress, setEmailAddress] = useState(null);
  const [jobRequested, setJobRequested] = useState(false);
  const [name, setName] = useState(null);

  const changeReason = e => setReason(e.target.value);
  const changeDate = e => setDate(e.target.value);
  const changeEmail = e => setEmailAddress(e.target.value);
  const changeName = e => setName(e.target.value);
  const handleRequestJob = () => setJobRequested(true);
  const reasonPretty = reason ? reason.replace("Let's ", "").toLowerCase() : "";
  const namePretty = name ? name.replace(/\b(\w)/g, s => s.toUpperCase()) : "";
  const Cover = (
    <div className={contactCover}>
      <div>
        <h1>Web</h1>
        <h1>Dev</h1>
        <h1>/</h1>
        <h1>Music</h1>
        <h1>Maker</h1>
      </div>
      <div>
        <h3>Want to </h3>
        <br />
        <h3>get in touch?</h3>
        <button aria-label="Contact Me" type="button" onClick={handleRequestJob}>
          Contact me
        </button>
      </div>
    </div>
  );
  const Reason = (
    <>
      <label htmlFor="Reason">What do you want to do?</label>
      <select
        name="Reason"
        id="Reason"
        required
        onChange={changeReason}
        defaultValue=""
      >
        <option value="" disabled>Select something</option>
        {
          reasons.map(reason =>
            <option key={reason} value={reason}>{reason}</option>
          )
        }
      </select>
    </>
  );
  const Message = (
    <>
      <label htmlFor="Message">Any details?</label>
      <textarea
        id="Message"
        name="Message"
        placeholder="Type details here..."
      />
      <ValidationError
        prefix="Message"
        field="Message"
        errors={state.errors}
      />
    </>
  );
  const Date = (
    <>
      <label htmlFor="Date">
        When do you want to {reasonPretty}?
      </label>
      <select name="Date" id="Date" defaultValue="" required onChange={changeDate}>
        <option value="" disabled>Select a time</option>
        {
          dates.map(date =>
            <option key={date} value={date}>{date}</option>
          )
        }
      </select>
    </>
  );
  const Name = (
    <>
      <label htmlFor="Name">Your Name:</label>
      <input
        id="Name"
        type="Name"
        name="Name"
        required
        onChange={changeName}
      />
      <ValidationError
        prefix="Name"
        field="Name"
        errors={state.errors}
      />
    </>
  );
  const Email = (
    <>
      <label htmlFor="Email">Your Email:</label>
      <input
        id="Email"
        type="Email"
        name="Email"
        required
        onChange={changeEmail}
      />
      <ValidationError
        prefix="Email"
        field="Email"
        errors={state.errors}
      />
    </>
  );
  const CompletedMessage = (
    <div
      className={completed}
      style={{
        opacity: state.succeeded ? 1 : 0,
        height: state.succeeded ? "auto" : 0,
        display: state.succeeded ? "block" : "none",
        padding: "0 30px",
      }}
    >
      <h2>Thanks for the message,</h2>
      <h2>{namePretty}!</h2>
      <h1>&#129395;</h1>
      <br />
      <p> I'll be in touch with you at {emailAddress ? emailAddress : ""} about your request to {reasonPretty}.</p>
    </div>
  );

  return (
    <section id="contact" className={flexContainer}>

      <div className={contact}>
        <div style={{
          transition: "all .8s ease",
          transform: !jobRequested ? "scale(1)" : "scale(.0001) skew(90deg, 20deg)",
          opacity: !jobRequested ? 1 : .5,
          height: !jobRequested ? "auto" : 0,
        }}>
          {Cover}
        </div>
        <div style={{
          opacity: jobRequested ? 1 : 0,
          height: jobRequested ? "auto" : 0,
          display: jobRequested ? "block" : "none"
        }}>

          <div className={centerText}>
            <h1>Get in touch</h1>
            <p>{
              state.succeeded ?
                "Your message has been sent."
                : "Use this handy lil form to reach me directly."
            }
            </p>
          </div>
          {CompletedMessage}
          {
            state.succeeded ? null
              :
              <form onSubmit={handleSubmit}>

                <div>
                  <div className={flexContainer}>
                    {Reason}
                    {Message}
                  </div>
                  {/* only show if type is set... */}
                  <div className={flexContainer} style={{ opacity: reason ? 1 : 0, height: reason ? "auto" : 0 }}>
                    {Date}
                  </div>
                </div>

                <div className={date ? null : rightSide}>
                  <div
                    style={{
                      height: date ? 0 : "auto",
                    }}
                  >

                  </div>
                  {/* only show if date is set... */}
                  <div style={{ opacity: date ? 1 : 0, height: date ? "auto" : 0 }}>
                    <div className={flexContainer}>{Name}</div>
                    <div className={flexContainer}>{Email}</div>
                  </div>

                  {/* only opaque if Email is set... */}
                  <button aria-label="Submit Message" type="submit" disabled={state.submitting || !emailAddress} style={{ opacity: emailAddress ? 1 : 0 }}>
                    {state.submitting ? 'Submitting' : 'Send'}
                  </button>

                </div>

              </form>
          }
        </div>
      </div>

      <NextSectionLink size={120} />
    </section >
  );
};
export default Contact;