import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import docker from "../../Assets/Projects/d1.jpeg";
import ecom from "../../Assets/Projects/ecomm.png";
import ec2 from "../../Assets/Projects/ec2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ec2}
              isBlog={false}
              title="Using load balancers, deploy web applications across many EC2 instances"
              description="The procedure entails configuring an Application Load Balancer (ALB) with AWS EC2 to spread workloads over several servers and enhance application speed and stability. 
              Enhanced performance: ALB enhances a system's overall performance by distributing incoming traffic across several targets equitably. This can speed up response times and enhance consumer satisfaction.
              Enhanced availability: Your application is more available because ALB keeps track of the health of the targets it has recorded and only directs traffic to those in good standing.
              Greater scalability: As your incoming traffic fluctuates over time, ALB adjusts the size of your load balancer. For the great majority of workloads, it can scale automatically.
              Enhanced security: ALB also offers security measures that may guard your data and systems, such as access control, authentication, and encryption.
              Reducing downtime: Automatically rerouting traffic away from unavailable servers or resources is possible using ALB.
              Performing health checks: To identify potential coding and HTTP issues, ALB performs health checks on connected services on a port-by-port basis."
              ghLink="https://github.com/Yokendrakumar1999/Devops"
            
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={docker}
              isBlog={false}
              title="Docker-based web application containerization and Kubernetes cluster deployment"
              description="Using Docker Hub as a registry for storing and sharing container images, this procedure makes it possible to containerize, version, and deploy web apps efficiently using Docker and Kubernetes.
              Docker-based web application containerization: In the application's directory, create a Dockerfile. Make use of the Dockerfile to create a Docker image.
              Forward the Docker Image to the Docker Hub: Docker login can be used to access Docker Hub. Push the image of Docker and tag it with your Docker Hub account.
              Implement Kubernetes: Generate the YAML files for Kubernetes Deployment and Services. Apply the YAML files to deploy the application to a Kubernetes cluster.
              Open the web application: Retrieve the external IP of the Kubernetes service. Using the given IP, access the web application."
              ghLink="https://github.com/Yokendrakumar1999/Devops"
            
            />
          </Col>
        </Row>
      </Container>
    
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-Commerce-WebsiteE-Commerce website using React.js, MySQL and Spring Boot"
              description="The e-commerce website will be built using React.js for the front end, MySQL for the database, and Spring Boot for the backend. 
              Spring Boot will handle API creation and database interactions using Spring Data JPA.
              React.js components will be designed for product listing, cart management, and checkout features. 
              Integration between React.js and Spring Boot will be achieved through HTTP requests, with user authentication implemented using Spring Security.
               
              Deployment will include deploying the Spring Boot backend to a servlet container and the React.js frontend to a static hosting service. 
              Monitoring and maintenance will be crucial, including logging, monitoring, and error handling for both backend and frontend components. 
              Continuous improvement and updates will ensure the website remains functional and efficient."
              ghLink="https://github.com/Yokendrakumar1999/E-Commerce-Website"
            
            />
          </Col>
        </Row>
    </Container>
  );
}

export default Projects;
