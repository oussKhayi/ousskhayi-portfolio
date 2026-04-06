import React, { useState, useEffect } from "react";
import {
  BsLinkedin,
  BsInstagram,
  BsWhatsapp,
  BsGithub,
  BsFileEarmarkText,
} from "react-icons/bs";
import { useLanguage } from "../context/LanguageContext";
import fr_cv from "../../public/cv/fr/Oussama_KHAYI_Developpeur_FullStack_CV.pdf";
import en_cv from "../../public/cv/en/Oussama_KHAYI_FullStack_Developer_CV.pdf";

export const LeftSide = React.forwardRef((props, ref) => {
  const { data } = useLanguage();
  const curr_lang = localStorage.getItem("portfolio-lang") || "en";

  const [activeHash, setActiveHash] = useState(
    typeof window !== "undefined" ? window.location.hash || "#about" : "#about",
  );

  useEffect(() => {
    const handleHashChange = () =>
      setActiveHash(window.location.hash || "#about");
    window.addEventListener("hashchange", handleHashChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sectionIds = ["about", "experience", "skills", "projects", "contact"];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full h-fit min-h-full px-4 pt-12 md:pt-0 sm:px-8 md:px-12 lg:px-8 flex flex-col justify-center left-div"
      id="leftDiv"
    >
      <h1 className="text-[#c4d0ec] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
        {data.translations.leftSide.name}
      </h1>
      <h4 className="text-lg sm:text-xl xl:text-2xl my-3 sm:my-4 font-semibold capitalize text-gray-300">
        {data.translations.leftSide.role}
      </h4>
      <p className="text-gray-400 w-full md:w-[80%] lg:w-[90%] xl:w-[80%] lowercase text-sm sm:text-base lg:text-base xl:text-lg leading-relaxed first-letter:capitalize">
        {data.translations.leftSide.description}
      </p>
      <a
        href={curr_lang === "fr" ? fr_cv : en_cv}
        target="_blank"
        rel="noopener noreferrer"
        className="btn px-4 sm:px-6 py-2 sm:py-3 bg-secondary hover:bg-[#3eb8ba] mt-8 sm:mt-10 rounded-lg flex items-center capitalize light lightHover w-fit text-sm sm:text-base font-medium transition-colors"
      >
        {data.translations.leftSide.resumeBtn}{" "}
        <BsFileEarmarkText className="ms-2 text-lg sm:text-xl" />
      </a>
      <div className="links relative top-8 sm:top-10 hidden lg:flex flex-col gap-y-2 lg:gap-y-4">
        {[
          { id: "about", text: data.translations.leftSide.nav.about },
          { id: "experience", text: data.translations.leftSide.nav.experience },
          { id: "skills", text: data.translations.leftSide.nav.skills },
          { id: "projects", text: data.translations.leftSide.nav.projects },
          { id: "contact", text: data.translations.leftSide.nav.contact },
        ].map((item) => {
          const hash = `#${item.id}`;
          const active =
            activeHash === hash || (activeHash === "" && hash === "#about");
          return (
            <a
              key={item.id}
              href={hash}
              className={`a-link flex relative py-2 w-[140px] text-sm xl:text-base font-semibold items-center group transition-all duration-300 ${
                active ? "text-teal-300" : "text-gray-400 hover:text-teal-300"
              }`}
            >
              <div
                className={`a-link border-t-2 p-0 m-0 absolute top-[50%] transition-all duration-300 ${
                  active
                    ? "border-t-teal-400 w-[50px] xl:w-[70px]"
                    : "border-t-gray-400 w-[40px] xl:w-[60px] group-hover:border-t-teal-400 group-hover:w-[50px] xl:group-hover:w-[70px]"
                }`}
              ></div>
              <p
                className={`text-nowrap a-link absolute uppercase transition-all duration-300 ${
                  active
                    ? "text-teal-300 start-16 xl:start-24"
                    : "start-12 xl:start-20 group-hover:text-teal-300 group-hover:start-16 xl:group-hover:start-24"
                }`}
              >
                {item.text}
              </p>
            </a>
          );
        })}
      </div>
      <div className="contacts gap-x-6 hidden lg:flex mt-auto md:mt-8 lg:mt-12 xl:mt-24">
        <a
          className="contact hover:-translate-y-1 transition-transform cursor-pointer"
          href="http://linkedin.com/in/ousskhayi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin
            size={"24px"}
            className="text-[#c4d0ec] hover:text-[#54d2d4] transition-colors"
          />
        </a>
        <a
          className="contact hover:-translate-y-1 transition-transform cursor-pointer"
          href="http://github.com/ousskhayi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub
            size={"24px"}
            className="text-[#c4d0ec] hover:text-[#54d2d4] transition-colors"
          />
        </a>
        <a
          className="contact hover:-translate-y-1 transition-transform cursor-pointer"
          href="http://instagram.com/ousskhayi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram
            size={"24px"}
            className="text-[#c4d0ec] hover:text-[#54d2d4] transition-colors"
          />
        </a>
        <a
          className="contact hover:-translate-y-1 transition-transform cursor-pointer"
          href="http://wa.me/+212658262886"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp
            size={"24px"}
            className="text-[#c4d0ec] hover:text-[#54d2d4] transition-colors"
          />
        </a>
      </div>
    </div>
  );
});

LeftSide.displayName = "LeftSide";
