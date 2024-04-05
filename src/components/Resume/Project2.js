import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Proj() {
  return (
    <Container fluid className="project-section" >
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> Education </strong>
        </h1>
        <p style={{ color: "white" }}>
         Here can My Education details
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="MSc Computer Science"
              description=" Sacred Heart College (Autonomous), Tirupattur.
              CGPA: 6.9 | 2021 - 2023"
              ghLink="#"
            
            />
          </Col>
       
          <Col md={5} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="BSc Computer Science"
              description="Puratchi Thalaivar Dr.M.G.R. Govt Αrt & Science College, Madhanur.
              CGPA: 7.1 | 2017 - 2020 "
              ghLink="#"
            
            />
          </Col>
        </Row>
    </Container>
    <Container>
        <h1 className="project-heading">
          <strong className="purple">CERTIFICATIONS </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Acheivements & Internship I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="Boscosoft Company | Yelagiri"
              description=" I successfully finished my Android in-plant training."
              ghLink="#"
            
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="Loyola College | Chennai"
              description=" I won 1st Prize in the Data Vizart event of Unravel 2023 conducted on 27 Jan 2023 by the Department of Data Science, Loyola College Chennai.
          "
            
            />
          </Col>
          
          <Col md={5} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="Sacred Heart College (Autonomous) | Tirupattur"
              description="I Won the 3rd Prize in the AD Mad-show on LOGIN 2023 conducted on 3rd Feb 2023."
            
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="Redington Foundation | Chennai"
              description="I Completed the Centre of Excellence (IT - ITeS) Training Program from January 2022 to May 2023, conducted by KALVI TRUST."
            
            />
          </Col>
          
          <Col md={5} className="project-card">
            <ProjectCard
            
              isBlog={false}
              title="Jspiders | Bangalore"
              description="I completed the DevOps training program conducted at Jspiders in the BTM Layout, Bangalore.
              "
            
            />
          </Col>
        </Row>
    </Container>
    
    </Container>
  );
}

export default Proj;
