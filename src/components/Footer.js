import React from "react";
import { Container } from "react-bootstrap";

import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <Container fluid className="footer" id="bottom">
      {/* COPYRIGHT INFO */}

      <h3 style={{ float: "left" }}>
        Designed, Developed, & Ⓒ by Maulik Chopra
      </h3>

      {/* SOCIAL ICONS */}
      <div style={{ float: "right" }}>
        <SocialIcons />
      </div>
    </Container>
  );
}

export default Footer;
