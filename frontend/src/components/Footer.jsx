import { Heart, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden px-4 sm:px-6 lg:ml-25">
      <div className="h-px w-full bg-linear-to-r from-transparent via-gray-800 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3 sm:gap-4"
        >
          <div className="text-center space-y-2">
            <p className="text-xs text-gray-600 max-w-md">
              Built with modern web technologies and a focus on clean and performant code
            </p>
          </div>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-sm text-gray-500"
            whileHover={{ scale: 1.05 }}
          >
            <span>Made with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-amber-500" />
            <span>by Akshat</span>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-sm">
            <a
              href="https://github.com/akshatd845-maker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-700 hidden sm:block">•</span>
            <a
              href="https://linkedin.com/in/akshatdixit001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-gray-700 hidden sm:block">•</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Scroll to top
            </button>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-row justify-center items-center mb-5">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Akshat Dixit • All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
