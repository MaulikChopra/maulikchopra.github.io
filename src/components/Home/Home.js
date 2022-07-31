import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/gummy-coding.svg";
import hiByeEmoji from "../../Assets/hi-bye-emoji.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
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
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "800px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
