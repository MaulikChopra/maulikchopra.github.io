import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";

function Awards() {
  const imageSize = "30%";
  return (
    <Container fluid className="project-section">
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={3} className="project-card">
          <ProjectCard
            imgPath="https://maulikchopra.github.io/coderpro-website/assets/img/head/mit.png"
            title="6.00.1x: Introduction to CS using Python"
            description="Offered by Massachusetts Institute of Technology."
            tech="Grade: 90%"
            imgSize="50%"
            certificateLink="https://courses.edx.org/certificates/71f171c4c1d94d478b9446c9ebb89f0e"
          />
        </Col>
        <Col md={3} className="project-card">
          <ProjectCard
            imgPath="https://maulikchopra.github.io/coderpro-website/assets/img/head/harvard.png"
            title="CS50’s Web Programming with Python and JavaScript"
            description="Learned to make Fullstack web apps using Django, React.js, and SQL."
            imgSize={imageSize}
            tech="Grade: On-going"
          />
        </Col>
        <Col md={3} className="project-card">
          <ProjectCard
            imgPath="https://maulikchopra.github.io/coderpro-website/assets/img/head/harvard.png"
            title="CS50's Introduction to Computer Science"
            description="Offered by CS50 department of Harvard university."
            tech="Grade: Passed"
            imgSize={imageSize}
            certificateLink="https://certificates.cs50.io/007af9fd-b111-4342-943d-8892fafcbadb.pdf?size=A4"
          />
        </Col>
        <Col md={3} className="project-card">
          <ProjectCard
            imgPath="https://maulikchopra.github.io/coderpro-website/assets/img/head/harvard.png"
            title="Harvardx PH526x: Using python for research"
            description="Taught by JP Onella, Associate Professor of Biostatistics, Harvard Univesity. "
            tech="Grade: 70%"
            certificateLink="https://courses.edx.org/certificates/c38c68c6ab1343869fd0616f5ffcaedd"
            imgSize={imageSize}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Awards;
