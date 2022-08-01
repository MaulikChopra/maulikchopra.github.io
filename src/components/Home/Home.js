import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

import homeLogo from "../../Assets/gummy-coding.svg";
import hiByeEmoji from "../../Assets/hi-bye-emoji.png";
import TechGauntlet from "../../Assets/my-tech-gauntlet-stonesV2.png";
import gauntletmini from "../../Assets/gauntlet-mini.png";
import Technologies from "../../Assets/Technologies.png";
import SocialIcons from "../SocialIcons";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
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
              <div
                style={{
                  marginTop: "2rem",
                }}
              >
                <SocialIcons />
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
              <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
                A bit<span className="purple"> about </span> me
              </h1>
              <p className="home-about-body">
                I love coding in
                <i>
                  <b className="purple">
                    &nbsp;JavaScript/TypeScript and Python.&nbsp;
                  </b>
                </i>
                <br />
                <br />I am experienced in building
                <i>
                  <b className="purple">
                    &nbsp;WebSites, Apps, and Products&nbsp;
                  </b>
                </i>
                <br />
                <br /> I work with modern frameworks like
                <i>
                  <b className="purple">
                    &nbsp;Django, Node.js, React.js, Next.js&nbsp;
                  </b>
                </i>
                and libraries like
                <i>
                  <b className="purple">
                    &nbsp;bootstrap, tailwind, redux, express.js, Django REST
                    framework.&nbsp;
                  </b>
                </i>
                <br />
                <br />I excel in Databases and deployment using
                <i>
                  <b className="purple">
                    &nbsp;Firebase, MongoDB, SQL, AWS, Heroku/netlify, and cloud
                    funcitons.&nbsp;
                  </b>
                </i>
                <br />
                <br />
                My other areas of Interest are
                <i>
                  <b className="purple">
                    &nbsp;Arduino, Robotics, and Aerospace engineering.&nbsp;
                  </b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <h2
                style={{
                  color: "white",
                  fontSize: "2.6em",
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
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <h1
                style={{ fontSize: "2.6em", textAlign: "left", color: "white" }}
              >
                My <span className="purple">Experience</span>
              </h1>
            </Col>
            <Col md={4} className="myAvtar">
              <h2 style={{ color: "white", textAlign: "right" }}>
                My Tech Gauntlet!
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
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <h1
                style={{ fontSize: "2.6em", textAlign: "left", color: "white" }}
              >
                My <span className="purple">Projects</span>
              </h1>
            </Col>
            <Col md={4}>
              <h2 style={{ color: "white", textAlign: "right" }}>
                My Creative side!
                <img
                  src={gauntletmini}
                  style={{ width: "10%" }}
                  alt="gauntlet mini"
                />
              </h2>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
