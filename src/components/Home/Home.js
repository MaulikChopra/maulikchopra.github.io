import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Type from "./Type";
import { CgFileDocument } from "react-icons/cg";

import homeLogo from "../../Assets/gummy-coding.svg";
import hiByeEmoji from "../../Assets/hi-bye-emoji.png";
import SocialIcons from "../other/SocialIcons";
import Projects from "../Projects/Projects";
import Awards from "../awards/awards";
import About from "./About";
import Experience from "./Experience";
import { SkillGauntlet, SkillList } from "./Skills";

function Home() {
  return (
    <Container fluid className="home-section" id="home">
      {/* TOP LANDING SECTION */}
      <Container className="home-content">
        <Row>
          {/* LEFT COLUMN */}
          <Col md={7} className="home-header">
            {/* HI + WAVE EMOJI  */}
            <h1 className="heading">
              Hi! {"  "}
              <span className="wave" role="img" aria-labelledby="wave">
                <img src={hiByeEmoji} alt="hi bye animation"></img>
              </span>
            </h1>

            {/* BOLD HEADING OF NAME */}
            <h1 className="heading-name">
              I'm
              <b className="main-name"> Maulik Chopra</b>
            </h1>

            {/* AUTO TYPER HOME */}
            <div className="heading-auto-type">
              <Type />
            </div>

            {/* SOCIAL ICONS HOME */}
            <div className="Home-social-icons">
              <SocialIcons size="35" />
            </div>

            {/* RESUME BUTTON */}
            <Button
              variant="success"
              as={Link}
              to="/resume"
              className="Home-resume-button"
            >
              <CgFileDocument />
              My Resume
            </Button>
          </Col>

          {/* RIGHT COLUMN */}
          {/* HOME RIGHT SIDE PIC */}
          <Col md={5}>
            <img src={homeLogo} alt="home pic" className="Home-main-image" />
          </Col>
        </Row>
      </Container>

      {/* AFTER TOP LANDING SECTION */}
      <Container>
        <Row>
          {/* LEFT COLUMN */}
          <Col md={8} className="home-about-description">
            {/* A BIT ABOUT ME */}
            <div className="box-shadow">
              <About />
            </div>

            {/* MY EXPERIENCE */}
            <div className="box-shadow">
              <Experience />
            </div>
          </Col>

          {/* RIGHT COLUMN */}
          <Col md={4} className="myAvtar">
            {/* MY SKILLSET IMAGE */}
            <div className="box-shadow">
              <SkillList />
            </div>

            {/* MY TECH GAUNTLET IMAGE */}
            <div className="box-shadow">
              <SkillGauntlet />
            </div>
          </Col>
        </Row>

        {/* AWARDS LIST */}
        <Row>
          <Col>
            <h1 id="awards">
              My <span className="secondary-color-heading">Awards</span>
            </h1>
            <p>
              <Awards />
            </p>
          </Col>
        </Row>

        {/* PROJECTS */}
        <Row>
          <Col>
            <h1 id="projects">
              My <span className="secondary-color-heading">Projects</span>
            </h1>
            <Projects />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
