import { useEffect, useState, useRef } from "react";

const sections = ["about", "experience", "stack", "projects", "education", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const latestScrollY = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const flush = () => {
      rafId.current = null;
      const currentY = latestScrollY.current;

      setScrolled(currentY > 20);

      if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
        setMobileMenuOpen(false);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    const onScroll = () => {
      latestScrollY.current = window.scrollY;
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(flush);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false); 
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const el = document.getElementById(id);
    if (!el) return;

    const NAVBAR_HEIGHT = mobileMenuOpen ? 80 : 80; 
    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 h-20
          px-4 sm:px-8 md:px-15 flex justify-between items-center font-mono
          transition-all duration-300 ease-out
          ${hidden ? "-translate-y-full" : "translate-y-0"}
          ${
            scrolled
              ? "bg-[#101318]/80 backdrop-blur border-b border-[#27CBCB]/20 shadow-[0_8px_30px_rgba(39,203,203,0.15)]"
              : "bg-transparent"
          }
        `}
      >
        <a href="#top" onClick={scrollToTop}>
          <h1 className="text-xl sm:text-2xl font-bold cursor-pointer text-gray-400 hover:text-[#27CBCB] transition-colors">
            <pre className="text-base sm:text-lg md:text-xl">&lt;/akshat&gt;</pre>
          </h1>
        </a>
        <div className="hidden md:flex items-center space-x-5 text-lg">
          {sections.map((item) => {
            const isActive = active === item;

            return (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(item, e)}
                className={`relative px-2 py-1 rounded-md transition-all duration-200
                  ${
                    isActive
                      ? "text-[#27CBCB]"
                      : "text-gray-400 hover:text-[#27CBCB]"
                  }
                `}
              >
                /{item}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#27CBCB]
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
              </a>
            );
          })}
        </div>
        <button
          className="md:hidden text-gray-400 hover:text-[#27CBCB] transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>
      <div
        className={`fixed top-0 left-0 w-full h-screen z-40 bg-[#101318]/95 backdrop-blur-md
          transition-all duration-300 ease-out md:hidden
          ${mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        <div className="h-20"></div>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] space-y-8">
          {sections.map((item) => {
            const isActive = active === item;
            return (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => scrollToSection(item, e)}
                className={`text-2xl font-mono transition-all duration-300
                  ${
                    isActive
                      ? "text-[#27CBCB] scale-110"
                      : "text-gray-400 hover:text-[#27CBCB] hover:scale-105"
                  }
                `}
              >
                /{item}
                {isActive && (
                  <span className="block mt-1 mx-auto w-1/2 h-0.5 bg-[#27CBCB] rounded-full"></span>
                )}
              </a>
            );
          })}
          <button
            className="mt-12 text-gray-400 hover:text-[#27CBCB] transition-colors text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Close Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;