import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wordCount from "../../Assets/Projects/react-task-1.png";
import calculator from "../../Assets/Projects/react-task-2.png";
import colorPicker from "../../Assets/Projects/react-tasl-3.png";
import dummyData from "../../Assets/Projects/react-task-4.png";
import ageCalculator from "../../Assets/Projects/react-task-5.png";

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
              imgPath={wordCount}
              isBlog={false}
              title="Responsive Paragraph Counter"
              description="React Js Task 1"
              ghLink="https://github.com/kiransrinivas2707/word-count"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="React Js Task 2"
              ghLink="https://github.com/kiransrinivas2707/calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colorPicker}
              isBlog={false}
              title="Color Picker"
              description="React Js Task 3"
              ghLink="https://github.com/kiransrinivas2707/color-picker"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dummyData}
              isBlog={false}
              title="Dummy Data"
              description="React Js Task 4"
              ghLink="https://github.com/kiransrinivas2707/dummy-data-user-table"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ageCalculator}
              isBlog={false}
              title="Age Calculator"
              description="React Js Task 5"
              ghLink="https://github.com/kiransrinivas2707/age-calculator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
