import React, { useState, useEffect } from "react";

import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { AiOutlineDownload } from "react-icons/ai";

const resumelink =
  "https://drive.google.com/file/d/1sJkFA9ZiZBIZnML9Sh3jGGj0oG5hs4-v/view?usp=drive_link";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(600);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="success"
            href={resumelink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <iframe
          id="iframe"
          src={resumelink}
          width={width - 0.5 * width}
          height={height - 0.3 * height}
          allow="autoplay"
          title="Maulik's resume"
        ></iframe>
      </Container>
    </div>
  );
}

export default ResumeNew;
export { resumelink };
