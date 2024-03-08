import React from "react";
import "../App.css";
import brainSquare from "../images/brainSquare.png";
import scrollDownArrow from "../images/scrollDownArrow.png"; 

const Home = () => {
  return (
    <>
      <div className="content">
        <h1>EXAMS ARE TOUGH, REVISION SHOULDN'T HAVE TO BE!</h1>
        <div className="scroll-down">
          <img src={scrollDownArrow} alt="Scroll Down" className="scroll-down-arrow" />
        </div>
        <div id="services">
          <img src={brainSquare} alt="Brain Image" className="brain-image" />
          <div className="services-content">
            <h3>Available Tutoring Services:</h3>
            <ul>
              <li>KS3 Science & Maths</li>
              <li>GCSE Science & Maths</li>
              <li>GCSE Holiday Prep Course - Maths &/or Science</li>
              <li>AS/A-level Pure Mathematics</li>
              <li>AS/A-level Psychology</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
