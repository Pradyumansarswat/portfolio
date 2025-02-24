import React from "react";
import vpn from "../assets/vpn.png";
import copeople from "../assets/copeople.png";
import game from "../assets/game.png";
import Footer from "./Footer";

const ProjectCard = ({ image, title, description, git, technologies }) => {
  return (
    <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="w-full rounded-t-lg h-auto object-cover"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-4 sm:p-6">
        <a href="#">
          <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
            {title}
          </h5>
        </a>
        <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
        <div className="flex flex-wrap gap-2 pl-2">
          {technologies.map((tag, index) => (
            <p key={`${index}-${tag}`} className="text-[14px] text-blue-500">
              #{tag}
            </p>
          ))}
        </div>
        <a
          href={git}
          className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
        {project.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            git={item.git}
            technologies={item.technologies}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export const project = [
  {
    title: "E-Commerce Platform",
    description:
      "Developed a fully functional e-commerce platform that provides an intuitive shopping experience for users, sellers, and admins. Designed a responsive UI with React.js and styled it with Tailwind CSS for a modern and seamless experience.",
    image: copeople,
    git: "https://github.com/Pradyumansarswat/myecommerceproject",
    technologies: ["MongoDb", "ReactJS", "NodeJS", "Redux"],
  },
  {
    title: "Task Manager",
    description:
      "A task management web application that helps users organize tasks efficiently with features like task creation, deadlines, status updates, and progress tracking. Built with React (Vite) and Redux Toolkit, it ensures a smooth and interactive experience.",
    image: vpn,
    git: "https://github.com/Pradyumansarswat/TaskManager",
    technologies: ["React JS", "Node.js", "Tailwind CSS", "Cloudinary"],
  },
  {
    title: "El Lotteria Game",
    description:
      "A small lottery game inspired by the Mexican game El Lotteria, built with JavaScript. Features multiplayer gameplay, smooth animations, and a secure backend. real-time interactions and seamless connectivity for an engaging and immersive gaming experience.",
    image: game,
    git: "https://github.com/Pradyumansarswat/El-Lotteria-Game",
    technologies: ["React JS", "Node.js", "MongoDB", "Express", "Material-UI"],
  },
];

export default Projects;
