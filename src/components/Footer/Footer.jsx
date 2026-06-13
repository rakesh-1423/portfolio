import React from "react";
import {
  FaIcons,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] ">
      <div className="container mx-auto text text-center">
        <h2 className="text-xl font-semibold text-purple-500">Rakesh kumar</h2>

        {/* Navigation link  */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skill", id: "skill" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "project" },
            { name: "education", id: "education" },
          ].map((item, itemIndex) => (
            <button
              key={itemIndex}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* social media icons  */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icons: <FaFacebook />, link: "" },
            { icons: <FaTwitter />, link: "" },
            { icons: <FaInstagram />, link: "" },
            { icons: <FaYoutube />, link: "" },
            { icons: <FaLinkedin />, link: "" },
          ].map((item, itemIndex) => (
            <a
              key={itemIndex}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform hover:scale-110"
            >
              {item.icons}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Rakesh kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
