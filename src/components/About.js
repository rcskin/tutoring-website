import React from "react";
import "../App.css";
import profilepic from "../images/profilepic.jpeg";

const About = () => {
  return (
    <div className="content">
      <h1 className="about">MEET THE TEACHER</h1>
      <div className="about-me">
        <img src={profilepic} alt="Profile Pic" className="profile-image" />
        <p>
          Rachel Skinner is a Canadian Science and Maths teacher/tutor. She
          graduated with a BSc in General Sciences majoring in Chemistry,
          Mathematics, and Biology. She further obtained a Graduate Diploma in
          Teaching Secondary Sciences and Maths in New Zealand.
        </p>
        <p>
          She has worked for a decade as a Science teacher in London in KS3/GCSE
          Sciences and A-level Psychology. She now tutors online and in-person
          for a range of abilities and exam boards. She is DBS checked.
        </p>
        <p>She is now residing in Frinton-On-Sea and happy to help!</p>
      </div>
      <br></br>
      <div>
      <h1 className="about">THE APPROACH</h1>
      <p>
        Rachel wants to ensure parents and pupils have a good understanding of
        the demands and requirements in the UK. This means starting first with
        transparency and conversations regarding progress and expectations.
      </p>

      <p>
        A common issue is that there is a lack of confidence from most pupils,
        and this can lead to second-guessing or leaving questions blank.
        Therefore, this is one of the first things Rachel looks to build.
        Sometimes that confidence is just as important as the skills!
      </p>
      <p>
        Finally, practice makes perfect! Rachel likes giving a micro lesson -
        easily digestible sprints of information, followed by discussions
        regarding what strategies are needed to approach an exam question,
        followed by practice with real exam questions from past papers. This
        allows the pupils to get the most important information needed, then the
        confidence knowing HOW to tackle questions on this topic, and finally
        the practice needed to reinforce the learning.
      </p>
      </div>
    </div>
  );
};

export default About;
