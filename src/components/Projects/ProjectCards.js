import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        className="card-img-top"
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          width: `${props.imgSize}`,
          objectFit: "contain",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <Card.Body>
        <Card.Title className="project-heading">{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
          <br />
          <i style={{ fontWeight: "500" }}>{props.tech}</i>
        </Card.Text>

        <div style={{ bottom: "0", position: "absloute" }}>
          {props.ghLink && (
            <Button
              variant="success"
              href={props.ghLink}
              target="_blank"
              style={{
                bottom: "0",
                position: "absloute",
                marginBottom: "0.25rem",
              }}
            >
              <BsGithub /> &nbsp;
              {"GitHub"}
            </Button>
          )}

          {"\n"}
          {"\n"}
          {props.demoLink && (
            <Button
              variant="success"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
          {props.certificateLink && (
            <Button
              variant="success"
              href={props.certificateLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Certificate"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
