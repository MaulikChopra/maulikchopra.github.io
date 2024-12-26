import React from "react";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillMediumCircle,
  // AiFillYoutube,
} from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";

export default function SocialIcons(props) {
  return (
    <ul className="social-icons">
      <li className="single-icon-list">
        <a href="mailto:maulikchopra10@gmail.com" className="single-icon">
          <HiMail size={props.size} />
        </a>
      </li>
      <li className="single-icon-list">
        <a
          href="https://github.com/maulikchopra"
          className="single-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={props.size} />
        </a>
      </li>
      <li className="single-icon-list">
        <a
          href="https://www.linkedin.com/in/maulikchopra/"
          className="single-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <AiOutlineTwitter size={props.size} />
        </a>
      </li>
      <li className="single-icon-list">
        <a
          href="https://www.linkedin.com/in/maulikchopra/"
          className="single-icon"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          <FaLinkedinIn size={props.size} />
        </a>
      </li>
      {/* <li className="single-icon-list">
        <a
          href="https://www.medium.com/@maulikchopra"
          className="single-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillMediumCircle size={props.size} />
        </a>
      </li> */}

      {/* <li className="single-icon-list">
        <a
          href="https://www.youtube.com/buildwithmaulik"
          className="single-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube size={props.size} />
        </a>
      </li> */}
    </ul>
  );
}
