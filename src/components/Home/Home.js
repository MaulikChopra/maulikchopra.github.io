import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// import Particle from "../Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

import homeLogo from "../../Assets/gummy-coding.svg";
import hiByeEmoji from "../../Assets/hi-bye-emoji.png";
import TechGauntlet from "../../Assets/my-tech-gauntlet-stonesV2.png";
import gauntletmini from "../../Assets/gauntlet-mini.png";
import Technologies from "../../Assets/Technologies.png";
import SocialIcons from "../SocialIcons";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <Container fluid className="home-section" id="home">
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 className="heading">
              Hi! {"  "}
              <span className="wave" role="img" aria-labelledby="wave">
                <img
                  src={hiByeEmoji}
                  alt="hi bye animation"
                  style={{ width: "75%" }}
                ></img>
              </span>
            </h1>

            <h1 className="heading-name">
              I'm
              <b className="main-name"> Maulik Chopra</b>
            </h1>

            <div style={{ paddingLeft: "1rem", textAlign: "left" }}>
              <Type />
            </div>

            <div className="Home-social-icons">
              <SocialIcons size="35" />
            </div>
          </Col>

          <Col md={5}>
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              // style={{ maxHeight: "800px" }}
            />
          </Col>
        </Row>
      </Container>

      {/* <Home2 /> */}

      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <div className="box-shadow">
              <h1
                id="about"
                style={{
                  textAlign: "left",
                }}
              >
                A bit<span className="purple"> about </span> me
              </h1>
              <p className="home-about-body">
                I love coding in
                <b className="purple">
                  &nbsp;JavaScript/TypeScript and Python.&nbsp;
                </b>
                <br />I am experienced in building
                <b className="purple">
                  &nbsp;WebSites, Apps, and Products&nbsp;
                </b>
                <br /> I work with modern frameworks like
                <b className="purple">
                  &nbsp;Django, Node.js, React.js, Next.js&nbsp;
                </b>
                and libraries like
                <b className="purple">
                  &nbsp;bootstrap, tailwind, redux, express.js, Django REST
                  framework.&nbsp;
                </b>
                <br />I excel in Databases and deployment using
                <b className="purple">
                  &nbsp;Firebase, MongoDB, SQL, AWS, Heroku/netlify, and cloud
                  funcitons.&nbsp;
                </b>
                <br />
                My other areas of Interest are
                <b className="purple">
                  &nbsp;Arduino, Robotics, and Aerospace engineering.&nbsp;
                </b>
              </p>
            </div>

            {/* MY EXPERIENCE */}
            <div className="box-shadow">
              <h1
                style={{
                  textAlign: "left",
                  color: "white",
                }}
              >
                My{" "}
                <span className="purple" id="experience">
                  Experience
                </span>
              </h1>
              <p style={{ textAlign: "left" }}>
                <h4>
                  Founder @ <b className="purple">AssitCheck.org</b>
                </h4>
                <i>June 2021 - February 2022</i>
                <br />
                <span style={{ opacity: "0.5" }}>
                  AssistCheck is a volunteer/task management application that
                  helps small-scale institutions and nonprofits that cannot
                  employ technologically literate employees and require User
                  Interfaces in the local language.
                </span>
                <br />
                <ul>
                  <li>
                    Built native windows application using python Tkinter
                    library. Ability to import .csv data using pandas and
                    generate “task buttons” that are displayed in a simple UI
                    with the local language.
                  </li>
                  <li>
                    Pitched the idea to various institutes and partnered with
                    swera rising run, khushboo welfare society, and Benson
                    medical India. The application now runs at multiple NGOs
                    like the above.
                  </li>
                </ul>
              </p>
            </div>
          </Col>

          {/* RIGHT COLUMN */}
          <Col md={4} className="myAvtar">
            <div className="box-shadow">
              {/* MY SKILLSET IMAGE */}
              <h2
                style={{
                  color: "white",
                  textAlign: "right",
                }}
              >
                My SkillSet
              </h2>
              <Tilt>
                <img
                  src={Technologies}
                  className="img-fluid"
                  alt="technologies"
                  style={{ borderRadius: "15px" }}
                />
              </Tilt>
            </div>

            {/* MY TECH GAUNTLET IMAGE */}
            <div className="box-shadow">
              <h2
                style={{
                  color: "white",
                  textAlign: "right",
                  marginTop: "1rem",
                }}
              >
                My Tech Gauntlet
                <img
                  src={gauntletmini}
                  style={{ width: "10%" }}
                  alt="gauntlet mini"
                />
              </h2>
              <Tilt>
                <span>
                  <img
                    src={TechGauntlet}
                    style={{
                      width: "100%",
                      marginBottom: "1rem",
                      borderRadius: "10px",
                    }}
                    alt="techGauntlet"
                  ></img>
                </span>
              </Tilt>
            </div>
          </Col>
        </Row>

        {/* PROJECTS */}
        <Row>
          <Col>
            <h1 id="projects" style={{ textAlign: "left", color: "white" }}>
              My <span className="purple">Projects</span>
            </h1>
            <Projects />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
