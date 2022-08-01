import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

// IMAGES PATHS, change here only
import twitterbotImage from "../../Assets/Projects/twitterbot.png";
import auctionaireImage from "../../Assets/Projects/auctionaire4.png";
import mailImage from "../../Assets/Projects/mail1.png";
import googlecloneImage from "../../Assets/Projects/search1.png";
import wikicloneImage from "../../Assets/Projects/wiki5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={twitterbotImage}
            title="Daily dose of Quotes: Twitter Bot"
            description="Tweets a motivational quote every 2 hours. Simaltenously, Tracks a list of users and replies to them."
            tech="Python, Heroku, MongoDB."
            ghLink="https://github.com/MaulikChopra/Daily-dose-of-quotes-bot-PUBLIC"
            demoLink="https://twitter.com/BotTweetsQuotes"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={auctionaireImage}
            title="Auctionaire: Fullstack web app"
            description="Users can post listings, place bids, and comment on the listings. The owner can close the listing making the
highest bidder win. Advanced features like sorting by Category, and User watchlists."
            tech="Python, Django, JavaScript, HTML, CSS, postgreSQL."
            ghLink="https://github.com/MaulikChopra/auctions-cs50web"
            // demoLink="https://twitter.com/BotTweetsQuotes"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={mailImage}
            title="Email service"
            description="A server side rendered PWA that features a inbox page, compose page, sent page, and archive Page. Mail shows proper time, sender information, and has archive & reply functionality."
            tech="JavaScript, PostgreSQL, Git."
            ghLink="https://github.com/MaulikChopra/mail-cs50web"
            demoLink="https://mail-cs50web.herokuapp.com/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={googlecloneImage}
            title="Google search!"
            description="Brushing my skills in CSS and HTML by copying the UI/UX, asthetics, and responsiveness of the OG Google search."
            tech="HTML, CSS, and Figma"
            ghLink="https://github.com/MaulikChopra/google-clone-cs50web"
            demoLink="https://maulikchopra.github.io/google-clone-cs50web/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={wikicloneImage}
            title="The wikipedia clone"
            description="A Server side rendered application built with Django. It features hundreds of auto-generated pages written in Markdown syntax. Moreover, It allows users to EDIT, SEARCH, and CREATE new pages. "
            tech="Python, Django, and Markdown."
            ghLink="https://github.com/MaulikChopra/wikipedia-clone-CS50web"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
