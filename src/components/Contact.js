import React from "react";
import "../App.css";
import brainSquare from "../images/brainSquare.png";

const Contact = () => {
  const emailAddress = "skinnertutoring@gmail.com";
  return (
    <div className="content">
      <h1 className="contact">ENQUIRE BELOW</h1>
      <div className="contact-info">
      <p>
        To address which service might be best for you, enquire for a{" "}
        <strong>free</strong> 30 minute consultation on Zoom. This is a great
        opportunity to discuss current progress, and what you are hoping to
        achieve.
      </p>
      <p>
        Email today! {" "}
        <a href={`mailto:${emailAddress}`} className="email-link">
          {emailAddress}
        </a>
      </p>
      <img src={brainSquare} alt="Brain Image" className="brain-image" />
    </div>
    </div>
  );
};

export default Contact;
