import { Col, Row } from "react-bootstrap";
import { BsArrowRightCircleFill } from "react-icons/bs";

function About() {
  return (
    <>
      <h1 id="about">
        A bit<span className="secondary-color-heading"> about </span> me
      </h1>
      <p className="home-about-body">
        A passionate FullStack Web developer 🌐. I can build User-friendly ✨
        progressive web apps 💻, powerful RESTful APIs ☋, and a robust backend
        🐘 that scales 🚀 to the MOON 🌕!
        <br />I am experienced in building
        <b className="secondary-color">
          &nbsp;WebSites, Apps, and Products&nbsp;
        </b>
        <Row style={{ fontSize: "1.15rem" }}>
          <Col md={4}>
            <b className="secondary-color">
              Languages <BsArrowRightCircleFill />
            </b>
          </Col>
          <Col md={8}>
            <b>JavaScript/TypeScript and Python.</b>
          </Col>
        </Row>
        <Row style={{ fontSize: "1.15rem" }}>
          <Col md={4}>
            <b className="secondary-color">
              Libraries <BsArrowRightCircleFill />
            </b>
          </Col>
          <Col md={8}>
            <b>
              bootstrap, tailwind CSS, redux, express.js, Django REST framework.
            </b>
          </Col>
        </Row>
        <Row style={{ fontSize: "1.15rem" }}>
          <Col md={4}>
            <b className="secondary-color">
              Databases <BsArrowRightCircleFill />
            </b>
          </Col>
          <Col md={8}>
            <b>Firebase, MongoDB, PostgreSQL, and MySQL.</b>
          </Col>
        </Row>
        <Row style={{ fontSize: "1.15rem" }}>
          <Col md={4}>
            <b className="secondary-color">
              Tools <BsArrowRightCircleFill />
            </b>
          </Col>
          <Col md={8}>
            <b>
              Git, Heroku, netlify, vercel, docker, webpack, and cloud
              funcitons.
            </b>
          </Col>
        </Row>
        My other areas of Interest are
        <b className="secondary-color">
          &nbsp;Arduino, Robotics, and Aerospace engineering.&nbsp;
        </b>
      </p>
    </>
  );
}

export default About;
