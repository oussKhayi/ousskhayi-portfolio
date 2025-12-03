import data from "../data.json";
import { ContactForm } from "./ContactForm";

const RightSide = () => {
  return (
    <div
      className="right-div w-full no-scroll-bar lg:pt-8 px-2 overflow-y-scroll no-scrollbar right-menu"
      id="rightDiv"
    >
      {/* About Section */}
      <div
        className="text-[#afafaf] px-2 pt-8 lg:ps-2 lg:pe-20 lg:pt-8 text-sm md:text-md"
        id="about"
      >
        <h3 className="text-2xl font-bold pb-2 capitalize text-[#c4d0ec] hover:text-[#54d2d4] cursor-pointer">
          About me
        </h3>
        <p>
          I&apos;m a{" "}
          <span className="font-extrabold text-[#54d2d4]">
            Full Stack Web Developer
          </span>{" "}
          specializing in building scalable, high-performance applications with
          the <span className="text-[#54d2d4]">Vue.js</span>, Nuxt.js, and
          Laravel. Currently at{" "}
          <span className="font-semibold text-[#54d2d4]">PIYES.COM</span>, I
          develop full-stack features with Laravel backends and Vue.js/Nuxt.js
          frontends, while implementing CI/CD pipelines and managing
          containerized environments.
        </p>
        <p className="mt-4">
          With expertise in{" "}
          <span className="text-[#54d2d4]">
            Vue.js, Nuxt.js, Laravel, MongoDB, Express.js, React.js, Next.js, Node.js
          </span>
          , and <span className="text-[#54d2d4]">PHP Laravel</span>, I&apos;ve
          delivered projects from concept to production, focusing on intuitive
          user experiences and robust backend systems. I thrive in collaborative
          agile environments, turning ideas into impactful digital products that
          blend functionality, performance, and user-centric design.
        </p>
      </div>

      {/* Experience Section */}
      <div className="md:pe-16 text-gray-400 py-8" id="experience">
        <h3 className="text-2xl font-bold capitalize text-[#c4d0ec] hover:text-[#54d2d4] cursor-pointer">
          My Experience
        </h3>
        <section className="relative top-4 p-1 w-full">
          <div className="p-1 w-full">
            <div className="mx-auto w-full md:max-w-6xl text-gray-500">
              <div className="grid gap-3">
                {data.experience.map((exp, index) => (
                  <div
                    className="relative group overflow-hidden p-4 md:p-8 rounded-xl border border-gray-800 bg-primary w-full"
                    key={index}
                  >
                    <div className="relative">
                      <h4 className="text-sm font-semibold text-[#54d2d4] capitalize">
                        {exp.title}
                      </h4>
                      <div className="mt-2 pb-2">
                        <p className="text-gray-400 group-hover:text-gray-300 text-xs">
                          {exp.description}
                        </p>
                      </div>
                      <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-gray-800">
                        <span className="py-1 px-3 inline-flex items-center gap-x-1 text-xs font-medium rounded-full bg-teal-500/10 text-teal-500 capitalize text-nowrap">
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
      <div className="md:pe-16 text-gray-400 py-8" id="skills">
        <h3 className="text-2xl font-bold capitalize text-[#c4d0ec] hover:text-[#54d2d4] cursor-pointer">
          My Skills
        </h3>
        <section className="relative top-4">
          <div className="mx-auto max-w-6xl text-gray-500">
            <div className="grid gap-3">
              {/* Frontend Skills */}
              <h4>Frontend</h4>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-3">
                {data.technologies["front-end"].map((tech, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 border border-white/15 w-fit p-4 rounded-xl"
                  >
                    <span data-text={tech.name} className="tooltip">
                      <i className={`${tech.icon} text-3xl`}></i>
                    </span>
                  </div>
                ))}
              </div>

              {/* Backend Skills */}
              <h4>Backend</h4>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-3">
                {data.technologies["back-end"].map((tech, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 border border-white/15 w-fit p-4 rounded-xl"
                  >
                    <span data-text={tech.name} className="tooltip">
                      <i className={`${tech.icon} text-3xl`}></i>
                    </span>
                  </div>
                ))}
              </div>

              {/* DevOps Skills */}
              <h4>DevOps</h4>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-3">
                {data.technologies["devops"].map((tech, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 border border-white/15 w-fit p-4 rounded-xl"
                  >
                    <span data-text={tech.name} className="tooltip">
                      <i className={`${tech.icon} text-3xl`}></i>
                    </span>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <h4>Tools</h4>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-3">
                {data.technologies["tools"].map((tech, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 border border-white/15 w-fit p-4 rounded-xl"
                  >
                    <span data-text={tech.name} className="tooltip">
                      <i className={`${tech.icon} text-3xl`}></i>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Projects Section */}
      <div className="md:pe-16 text-gray-400 py-8" id="projects">
        <h3 className="text-2xl font-bold capitalize text-[#c4d0ec] hover:text-[#54d2d4] cursor-pointer">
          My Projects
        </h3>
        <section className="relative top-4">
          <div className="mx-auto max-w-6xl text-gray-500">
            <div className="grid gap-3">
              {data.projects.map((prd, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden p-8 rounded-xl border border-gray-800 bg-primary"
                >
                  <div className="relative">
                    <h4 className="text-sm font-semibold text-[#54d2d4] capitalize">
                      {prd.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 text-xs">
                      {prd.description}
                    </p>
                    <div className="flex gap-3 py-4 border-t border-gray-200 dark:border-gray-800">
                      {prd.technologies.map((tech, dx) => (
                        <span
                          key={dx}
                          className="py-1 px-3 inline-flex items-center text-xs font-medium rounded-full bg-teal-500/10 text-teal-500 capitalize"
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
      <div className="md:pe-16 text-gray-400 py-8" id="contact">
        <h3 className="text-2xl font-bold capitalize text-[#c4d0ec] hover:text-[#54d2d4] cursor-pointer">
          Contact Me
        </h3>
        <section className="relative top-4">
          <div className="mx-auto max-w-6xl text-gray-500">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
};

export default RightSide;
