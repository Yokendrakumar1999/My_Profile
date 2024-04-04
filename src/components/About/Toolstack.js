import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMacos,
  SiKubernetes,
  SiJenkins,
  SiAnsible,
  SiGit,

} from "react-icons/si";
import {
  FaDocker,
  FaGitlab,
  FaGithub
} from "react-icons/fa";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaGitlab />
      </Col>
   
    </Row>
  );
}

export default Toolstack;
