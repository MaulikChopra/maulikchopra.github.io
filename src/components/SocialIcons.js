import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMediumCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <ul className="footer-icons">
      <li className="social-icons">
        <a href="mailto:maulikchopra10@gmail.com" style={{ color: "white" }}>
          <HiMail size={35} />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://github.com/maulikchopra"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={35} />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://twitter.com/IamMaulikChopra"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineTwitter size={35} />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/maulikchopra/"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={35} />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.medium.com/@maulikchopra"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillMediumCircle size={35} />
        </a>
      </li>

      <li className="social-icons">
        <a
          href="https://www.youtube.com/buildwithmaulik"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube size={35} />
        </a>
      </li>
    </ul>
  );
}
