import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import cs50 from "../../Assets/certificates/cs50.png";
import wharton from "../../Assets/certificates/wharton.png";
import mitx from "../../Assets/certificates/mitx.png";
import harvardx from "../../Assets/certificates/harvardx.png";

function Awards() {
  const imageSize = "20%";
  return (
    <Container fluid className="project-section mb-20">
      <h1
        id="awards"
        className="text-textColor font-bold md:text-5xl text-4xl mt-4 mb-8 text-center"
      >
        Certifications
      </h1>

      <Row>
        <ProjectCard
          imgPath={wharton}
          title="Wharton Entrepreneurship Specialization(5 courses)"
          description={
            <>
              by University of Pennsylvania.
              <br />
              • Entrepreneurship 1: Developing the Opportunity
              <br />
              • Entrepreneurship 2: Launching your Start-Up
              <br />
              • Entrepreneurship 3: Growth Strategies
              <br />
              • Entrepreneurship 4: Financing and Profitability
              <br />• Wharton Entrepreneurship Capstone
            </>
          }
          tech=""
          certificateLink="https://coursera.org/share/b83e384e25a6d33509bf37de2a1f4d55"
        />
        <ProjectCard
          imgPath={mitx}
          title="6.00.1x: Introduction to CS using Python"
          description={
            <>
              by Massachusetts Institute of Technology. <br />• Solved 6 problem
              sets and achieved 90% on the final exam, showcasing expertise in
              Python programming and computational models.
            </>
          }
          tech=""
          imgSize="50%"
          certificateLink="https://courses.edx.org/certificates/71f171c4c1d94d478b9446c9ebb89f0e"
        />

        <ProjectCard
          imgPath={cs50}
          title="CS50's Introduction to Computer Science"
          description="• Successfully completed 10 problem sets, 10 labs, and a final project, demonstrating proficiency in foundational computer science concepts and programming."
          tech=""
          imgSize={imageSize}
          certificateLink="https://certificates.cs50.io/007af9fd-b111-4342-943d-8892fafcbadb.pdf?size=A4"
        />
        <ProjectCard
          imgPath={harvardx}
          title="Harvardx PH526x: Using python for research"
          description="• Successfully completed 10 problem sets, 10 labs, and a final project, demonstrating proficiency in foundational computer science concepts and programming."
          tech=""
          certificateLink="https://courses.edx.org/certificates/c38c68c6ab1343869fd0616f5ffcaedd"
          imgSize={imageSize}
        />
        <ProjectCard
          imgPath="https://maulikchopra.github.io/coderpro-website/assets/img/head/harvard.png"
          title="CS50’s Web Programming with Python and JavaScript"
          description="• Developed 10 full-stack projects utilizing Django, Python, JavaScript, HTML, CSS, and React.js with features such as user authentication, database integration, and REST API development."
          imgSize={imageSize}
          tech=""
        />
      </Row>
    </Container>
  );
}

export default Awards;
