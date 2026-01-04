import { useEffect, useState } from "react";
import { siteConfig } from "../config";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const hasProjects = siteConfig.projects?.length > 0;
  const hasExperience = siteConfig.experience?.length > 0;
  const hasEducation = siteConfig.education?.length > 0;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="header"
      className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center"
    >
      <nav
        className={`
          px-10 py-4
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/60 backdrop-blur-xl shadow-lg border border-white/30 rounded-full"
              : "bg-transparent"
          }
        `}
      >
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#about"
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              About
            </a>
          </li>

          {hasProjects && (
            <li>
              <a
                href="#projects"
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Projects
              </a>
            </li>
          )}

          {hasExperience && (
            <li>
              <a
                href="#experience"
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Experience
              </a>
            </li>
          )}

          {hasEducation && (
            <li>
              <a
                href="#education"
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Education
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
