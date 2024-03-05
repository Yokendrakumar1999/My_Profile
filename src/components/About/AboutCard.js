import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Priyadharshini Kumarasamy </span>
            from <span className="purple"> Krishnagiri(Dt),
Tamilnadu, India.</span>
            <br />
            I am Seeking for Job as a software developer .
            <br />
            I have completed MSc Computer Science Sacred Heart College (Autonomous), Tirupattur with 70 percent.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Leadership
            </li>
            <li className="about-activity">
              <ImPointRight /> 
Creativity
            </li>
            <li className="about-activity">
              <ImPointRight /> Coaching
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "never stop learning because life never stops teaching!"{" "}
          </p>
          <footer className="blockquote-footer">Priyadharshini K</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
