import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-slate-900 p-4" style={{ cursor: "default" }}>
      <div className="flex justify-between flex-wrap gap-4">
        <p className="text-white text-center w-full sm:w-auto font-light">
          © {year} Pradyuman. All rights reserved.
        </p>
        <div className="text-white flex justify-around sm:w-[250px] w-full">
          <a
            href="mailto:pradyumansarswat2909@gmail.com"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <FiMail className="text-xl" />
          </a>
          <a
            href="https://x.com/PradyumanCodes"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <FaXTwitter className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/pradyuman-sarswat/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <AiFillLinkedin className="text-xl" />
          </a>
          <a
            href="https://github.com/Pradyumansarswat"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
