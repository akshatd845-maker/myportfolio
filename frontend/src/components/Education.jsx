import { motion } from "framer-motion";
import { GraduationCap, Trophy, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const certifications = [
  "Java Programming",
  "Introduction to Artificial Intelligence",
  "Microsoft Excel",
  "Deloitte Technology Job Simulation",
];

const Education = () => {
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
          Education & Achievements
        </h2>
        <p className="text-[#80978F] text-base sm:text-lg mt-2 text-center lg:text-left">
          Academic background and key milestones
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
        {/* Education Card */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/40 p-5 sm:p-6 hover:border-[#27CBCB]/30 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#27CBCB]/10 flex items-center justify-center">
              <GraduationCap size={20} className="text-[#27CBCB]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-200">Education</h3>
          </div>

          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#27CBCB] to-[#26D868]">
              B.Tech Computer Science Engineering
            </h4>
            <p className="text-gray-300 font-medium">
              Shri Ramswaroop Memorial University
            </p>
            <p className="text-gray-400 text-sm">Lucknow, India</p>
            <div className="flex flex-wrap gap-3 mt-3 pt-3 border-t border-gray-800">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-xs">Batch</span>
                <span className="text-gray-300 text-sm font-medium">2023 – 2027</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-xs">CGPA</span>
                <span className="text-[#26D868] text-sm font-semibold">6.5</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Card */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/40 p-5 sm:p-6 hover:border-[#26D868]/30 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#26D868]/10 flex items-center justify-center">
              <Trophy size={20} className="text-[#26D868]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-200">Achievements</h3>
          </div>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#27CBCB]/70 shrink-0" />
              <div>
                <p className="text-gray-300 text-sm font-medium">
                  Smart India Hackathon Participant
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  Built ML-powered crop yield prediction system
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#27CBCB]/70 shrink-0" />
              <div>
                <p className="text-gray-300 text-sm font-medium">
                  10+ Independent Full-Stack Applications
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  Spanning AI integrations, ML pipelines and real-time systems
                </p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Certifications Card — full width */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="lg:col-span-2 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/40 p-5 sm:p-6 hover:border-[#80978F]/30 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[#80978F]/10 flex items-center justify-center">
              <Award size={20} className="text-[#80978F]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-200">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {certifications.map((cert) => (
              <motion.span
                key={cert}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-2 text-xs sm:text-sm rounded-lg border border-gray-700/40 bg-gray-900/40 text-gray-300 hover:border-[#27CBCB]/40 hover:text-[#27CBCB] transition-all cursor-default"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
