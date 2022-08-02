import React from "react";
import { Container } from "react-bootstrap";

import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <Container className="footer" fluid id="bottom">
      {/* COPYRIGHT INFO */}

      <h3>Designed, Developed, & Ⓒ by Maulik Chopra</h3>

      {/* SOCIAL ICONS */}
      <div className="Footer-social-icons">
        <SocialIcons size="35" />
      </div>
    </Container>
  );
}

export default Footer;
