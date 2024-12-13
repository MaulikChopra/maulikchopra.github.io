import React from "react";
import { Container, Row, div } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

// IMAGES PATHS, change here only
import twitterbotImage from "../../Assets/Projects/twitterbot.png";
import auctionaireImage from "../../Assets/Projects/auctionaire4.png";
import mailImage from "../../Assets/Projects/mail1.png";
import googlecloneImage from "../../Assets/Projects/search1.png";
import wikicloneImage from "../../Assets/Projects/wiki5.png";
import minreadswebsite from "../../Assets/Projects/9minreadswebsite.png";
import minreadsapp from "../../Assets/Projects/9minreadsapp.png";
import twitterclone from "../../Assets/Projects/twitterclone.png";

function Projects() {
  return (
    <Container fluid className=" border-t mt-4">
      <h1
        id="projects"
        className="text-textColor font-bold text-center md:text-5xl text-4xl mt-4 mb-8"
      >
        Projects
      </h1>
      <Row>
        <div className="">
          <ProjectCard
            imgPath={minreadsapp}
            title="Book Reading Mobile App"
            description={
              "● Developed 25+ UI screens, reading mode, animations, AI recommendations, & 6000+ images within 2 months."
            }
            tech="React Native, Expo, OpenAI API, Tailwind CSS, TypeScript, Firebase Native, Algolia, Figma, Git."
            demoLink="https://9minreads.vercel.app"
          />
        </div>
        <div className="">
          <ProjectCard
            imgPath={minreadswebsite}
            title="Book Reading Website"
            description="● Implemented 10+ UI pages, 6000+ book search entries, and 2 Million+ words of AI generated book content."
            tech="React JS, Next JS, OpenAI API, Tailwind CSS, TypeScript, Firebase, Algolia, Figma, Revenue Cat."
            demoLink="https://9minreads.vercel.app"
          />
        </div>
        <div className="">
          <ProjectCard
            imgPath={twitterbotImage}
            title="AI powered Twitter Bot"
            description="● Scraped 100,000+ quotes and deployed a fine-tuned Llama model for sentiment-driven tweet replies under 1 min."
            tech="Python, Llama Model, Pandas, Google Cloud Functions, Kaggle, MongoDB."
            ghLink="https://github.com/MaulikChopra/Daily-dose-of-quotes-bot-PUBLIC"
            demoLink="https://twitter.com/BotTweetsQuotes"
          />
        </div>
        <div className="">
          <ProjectCard
            imgPath={twitterclone}
            title="Twitter Clone website: Full Stack"
            description="● Designed the user interface cloning the real Twitter site with 15+ web pages and backend integration in 1 month."
            tech="Python, React JS, Next JS, Tailwind CSS, JavaScript, TypeScript, Firebase, Git."
          />
        </div>
        <div className="">
          <ProjectCard
            imgPath={auctionaireImage}
            title="Auctionaire: Fullstack web app"
            description="Users can post listings, place bids, and comment on the listings. The owner can close the listing making the
highest bidder win. Advanced features like sorting by Category, and User watchlists."
            tech="Python, Django, JavaScript, HTML, CSS, postgreSQL."
            ghLink="https://github.com/MaulikChopra/auctions-cs50web"
            // demoLink="https://twitter.com/BotTweetsQuotes"
          />
        </div>
        <div className="">
          <ProjectCard
            imgPath={mailImage}
            title="Email service"
            description="A server side rendered PWA that features a inbox page, compose page, sent page, and archive Page. Mail shows proper time, sender information, and has archive & reply functionality."
            tech="JavaScript, PostgreSQL, Git."
            ghLink="https://github.com/MaulikChopra/mail-cs50web"
            demoLink="https://mail-cs50web.herokuapp.com/"
          />
        </div>
        {/* <div className="">
          <ProjectCard
            imgPath={googlecloneImage}
            title="Google search!"
            description="Brushing my skills in CSS and HTML by copying the UI/UX, asthetics, and responsiveness of the OG Google search."
            tech="HTML, CSS, and Figma"
            ghLink="https://github.com/MaulikChopra/google-clone-cs50web"
            demoLink="https://maulikchopra.github.io/google-clone-cs50web/"
          />
        </div>
        <div className="">
          <ProjectCard
            imgPath={wikicloneImage}
            title="The wikipedia clone"
            description="A Server side rendered application built with Django. It features hundreds of auto-generated pages written in Markdown syntax. Moreover, It allows users to EDIT, SEARCH, and CREATE new pages. "
            tech="Python, Django, and Markdown."
            ghLink="https://github.com/MaulikChopra/wikipedia-clone-CS50web"
          />
        </div> */}
      </Row>
    </Container>
  );
}

export default Projects;
