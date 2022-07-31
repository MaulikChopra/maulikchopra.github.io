import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMediumCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        {/* COPYRIGHT INFO */}
        <Col md="6" className="footer-copywright">
          <h3>Designed, Developed, & Ⓒ by Maulik Chopra</h3>
        </Col>

        {/* OTHER INFO */}
        <Col md="2" className="footer-copywright">
          {/* <h3> {year} © Maulik Chopra</h3> */}
        </Col>

        {/* SOCIAL ICONS */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/maulikchopra"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub size={35} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/IamMaulikChopra"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter size={35} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/maulikchopra/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={35} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.medium.com/@maulikchopra"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMediumCircle size={35} />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.youtube.com/buildwithmaulik"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillYoutube size={35} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
