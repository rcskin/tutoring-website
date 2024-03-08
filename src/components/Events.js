import React from "react";
import "../App.css";
import brainSquare from "../images/brainSquare.png";

const Events = () => {
  const emailAddress = "skinnertutoring@gmail.com";
  return (
    <div className="content">
      <h1 className="Events">UPCOMING COURSES</h1>
      <br></br>
      <div className="Events-info">
        <h2>EASTER HOLIDAY PREP COURSES 2024</h2>
        <h4>GCSE Maths Higher/Foundation - April 2-4 2024 - £150</h4>
        <p>
          This prep course is a 3-day sprint with 2 hours per session. There is
          approximately 1 hour of take-home reinforcement work each day.
        </p>
        <p>
          <strong>Higher</strong> course is from{" "}
          <strong>10am-12pm (noon)</strong>. This will cover trickier topics
          Grade 5-8/9. This is suitable for pupils who are getting 4 or higher
          on mock exams who need to improve some of those bigger value
          end-of-paper exams.
        </p>
        <p>
          <strong>Foundation</strong> course is from <strong>1pm-3pm</strong>.
          This will cover topics up to Grade 5. This is suitable for those
          taking Foundation papers, or pupils who need some extra support with
          the basics.
        </p>
        <br></br>
        <h4>
          GCSE Science - Trilogy (Combined Science) Higher - April 8-11 2024 -
          £200
        </h4>
        <p>
          This prep course is a 4-day sprint with 2 hours per session. There is
          approximately 1 hour of take-home reinforcement work each day.
        </p>
        <p>
          <strong>Higher</strong> course is from{" "}
          <strong>10am-12pm (noon)</strong>. This will cover trickier topics
          Grade 5-8/9. This is suitable for pupils who are getting 4 or higher
          on mock exams who need to improve some of those bigger value
          end-of-paper exam questions.
        </p>
        <p>
          Those needing support in <strong>Foundation</strong> can book this
          course but it will vary slightly from what other pupils are expected
          to do.
          <br></br>
          Those in <strong>Triple Science</strong> can take this course to help
          with basics. However, if you are currently a grade 6+ on mock exams,
          this course might not be best suited for you compared to private
          sessions.
        </p>
        <br></br>
        <p>
          *Note: All courses are <strong>ONLINE ONLY</strong>. Links for the
          Zoom classroom will be provided. These courses are designed to tackle
          general problem-areas for most pupils. They are meant to cover as many
          topics as possible for a general range of learners. If you think
          private lessons might be best for you, enquire below and we can
          discuss your needs!
        </p>
        </div>
        <div className="pupils-need">
        <h5>Pupils need:</h5>
        <ul>
            <li>Internet connection and registration on Zoom website or app</li>
            <li>Scientific Calculator - no basic or phone calculators</li>
            <li>Printer is optional but must be able to open PDF documents</li>
        </ul>
      </div>
      <br></br>
      <div>
        <p>
          Book a free consultation to enroll in a course!{" "}
          <a href={`mailto:${emailAddress}`} className="email-link">
            {emailAddress}
          </a>
        </p>
        <img src={brainSquare} alt="Brain Image" className="brain-image" />
      </div>
    </div>
  );
};

export default Events;
