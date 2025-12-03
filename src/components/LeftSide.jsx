import React from "react";
import {
  BsLinkedin,
  BsInstagram,
  BsWhatsapp,
  BsDownload,
  BsGithub,
} from "react-icons/bs";

export const LeftSide = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full h-fit min-h-full pt-8 lg:p-16 px-2 left-div"
      id="leftDiv"
    >
      <h1 className="text-[#c4d0ec] text-4xl md:text-5xl font-bold">
        KHAYI Oussama
      </h1>
      <h4 className="text-xl my-3 font-semibold capitalize text-gray-300">
        Full stack web developer
      </h4>
      <p className="text-gray-400 w-[90%] md:w-[60%] lowercase first-letter:capitalize">
        Crafting comprehensive digital experiences from concept to deployment,
        specializing in developing robust frontends and scalable backends for
        web applications.
      </p>
      <a
        href="https://drive.google.com/file/d/1iOHuijG3GxAhC-x-mq1Cna3arUMiKwup/view"
        target="_blank"
        rel="noopener noreferrer"
        className="btn px-4 p-2 bg-secondary hover:bg-[#3eb8ba] mt-10 rounded-lg flex items-center capitalize light lightHover w-fit"
      >
        My resume <BsDownload className="ms-2" />
      </a>
      <div className="links  relative top-6 hidden lg:grid">
        <a
          href="#about"
          className="a-link flex relative py-4 w-[140px]  text-gray-400 group hover:text-teal-300 mb-3 text-sm font-semibold"
        >
          <div className="a-link w-[60px] border-t-2 p-0 m-0 absolute top-[45%] border-t-gray-400 group-hover:border-t-teal-400 group-hover:w-[70px]"></div>
          <p className="a-link absolute start-16 top-1 uppercase group-hover:text-teal-300 group-hover:start-20 font-2">
            about
          </p>
        </a>
        <a
          href="#experience"
          className="a-link flex relative py-4 w-[140px]  text-gray-400 group hover:text-teal-300 mb-3 text-sm font-semibold"
        >
          <div className="a-link w-[60px] border-t-2 p-0 m-0 absolute top-[45%] border-t-gray-400 group-hover:border-t-teal-400 group-hover:w-[70px]"></div>
          <p className="a-link absolute start-16 top-1 uppercase  group-hover:start-20">
            experience
          </p>
        </a>
        <a
          href="#skills"
          className="a-link flex relative py-4 w-[140px]  text-gray-400 group hover:text-teal-300 mb-3 text-sm font-semibold"
        >
          <div className="a-link w-[60px] border-t-2 p-0 m-0 absolute top-[45%] border-t-gray-400 group-hover:border-t-teal-400 group-hover:w-[70px]"></div>
          <p className="a-link absolute start-16 top-1 uppercase  group-hover:start-20">
            skills
          </p>
        </a>
        <a
          href="#projects"
          className="a-link flex relative py-4 w-[140px]  text-gray-400 group hover:text-teal-300 mb-3 text-sm font-semibold"
        >
          <div className="a-link w-[60px] border-t-2 p-0 m-0 absolute top-[45%] border-t-gray-400 group-hover:border-t-teal-400 group-hover:w-[70px]"></div>
          <p className="a-link absolute start-16 top-1 uppercase  group-hover:start-20">
            projects
          </p>
        </a>
        <a
          href="#contact"
          className="a-link flex relative py-4 w-[140px]  text-gray-400 group hover:text-teal-300 mb-3 text-sm font-semibold"
        >
          <div className="a-link w-[60px] border-t-2 p-0 m-0 absolute top-[45%] border-t-gray-400 group-hover:border-t-teal-400 group-hover:w-[70px]"></div>
          <p className="text-nowrap a-link absolute start-16 top-1 uppercase  group-hover:start-20">
            Contact me
          </p>
        </a>
      </div>
      <div className="contacts gap-x-6 hidden lg:flex relative top-12">
        <a
          className="contact"
          href="http://linkedin.com/in/ousskhayi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin
            size={"23px"}
            className="text-[#c4d0ec] hover:text-[#54d2d4]"
          />
        </a>
        <a
          className="contact"
          href="http://github.com/ousskhayi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub
            size={"23px"}
            className="text-[#c4d0ec] hover:text-[#54d2d4]"
          />
        </a>
        <a
          className="contact"
          href="http://instagram.com/ousskhayi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram
            size={"23px"}
            className="text-[#c4d0ec] hover:text-[#54d2d4]"
          />
        </a>
        <a
          className="contact"
          href="http://wa.me/+212658262886"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp
            size={"23px"}
            className="text-[#c4d0ec] hover:text-[#54d2d4]"
          />
        </a>
      </div>
    </div>
  );
});

LeftSide.displayName = "LeftSide";
