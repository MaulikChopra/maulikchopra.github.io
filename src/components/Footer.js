import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import SocialIcons from "./SocialIcons";

function Footer() {
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
          <SocialIcons />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
