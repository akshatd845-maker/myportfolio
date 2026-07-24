import TextType from "./ui/TextType";

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const NAVBAR_HEIGHT = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

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
    <section
      id="top"
      className="pt-20 px-4 md:px-6 lg:ml-60 lg:p-5 flex flex-col mt-20 md:mt-20 space-y-4 md:space-y-6 relative"
    >
      <p className="text-sm md:text-base lg:text-lg text-gray-400 font-mono">
        <span className="text-[#27CBCB]">const</span> developer ={" "}
        <span className="text-gray-300">&quot;Akshat Dixit&quot;</span>
        ;
      </p>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
        Hi, I&apos;m Akshat Dixit
      </h2>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#80978F] leading-tight">
        <TextType
          text={[
            "Full Stack Developer.",
            "Software Development Engineer.",
            "Building scalable products.",
            "Shipping production-ready apps.",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          deletingSpeed={50}
          loop={true}
          showCursor={true}
          cursorCharacter="|"
        />
      </h2>
      <p className="text-[#80978F] text-base md:text-lg lg:text-xl mt-2 lg:mt-3 w-full lg:w-[60%]">
        Fourth-year Computer Science undergraduate with 1+ years of full-stack
        engineering experience. I build production-grade applications across
        React, Next.js frontends, Node.js/Express backends and MongoDB databases.
        Passionate about scalable systems, clean architecture, and exceptional
        user experiences.
      </p>
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mt-3">
        <button
          onClick={handleDownload}
          className="bg-[#27CBCB] px-5 py-3 sm:px-7 sm:py-3 text-gray-900 font-semibold rounded-sm
      cursor-pointer hover:scale-105 transition-transform duration-200 w-full sm:w-auto text-center"
        >
          Download Resume <span className="font-extrabold text-lg">↓</span>
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="bg-[#26D868] px-5 py-3 sm:px-7 sm:py-3 text-gray-800 font-semibold rounded-sm
      cursor-pointer hover:scale-105 transition-transform duration-200 w-full sm:w-auto text-center"
        >
          View Projects <span className="font-extrabold text-lg">→</span>
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="border border-gray-600 px-5 py-3 font-semibold cursor-pointer
      hover:bg-gray-900 transition-colors duration-200 w-full sm:w-auto text-center"
        >
          Contact Me
        </button>
      </div>
      <div className="hidden lg:block absolute left-20 top-40 opacity-10">
        <div className="text-8xl font-mono text-gray-500">{`{ }`}</div>
      </div>
      <div className="hidden md:block absolute right-10 md:right-20 lg:right-40 bottom-20 md:bottom-32 lg:bottom-40">
        <div className="flex space-x-3 opacity-20">
          <div className="w-2 h-8 bg-[#27CBCB] rounded-full animate-pulse"></div>
          <div className="w-2 h-12 bg-[#26D868] rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-6 bg-[#80978F] rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
      <div className="hidden lg:block absolute left-40 bottom-20 opacity-10">
        <svg
          className="w-24 h-24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>
      <div className="hidden sm:block absolute right-4 md:right-6 lg:right-10 top-1/3 opacity-20">
        <div className="grid grid-cols-2 gap-2">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[#27CBCB] rounded-sm"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[#26D868] rounded-sm"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[#80978F] rounded-sm"></div>
          <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-sm"></div>
        </div>
      </div>
      <div className="hidden lg:block absolute right-[10%] bottom-1/2 w-48 bg-yellow-300/95 backdrop-blur-sm py-2 px-4 rounded-2xl shadow-xl float-animation border border-yellow-400/50">
        <div className="flex justify-start mb-1">
          <div className="text-2xl text-yellow-600">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>
        <p className="text-black text-xs italic font-medium leading-relaxed">
          Design with intent. Develop with discipline.
        </p>
        <div className="mt-4 flex items-center">
          <div className="w-8 h-px bg-yellow-600 mr-3"></div>
          <span className="text-gray-800 text-xs font-semibold tracking-wide">
            CODING MANTRA
          </span>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-10 left-1/4 lg:left-1/3">
        <div className="flex flex-wrap space-x-2 opacity-30">
          <div className="font-mono text-xs md:text-sm text-gray-500">
            {"// full-stack"}
          </div>
          <div className="font-mono text-xs md:text-sm text-gray-500">
            {"// mern-stack"}
          </div>
          <div className="font-mono text-xs md:text-sm text-gray-500">
            {"// problem-solver"}
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-20 right-60 opacity-10">
        <div className="text-6xl font-bold text-gray-500">{"</>"}</div>
      </div>
    </section>
  );
};

export default Hero;
