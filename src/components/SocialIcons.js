import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMediumCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";

export default function SocialIcons(props) {
  return (
    <ul className="social-icons">
      <li className="single-icon">
        <a href="mailto:maulikchopra10@gmail.com" style={{ color: "white" }}>
          <HiMail size={props.size} />
        </a>
      </li>
      <li className="single-icon">
        <a
          href="https://github.com/maulikchopra"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={props.size} />
        </a>
      </li>
      <li className="single-icon">
        <a
          href="https://twitter.com/IamMaulikChopra"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter size={props.size} />
        </a>
      </li>
      <li className="single-icon">
        <a
          href="https://www.linkedin.com/in/maulikchopra/"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={props.size} />
        </a>
      </li>
      <li className="single-icon">
        <a
          href="https://www.medium.com/@maulikchopra"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillMediumCircle size={props.size} />
        </a>
      </li>

      <li className="single-icon">
        <a
          href="https://www.youtube.com/buildwithmaulik"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube size={props.size} />
        </a>
      </li>
    </ul>
  );
}
