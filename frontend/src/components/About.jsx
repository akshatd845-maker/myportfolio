import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileCard from "./ui/ProfileCard";
import profileImg from "../assets/profile.png";
import profile from "../assets/passprot_size.png";
import { X, Download, ExternalLink } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const About = () => {
  const [showResume, setShowResume] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf?v=2";
    link.download = "Akshat_Dixit_Resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-4 sm:px-6 md:px-8 lg:ml-65 lg:p-5 space-y-8 lg:space-y-0 lg:space-x-8"
      >
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-full max-w-md lg:max-w-none"
        >
          <ProfileCard
            name="Akshat Dixit"
            title="Frontend AI Engineer"
            handle="akshatd845"
            status="3rd Year CS Student"
            contactText="Let's Connect"
            miniAvatarUrl={profile}
            avatarUrl={profileImg}
            showUserInfo
            enableTilt
            enableMobileTilt={false}
            location="Lucknow, India"
            linkedinUrl="https://linkedin.com/in/akshatdixit001"
          />
        </motion.div>
        <motion.div
          variants={container}
          className="flex flex-col justify-center space-y-6 md:space-y-8 w-full lg:max-w-xl lg:mr-40"
        >
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-3xl sm:text-4xl font-semibold leading-tight text-center lg:text-left"
          >
            A developer who{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#27CBCB] to-[#26D868]">
              builds things that matter
            </span>
          </motion.h2>
          <motion.div variants={fadeUp} className="relative pl-6">
            <div className="absolute left-0 top-2 w-1 h-20 bg-linear-to-b from-[#27CBCB] to-[#26D868] rounded-full" />
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Third-year Computer Science student at Shri Ramswaroop Memorial
              University, Lucknow. With{" "}
              <span className="text-[#27CBCB]">1+ years of full-stack engineering</span>{" "}
              experience, I have built applications using React, Next.js,
              Node.js, FastAPI and AI technologies.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="bg-linear-to-br from-gray-900/50 to-transparent p-4 sm:p-5 rounded-xl border border-gray-800/50"
          >
            <p className="text-[#80978F] text-sm sm:text-base leading-relaxed italic">
              &quot;I enjoy solving real-world problems and building{" "}
              <span className="text-gray-300">scalable products</span> from
              schema design to deployment. From intuitive frontends to robust
              backends — I care about the entire stack.&quot;
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-3"
          >
            <motion.h3 variants={fadeUp} className="text-lg text-[#80978F] text-center lg:text-left">
              Currently interested in
            </motion.h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {[
                "Frontend Engineering",
                "Full Stack Development",
                "AI Engineering",
                "Software Engineering",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27CBCB] mr-2" />
                  <span className="text-xs sm:text-sm text-gray-400">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowResume(true)}
            className="cursor-pointer group w-full border border-gray-700 px-6 py-3 rounded-lg hover:border-[#27CBCB] hover:text-[#27CBCB] transition-all"
          >
            <span className="flex justify-center items-center gap-2">
              View Full Resume
              <ExternalLink
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </motion.button>
        </motion.div>
      </motion.section>
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-[#101318] rounded-2xl w-full max-w-6xl h-[90vh] border border-gray-800 overflow-hidden"
            >
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-800">
                <h3 className="text-xl sm:text-2xl font-bold text-[#27CBCB]">Resume</h3>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="/Resume.pdf?v=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:px-4 sm:py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <button
                    onClick={handleDownload}
                    className="p-2 sm:px-4 sm:py-2 bg-linear-to-r from-[#27CBCB] to-[#26D868] rounded-lg cursor-pointer"
                  >
                    <Download size={18} />
                  </button>
                  <button
                    onClick={() => setShowResume(false)}
                    className="p-2 hover:bg-gray-800 rounded-lg"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>
              <iframe
                src="/Resume.pdf?v=2"
                className="w-full h-[calc(90vh-80px)] sm:h-[calc(90vh-88px)] bg-white"
                title="Akshat Dixit Resume"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
