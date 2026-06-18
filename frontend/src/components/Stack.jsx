/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3,
  FaPython,
  FaJava,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiSqlite,
  SiVercel,
  SiFastapi,
  SiNextdotjs,
  SiThreedotjs,
  SiGithub,
  SiVite,
} from "react-icons/si";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { RiJavascriptFill } from "react-icons/ri";
import { BiData } from "react-icons/bi";

const categories = {
  languages: [
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <RiJavascriptFill /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "SQL", icon: <BiData /> },
  ],
  frontend: [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Three.js", icon: <SiThreedotjs /> },
    { name: "GSAP", icon: <TbBrandFramerMotion /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "REST APIs", icon: <TbApi /> },
    { name: "JWT Auth", icon: <MdSecurity /> },
  ],
  database: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQLite", icon: <SiSqlite /> },
  ],
};

const tools = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Vercel", icon: <SiVercel /> },
];

const tabs = ["all", ...Object.keys(categories), "tools"];

const Stack = () => {
  const [active, setActive] = useState("all");

  const Capsule = ({ tech }) => (
    <motion.div
      whileHover={{ y: -6 }}
      className="group flex items-center gap-3 px-4 sm:px-5 py-3
        rounded-full border border-gray-700/40
        bg-gray-900/40 backdrop-blur transition-all"
    >
      <span className="text-xl text-gray-400 group-hover:text-[#27CBCB] transition-colors">
        {tech.icon}
      </span>
      <span className="text-sm sm:text-md font-medium text-gray-200">{tech.name}</span>
    </motion.div>
  );

  const displayData = active === "tools"
    ? tools
    : active === "all"
    ? null
    : categories[active];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-4 sm:px-6 md:px-8 lg:ml-65 lg:p-5 space-y-8 md:space-y-12"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#27CBCB] text-center lg:text-left">My Tech Stack</h2>
          <p className="text-[#80978F] text-base sm:text-lg mt-2 text-center lg:text-left">
            The technologies I reach for most often — each chosen with purpose
          </p>
        </div>
        <div className="w-full lg:w-60 bg-gray-900/40 backdrop-blur-sm py-4 px-5 mr-35 rounded-xl border border-gray-700/40">
          <p className="text-gray-200 text-sm italic leading-relaxed mb-3">
            &quot;Use boring tech. Build something that lasts.&quot;
          </p>
          <div className="flex items-center">
            <div className="flex-1">
              <span className="text-gray-400 text-xs font-medium">
                ~ Dan McKinley
              </span>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#27CBCB]"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start">
        {tabs.map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`relative px-3 sm:px-4 py-2 text-sm sm:text-md font-medium rounded-lg transition-all
              ${
                active === key
                  ? "text-white bg-[#27CBCB]/20"
                  : "text-gray-400 hover:text-white"
              }`}
          >
            {key}
            {active === key && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 bottom-0 h-1 w-full bg-[#27CBCB]"
              />
            )}
          </button>
        ))}
      </div>

      {active === "all" ? (
        <div className="space-y-6 md:space-y-7 max-w-5xl">
          {Object.entries(categories).map(([group, techs]) => (
            <div key={group} className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-300 uppercase tracking-wide text-center lg:text-left">
                {group}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start cursor-pointer">
                {techs.map((tech) => (
                  <Capsule key={tech.name} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start max-w-4xl"
        >
          {displayData.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Capsule tech={tech} />
            </motion.div>
          ))}
        </motion.div>
      )}

      <div className="space-y-3 sm:space-y-4">
        <p className="font-mono text-sm sm:text-md text-gray-500 text-center lg:text-left">
          {"// Tools & DevOps:"}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
          {tools.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ y: -4 }}
              className="flex items-center gap-2 px-3 sm:px-4 py-2
          rounded-lg border border-gray-700/40
          bg-gray-900/30 backdrop-blur cursor-pointer"
            >
              <span className="text-lg text-gray-400">{tech.icon}</span>
              <span className="text-sm text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Stack;
