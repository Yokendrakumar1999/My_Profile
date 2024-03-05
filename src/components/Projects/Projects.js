import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import edit from "../../Assets/Projects/breast.png";
import text1 from "../../Assets/Projects/tex1.png";

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
              imgPath={text1}
              isBlog={false}
              title="Text Document Classification Using various Machine Learning Algorithm."
              description="Text document classification using various machine learning algorithms involves training a model to categorize text documents into predefined classes or categories.  
              Algorithms like Naive Bayes, Support Vector Machines, and Neural Networks are commonly used for this task. 
              The process typically involves preprocessing the text data, such as tokenization and vectorization, followed by training the model on a labeled dataset. 
              Evaluation is done using metrics like accuracy, precision, recall, and F1-score. 
              Hyperparameter tuning and cross-validation are often used to improve model performance. 
              Overall, the study compares machine learning methods for text document classification, finding logistic regression to be the most accurate (0.96) and decision trees the least (0.740). "
              ghLink=""
            
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Research Paper I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={edit}
              isBlog={false}
              title="Breast Cancer Classification using Machine Learning Algorithms."
              description="Machine learning techniques have been extensively used in various medical applications, including advising clinicians on decision-making. 
              In a study focusing on breast cancer classification, seven well-known linear and non-linear algorithms were compared using the Wisconsin Breast Cancer Diagnostic dataset. 
              These algorithms included Linear SVM, Non-Linear SVM, Logistic regression, KNN, Naïve Bayes, Decision tree, and Random Forest. 
              Naïve Bayes showed the highest accuracy (0.97) on the training set. 
              The predictive models' performance was evaluated using k-fold cross-validation, showing Naïve Bayes as the best-performing model in terms of accuracy, precision, and recall on unobserved data."
              ghLink=""
            
            />
          </Col>
        </Row>
      </Container>
   
    </Container>
  );
}

export default Projects;
