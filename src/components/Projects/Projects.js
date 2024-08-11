import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import docker from "../../Assets/Projects/docker.png";
import ecom from "../../Assets/Projects/ecomm.png";
import ec2 from "../../Assets/Projects/ec2.png";
import cibi from "../../Assets/Projects/cibi.png";
import atj from "../../Assets/Projects/atj.png";


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
          <Col md={4} className="project-card">
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
              demoLink=""
            />
          </Col>
       
          <Col md={4} className="project-card">
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
              demoLink=""
            />
          </Col>
              
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cibi}
              isBlog={false}
              title="CIBI Website -The Centre for Innovation and Business Incubation (CIBI)"
              description="There are many Bootstrap templates available online, both free and paid, that can help you quickly create a professional-looking website for the Centre for Innovation and Business Incubation (CIBI).

              To use a Bootstrap template, you typically download the template files and then customize them to add your own content and branding. Most Bootstrap templates come with documentation that explains how to use the template and customize it to your needs.
              
              If you have a specific template in mind or need help finding one, let me know, and I can assist you further!"
              ghLink="https://github.com/Yokendrakumar1999/CIBI-Website/tree/master"
              demoLink="https://master.d38qjvzggsoqlz.amplifyapp.com/index.html"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atj}
              isBlog={false}
              title="ATJ I-TECH SOLUTIONS Website"
              description="
              ATJ I-TECH SOLUTIONS' website design, built with Bootstrap, offers a seamless and responsive experience. The use of Bootstrap ensures that the website is mobile-friendly and adapts well to various screen sizes. The design is likely clean and modern, with a focus on user-friendly navigation and readability. By leveraging Bootstrap's components and grid system, the website likely achieves a professional look while maintaining flexibility for future updates and additions."
              ghLink="https://github.com/Yokendrakumar1999/ATJ-I-TECH-Solutions-Website"
              demoLink="https://master.d3tvwlb7amvvz8.amplifyapp.com/index.html"
            />
          </Col>
       <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-Commerce website using React.js for the frontend, MySQL for the database, and Spring Boot for the backend"
              description="The e-commerce website will be built using React.js for the front end, MySQL for the database, and Spring Boot for the backend. 
              Spring Boot will handle API creation and database interactions using Spring Data JPA.
              React.js components will be designed for product listing, cart management, and checkout features. 
              Integration between React.js and Spring Boot will be achieved through HTTP requests, with user authentication implemented using Spring Security.
              Testing will involve unit tests for backend services and integration tests for frontend components. 
              Deployment will include deploying the Spring Boot backend to a servlet container and the React.js frontend to a static hosting service. 
              Monitoring and maintenance will be crucial, including logging, monitoring, and error handling for both backend and frontend components. 
              Continuous improvement and updates will ensure the website remains functional and efficient."
              ghLink="https://github.com/Yokendrakumar1999/E-Commerce-Website"
              demoLink="https://master.d2vmt21thfsa24.amplifyapp.com/"
            />
          </Col>      
        </Row>
    </Container>
    </Container>
  );
}

export default Projects;
