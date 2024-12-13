import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

import Type from "./Type";
// import { CgFileDocument } from "react-icons/cg";

import homeLogo from "../../Assets/maulikpic.png";
// import hiByeEmoji from "../../Assets/hi-bye-emoji.png";
import SocialIcons from "../other/SocialIcons";
import Projects from "../Projects/Projects";
import Awards from "../awards/awards";
import About from "./About";
import Experience from "./Experience";
import { SkillList } from "./Skills";
// import {  } from "react-router-hash-link";
import Education from "./Education";

function Home() {
  return (
    <Container fluid className="home-section md:max-w-7xl z-10" id="home">
      <Container className=" flex justify-center md:mt-0 mt-14 items-center min-h-[80vh] py-10">
        <Row className="w-full md:max-w-5xl text-left">
          {/* LEFT COLUMN */}
          <Col md={7} className=" flex flex-col">
            {/* HI + WAVE EMOJI  */}
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Hi! 👋🏻
              {/* <span className="wave" role="img" aria-labelledby="wave">
                <img
                  src={hiByeEmoji}
                  alt="hi bye animation"
                  className="inline-block"
                />
              </span> */}
            </h1>

            {/* BOLD HEADING OF NAME */}
            <h1 className=" text-2xl lg:text-5xl mb-4">
              I'm{" "}
              <b className=" text-4xl md:text-6xl font-bold text-textColor">
                Maulik Chopra
              </b>
            </h1>

            {/* AUTO TYPER HOME */}
            <div className=" text-white">
              <Type />
            </div>

            {/* SOCIAL ICONS HOME */}
            <div className="Home-social-icons mb-4">
              <SocialIcons size="30" />
            </div>

            <a
              href="https://drive.google.com/file/d/1sJkFA9ZiZBIZnML9Sh3jGGj0oG5hs4-v/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex text-white"
            >
              <div className="border-1 flex rounded-md p-2 border-textColor font-bold transition duration-200 hover:bg-textColor">
                {/* <CgFileDocument className="mr-2" /> */}
                📄 &nbsp; My Resume
              </div>
            </a>
          </Col>

          {/* RIGHT COLUMN */}
          <Col
            md={5}
            className="flex justify-center md:justify-start mt-6 md:mt-0"
          >
            <img
              src={homeLogo}
              alt="home pic"
              className=" object-cover rounded-3xl"
            />
          </Col>
        </Row>
      </Container>

      {/* AFTER TOP LANDING SECTION */}
      <Container>
        <Row>
          {/* LEFT COLUMN */}
          <Col md={8} className="text-white">
            {/* A BIT ABOUT ME */}
            <div className="md:border-b-2 border-b-2 mb-4 pb-4">
              <About />
            </div>

            {/* MY EXPERIENCE */}
            <div className="">
              <Experience />
            </div>
          </Col>

          {/* RIGHT COLUMN */}
          <Col md={4} className="myAvtar">
            {/* MY SKILLSET IMAGE */}
            <div className="md:border-l-2 md:border-t-0 border-t-2 md:pl-4">
              <SkillList />
            </div>

            {/* MY TECH GAUNTLET IMAGE */}
            <div className="border-t-2 mb-8 mt-12"></div>
            <div className="md:border-l-2 md:pl-4">
              <Education />
            </div>
          </Col>
        </Row>

        {/* PROJECTS */}
        <Row>
          <Col>
            <Projects />
          </Col>
        </Row>

        {/* AWARDS LIST */}
        <Row>
          <Col>
            <Awards />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
