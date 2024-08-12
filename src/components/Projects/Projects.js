import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Youtbe2.0"
              description="This project is a dynamic and engaging YouTube clone developed using React.js and Material-UI, showcasing a sophisticated understanding of modern web development practices. The application mirrors key features of the popular video-sharing platform, offering a streamlined user experience with a contemporary design aesthetic.

"
              ghLink="https://github.com/Mohammadzaidananees/Youtube2.0"
              demoLink="https://cloneyoutbe.netlify.app/"
            />
          </Col>



         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
