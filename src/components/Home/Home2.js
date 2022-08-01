import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import TechGauntlet from "../../Assets/my-tech-gauntlet-stonesV2.png";
import gauntletmini from "../../Assets/gauntlet-mini.png";
import {
  AiFillGithub,
  AiFillMediumCircle,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
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
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <h1 style={{ color: "white" }}>
            Here's my Tech Gauntlet!
            <img
              src={gauntletmini}
              style={{ width: "5%" }}
              alt="gauntlet mini"
            ></img>
          </h1>

          <span>
            <img
              src={TechGauntlet}
              style={{ marginBottom: "1rem", borderRadius: "10px" }}
              alt="techGauntlet"
            ></img>
          </span>
        </Row>

        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/maulikchopra"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/IamMaulikChopra"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/maulikchopra/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/buildwithmaulik"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.medium.com/@maulikchopra"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMediumCircle />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}
export default Home2;
