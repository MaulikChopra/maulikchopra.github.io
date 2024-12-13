import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
// import {
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";
// import { FaLaptopCode, FaAward } from "react-icons/fa";
// import { CgFileDocument } from "react-icons/cg";
// import { MdWork } from "react-icons/md";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 border-b-[1px] left-0 w-full z-50 transition-all ease-out duration-300 ${
        navColour
          ? "bg-backgroundColor shadow-lg"
          : "bg-backgroundColor md:bg-transparent"
      }`}
    >
      <div className="max-w-7xl   mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  justify-between align-middle items-center h-20 md:h-20">
          {/* Brand Name */}
          <div className="flex items-center">
            <span className="text-xl font-semibold text-white">
              Maulik Chopra
            </span>
          </div>

          {/* Hamburger Button */}
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={() => updateExpanded(!expand)}
          >
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>

          {/* Nav Links */}
          <div
            className={`md:flex md:space-x-4 ${
              expand ? "block" : "hidden"
            } absolute  border-b-[1px] md:border-0 md:relative top-16 left-0 md:top-0 bg-backgroundColor md:bg-transparent w-full md:w-auto px-4 py-4 md:px-0 md:py-0`}
          >
            <HashLink
              to="/#top"
              smooth
              className="block md:inline-block text-white hover:text-gray-300 py-2 md:py-0"
              onClick={() => updateExpanded(false)}
            >
              🏠 Home
            </HashLink>
            <HashLink
              to="/#about"
              smooth
              className="block md:inline-block text-white hover:text-gray-300 py-2 md:py-0"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => updateExpanded(false)}
            >
              🎓 About
            </HashLink>
            <HashLink
              to="/#experience"
              smooth
              className="block md:inline-block text-white hover:text-gray-300 py-2 md:py-0"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => updateExpanded(false)}
            >
              🚀 Experience
            </HashLink>
            <HashLink
              to="/#skills"
              smooth
              className="block md:inline-block text-white hover:text-gray-300 py-2 md:py-0"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => updateExpanded(false)}
            >
              🧠 Skills
            </HashLink>
            <HashLink
              to="/#awards"
              smooth
              className="block md:inline-block text-white hover:text-gray-300 py-2 md:py-0"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => updateExpanded(false)}
            >
              🎖️ Certificates
            </HashLink>
            <HashLink
              to="/#projects"
              smooth
              className="block md:inline-block text-white hover:text-gray-300 py-2 md:py-0"
              scroll={(el) => scrollWithOffset(el)}
              onClick={() => updateExpanded(false)}
            >
              📱 Projects
            </HashLink>
            <a
              href="https://drive.google.com/file/d/1sJkFA9ZiZBIZnML9Sh3jGGj0oG5hs4-v/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="block md:inline-block w-full md:w-auto text-white hover:text-gray-300 py-2 md:py-0"
              onClick={() => updateExpanded(false)}
            >
              <div className="flex justify-center md:justify-start">
                <div className="border-1 rounded-md p-1 border-textColor font-bold transition duration-200 hover:bg-textColor">
                  📄 My Resume
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
