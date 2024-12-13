import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className=" border-b py-2 my-1 shadow-md overflow-hidden flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src={props.imgPath}
          alt="card-img"
          className={`w-full md:w-auto h-auto object-contain max-h-60`}
        />
      </div>

      {/* Content Section */}
      <div className="md:p-4 py-4 flex flex-col justify-between md:w-1/2 text-left text-white">
        <div>
          <h3 className="text-3xl font-semibold">{props.title}</h3>
          <p className="mb-2 ">{props.description}</p>

          {props.tech !== "" && (
            <i className="block font-medium">
              <b>Tech Stack: </b>
              {props.tech}
            </i>
          )}
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap mt-2">
          {props.ghLink && (
            <a
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md text-base border-1 border-textColor px-2 py-1 flex items-center mr-2 mb-2 transition duration-200 hover:bg-textColor hover:text-white"
            >
              <BsGithub className="mr-2" />
              GitHub
            </a>
          )}
          {props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md text-base border-1 border-textColor px-2 py-1 flex items-center mr-2 mb-2 transition duration-200 hover:bg-textColor hover:text-white"
            >
              <CgWebsite className="mr-2" />
              Demo
            </a>
          )}
          {props.certificateLink && (
            <a
              href={props.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md text-base border-1 border-textColor px-2 py-1 flex items-center mr-2 mb-2 transition duration-200 hover:bg-textColor hover:text-white"
            >
              <CgWebsite className="mr-2" />
              Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
