import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Yokendrakumar P </span>
            from <span className="purple"> Ambur Tirupattur(Dt),
Tamilnadu, India.</span>
            <br />
            I am Seeking for Job as a DevOps Engineer.
            <br />
            I have completed MSc Computer Science Sacred Heart College (Autonomous), Tirupattur  <span className="purple">with CGPA 6.9.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Quick learner
            </li>
            <li className="about-activity">
              <ImPointRight />   Creativity
            </li>
            <li className="about-activity">
              <ImPointRight /> self-motivation 
            </li>
            
            <li className="about-activity">
              <ImPointRight /> hard work.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "YOU HAVE NOTHING TO LOOSE because nothing is yours..."{" "}
          </p>
          <footer className="blockquote-footer">Bhagavdgeeta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
