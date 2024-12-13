import React from "react";
import { Container } from "react-bootstrap";

import SocialIcons from "./other/SocialIcons";

function Footer() {
  return (
    <Container
      className="footer h-32 md:h-24 border-t-[1px] md:flex md:justify-between md:px-20 md:pt-4"
      fluid
      id="bottom"
    >
      {/* COPYRIGHT INFO */}

      <p className="md:text-left text-base text-white">
        Designed, Developed, & Ⓒ by Maulik Chopra
        <br></br>
        Developed in React js
      </p>

      {/* SOCIAL ICONS */}
      <div className="Footer-social-icons">
        <SocialIcons size="35" />
      </div>
    </Container>
  );
}

export default Footer;
