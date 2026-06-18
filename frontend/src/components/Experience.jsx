import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Frontend AI Engineering Intern",
    company: "FlyRank AI",
    period: "Present",
    type: "current",
    responsibilities: [
      "Building AI-powered frontend applications using React, Next.js and TypeScript.",
      "Designing and implementing AI-integrated user interfaces.",
      "Collaborating with engineering teams to architect scalable AI-driven modules.",
      "Shipping production-ready user experiences.",
    ],
    accent: "from-[#27CBCB] to-[#26D868]",
    dot: "bg-[#27CBCB]",
  },
  {
    role: "Full Stack Developer Intern",
    company: "CodeAlpha",
    period: "May 2026 – July 2026",
    type: "past",
    responsibilities: [
      "Built MERN stack applications from scratch, handling both frontend and backend.",
      "Developed, tested and documented REST APIs consumed by React frontends.",
      "Implemented JWT authentication and role-based access control (RBAC).",
      "Optimized database queries and application performance across multiple projects.",
    ],
    accent: "from-violet-400 to-purple-500",
    dot: "bg-violet-400",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const Experience = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="px-4 sm:px-6 md:px-8 lg:ml-65 lg:p-5 space-y-8 md:space-y-10"
    >
      <motion.div variants={fadeUp}>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#27CBCB] text-center lg:text-left">
          Experience
        </h2>
        <p className="text-[#80978F] text-base sm:text-lg mt-2 text-center lg:text-left">
          Where I&apos;ve been working and what I&apos;ve shipped
        </p>
      </motion.div>

      <div className="relative max-w-3xl">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#27CBCB]/60 via-[#80978F]/30 to-transparent" />

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative md:pl-16 group"
            >
              {/* Timeline dot */}
              <div
                className={`hidden md:flex absolute left-3.5 top-6 w-5 h-5 rounded-full ${exp.dot} ring-4 ring-[#101318] items-center justify-center`}
              >
                <Briefcase size={10} className="text-gray-900" />
              </div>

              <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/40 p-5 sm:p-6 group-hover:border-gray-600/60 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3
                      className={`text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${exp.accent}`}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-gray-300 font-medium mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm shrink-0">
                    <Calendar size={14} />
                    <span
                      className={
                        exp.type === "current"
                          ? "text-[#27CBCB] font-medium"
                          : ""
                      }
                    >
                      {exp.period}
                    </span>
                    {exp.type === "current" && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#27CBCB] animate-pulse" />
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#27CBCB]/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
