import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if (this.props.data) {
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      var sendEmail = `https://formspree.io/${email}`;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form action={sendEmail} method="post" id="contactForm" name="contactForm">
              <fieldset>

                <input type="text" name="_gotcha" style={{ display: "none" }} />

                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input
                    type="text"
                    autoComplete="name"
                    size="35"
                    id="contactName"
                    name="contactName"
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input
                    type="text"
                    autoComplete="email"
                    size="35"
                    id="contactEmail"
                    name="email"
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" size="35" id="contactSubject" name="_subject" />
                </div>

                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                </div>

                <div>
                  <button className="submit" type="submit" value="Send">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                  <span style={{ float: "right", marginTop: "auto" }}> * by submitting, you promise you're not a robot.</span>
                </div>

              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>

            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!<br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Send a message to:</h4>
              <p className="address">
                {name}<br />
                {city}, {state} {zip}<br />
                {email}<br />
              </p>
            </div>
          </aside>

        </div>
      </section>
    );
  }
}

export default Contact;
