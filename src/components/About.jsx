import React from "react";
import "../App.css";
import { services } from "../constants";
import ButtonLink from "./ButtonLink";
import Footer from "./Footer";

const ServiceCard = ({ service }) => (
  <div className="sm:w-[250px] w-full">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px]">
      <div
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{ background: "#151030" }}
      >
        <img
          src={service.icon}
          alt="some_icon"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div
        className="bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden"
        id="about"
      >
        <div className="flex flex-col justify-around">
          <div className="sm:px-16 px-2"> 
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
              Introduction
            </h2>
            <p className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]">
              👨‍💻 Hi, I'm{" "}
              <span className="text-blue-400">Pradyuman Sarswat</span>, a **2022
              B.Sc. graduate** 🎓 with a strong passion for **building scalable
              web applications and efficient backend systems**. As a{" "}
              <a
                className="text-green-300 hover:text-green-500 duration-300"
                href="https://www.linkedin.com/in/pradyuman-sarswat/"
                target="_blank"
              >
                Full Stack Developer
              </a>
              , I specialize in **MERN, Next.js, and backend development**, with
              a keen interest in **Data Structures & Algorithms (DSA) using
              Javascript** 🚀.
              <br />
              ✍️ I share my **personal thoughts and tech insights** on{" "}
              <a
                className="text-purple-300 hover:text-purple-400 duration-300"
                href="https://x.com/PradyumanCodes"
                target="_blank"
              >
                X 
              </a>
                , discussing **modern web technologies, coding best practices, and
              industry trends**.
            </p>

            <ButtonLink
              // url="https://drive.google.com/file/d/19Vh0nx5JF9G_sgawb_dUIFlGSHtjp_dw/view?usp=drive_link"
              url="/Resume.pdf"
              text="View Resume →"
              padding={`p-3`}
            />
          </div>
          <div className="mt-20 flex justify-center flex-wrap gap-7">
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
