import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pic.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  
  AiFillInstagram,
  AiFillMail,
  AiOutlineGitlab,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
          
              <br /> Experienced DevOps engineer with a strong background in   <i>
                <b className="purple">cloud infrastructure, automation, and continuous integration/continuous deployment (CI/CD). </b>
              </i>
              <br />
              Skilled in designing, implementing, and maintaining scalable, secure, and efficient systems. Proven ability to collaborate
             &nbsp;
              <i>
                <b className="purple">with cross-functional teams to deliver high-quality solutions.</b>
              </i>
              <br />
              <br /> Skilled in Java (Core) programming, adept at building robust applications and implementing    <i>
                <b className="purple">object-oriented principles to create efficient software solutions. </b>
              </i>
              <br />
              <br /> Proficient in web development, with expertise in HTML, CSS, and JavaScript, along with frameworks such as    <i>
                <b className="purple">React.js and Node.js, to create responsive and interactive web applications. </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Yokendrakumar1999"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://gitlab.com/Yokendrakumar1999"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineGitlab />
                </a>
              </li>
              <li className="social-icons">
                <a
                href="https://www.linkedin.com/in/yokendrakumar-p/"
                target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                href="https://www.instagram.com/yokendrakumar199/"
                target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                href="mailto:yokendrakumar1999@gmail.com"
                target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
