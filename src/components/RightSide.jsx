import React from "react";
import { ContactForm } from "./ContactForm";
import { useLanguage } from "../context/LanguageContext";

const RightSide = React.forwardRef((props, ref) => {
  const { data } = useLanguage();
  return (
    <div
      ref={ref}
      className="right-div w-full no-scroll-bar px-4 py-8 sm:px-8 md:px-12 lg:px-8 lg:py-16 xl:px-16 overflow-y-scroll no-scrollbar right-menu"
      id="rightDiv"
    >
      {/* About Section */}
      <div
        className="text-[#afafaf] pt-4 lg:pt-0 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg leading-relaxed"
        id="about"
      >
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold pb-4 capitalize text-[#c4d0ec] hover:text-[#54d2d4] transition-colors cursor-pointer">
          {data.translations.rightSide.aboutMenu}
        </h3>
        <p
          dangerouslySetInnerHTML={{
            __html: data.translations.rightSide.aboutText1,
          }}
        ></p>
        <p
          className="mt-4 sm:mt-6"
          dangerouslySetInnerHTML={{
            __html: data.translations.rightSide.aboutText2,
          }}
        ></p>
      </div>
      {/* Experience Section */}
      <div className="text-gray-400 py-10 sm:py-12 lg:py-16" id="experience">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold pb-6 capitalize text-[#c4d0ec] hover:text-[#54d2d4] transition-colors cursor-pointer">
          {data.translations.rightSide.myExperience}
        </h3>
        <section className="relative w-full">
          <div className="w-full">
            <div className="mx-auto w-full max-w-6xl text-gray-500">
              <div className="grid gap-4 sm:gap-6">
                {data.experience.map((exp, index) => (
                  <div
                    className="relative group overflow-hidden p-5 sm:p-6 md:p-8 rounded-xl border border-gray-800 bg-primary/50 hover:bg-primary transition-colors w-full"
                    key={index}
                  >
                    <div className="relative">
                      <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-[#54d2d4] capitalize leading-snug">
                        {exp.title}
                      </h4>
                      <div className="mt-3 sm:mt-4 pb-4">
                        <p className="text-gray-400 group-hover:text-gray-300 text-sm sm:text-base leading-relaxed transition-colors">
                          {exp.description}
                        </p>
                      </div>
                      <div className="flex gap-3 -mb-2 sm:-mb-0 sm:py-4 border-t border-gray-200/10 pt-4">
                        <span className="py-1 px-3 sm:px-4 inline-flex items-center gap-x-1 text-xs sm:text-sm font-medium rounded-full bg-teal-500/10 text-teal-500 capitalize text-nowrap">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Skills Section */}
      <div className="text-gray-400 py-10 sm:py-12 lg:py-16" id="skills">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold pb-6 capitalize text-[#c4d0ec] hover:text-[#54d2d4] transition-colors cursor-pointer">
          {data.translations.rightSide.mySkills}
        </h3>
        <section className="relative">
          <div className="mx-auto max-w-6xl text-gray-500">
            <div className="grid gap-6 sm:gap-8 gap-y-10">
              {/* Frontend Skills */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-300">
                  {data.translations.rightSide.frontend}
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
                  {data.technologies["front-end"].map((tech, index) => (
                    <div
                      key={index}
                      className="bg-slate-800 border border-white/10 flex justify-center items-center p-4 sm:p-5 lg:p-6 rounded-xl hover:scale-105 hover:bg-slate-700 transition-all duration-300"
                    >
                      <div className="relative group">
                        <i className={`${tech.icon} text-4xl sm:text-5xl`}></i>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-nowrap text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-300">
                  {data.translations.rightSide.backend}
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
                  {data.technologies["back-end"].map((tech, index) => (
                    <div
                      key={index}
                      className="bg-slate-800 border border-white/10 flex justify-center items-center p-4 sm:p-5 lg:p-6 rounded-xl hover:scale-105 hover:bg-slate-700 transition-all duration-300"
                    >
                      <div className="relative group">
                        <i className={`${tech.icon} text-4xl sm:text-5xl`}></i>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-nowrap text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Skills */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-300">
                  {data.translations.rightSide.mobile}
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
                  {data.technologies["mobile"].map((tech, index) => (
                    <div
                      key={index}
                      className="bg-slate-800 border border-white/10 flex justify-center items-center p-4 sm:p-5 lg:p-6 rounded-xl hover:scale-105 hover:bg-slate-700 transition-all duration-300"
                    >
                      <div className="relative group">
                        <i className={`${tech.icon} text-4xl sm:text-5xl`}></i>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-nowrap text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DevOps Skills */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-300">
                  {data.translations.rightSide.devops}
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
                  {data.technologies["devops"].map((tech, index) => (
                    <div
                      key={index}
                      className="bg-slate-800 border border-white/10 flex justify-center items-center p-4 sm:p-5 lg:p-6 rounded-xl hover:scale-105 hover:bg-slate-700 transition-all duration-300"
                    >
                      <div className="relative group">
                        <i className={`${tech.icon} text-4xl sm:text-5xl`}></i>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-nowrap text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-gray-300">
                  {data.translations.rightSide.tools}
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
                  {data.technologies["tools"].map((tech, index) => (
                    <div
                      key={index}
                      className="bg-slate-800 border border-white/10 flex justify-center items-center p-4 sm:p-5 lg:p-6 rounded-xl hover:scale-105 hover:bg-slate-700 transition-all duration-300"
                    >
                      <div className="relative group">
                        <i className={`${tech.icon} text-4xl sm:text-5xl`}></i>
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-nowrap text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <div className="text-gray-400 py-10 sm:py-12 lg:py-16" id="projects">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold pb-6 capitalize text-[#c4d0ec] hover:text-[#54d2d4] transition-colors cursor-pointer">
          {data.translations.rightSide.myProjects}
        </h3>
        <section className="relative">
          <div className="mx-auto max-w-6xl text-gray-500">
            <div className="grid gap-4 sm:gap-6">
              {data.projects.map((prd, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden p-5 sm:p-6 md:p-8 rounded-xl border border-gray-800 bg-primary/50 hover:bg-primary transition-colors"
                >
                  <div className="relative">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-[#54d2d4] capitalize leading-snug">
                      {prd.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 text-sm sm:text-base mt-2 mb-4 leading-relaxed transition-colors">
                      {prd.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3 py-4 border-t border-gray-200/10">
                      {prd.technologies.map((tech, dx) => (
                        <span
                          key={dx}
                          className="py-1 px-3 sm:px-4 inline-flex items-center text-xs sm:text-sm font-medium rounded-full bg-teal-500/10 text-teal-500 capitalize"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div className="text-gray-400 py-10 sm:py-12 lg:py-16" id="contact">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold pb-6 capitalize text-[#c4d0ec] hover:text-[#54d2d4] transition-colors cursor-pointer">
          {data.translations.rightSide.contactMe}
        </h3>
        <section className="relative w-full">
          <div className="mx-auto w-full max-w-6xl text-gray-500">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
});

RightSide.displayName = "RightSide";

export default RightSide;
