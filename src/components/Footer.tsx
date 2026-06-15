"use client";

import { Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const navHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative mt-auto border-t border-gray-200/50 dark:border-gray-800/50 bg-gray-50/30 dark:bg-black/40 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="flex items-center space-x-2 text-foreground/80">
            <Terminal className="w-4 h-4 text-cyber-blue" />
            <span className="font-mono text-sm tracking-widest font-semibold uppercase">
              // SECURE_SYSTEMS
            </span>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#about"
              onClick={(e) => handleScrollToSection(e, "about")}
              className="text-xs font-medium text-gray-500 hover:text-cyber-blue dark:text-gray-400 dark:hover:text-cyber-blue transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleScrollToSection(e, "skills")}
              className="text-xs font-medium text-gray-500 hover:text-cyber-blue dark:text-gray-400 dark:hover:text-cyber-blue transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScrollToSection(e, "projects")}
              className="text-xs font-medium text-gray-500 hover:text-cyber-blue dark:text-gray-400 dark:hover:text-cyber-blue transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#education"
              onClick={(e) => handleScrollToSection(e, "education")}
              className="text-xs font-medium text-gray-500 hover:text-cyber-blue dark:text-gray-400 dark:hover:text-cyber-blue transition-colors duration-200"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, "contact")}
              className="text-xs font-medium text-gray-500 hover:text-cyber-blue dark:text-gray-400 dark:hover:text-cyber-blue transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Right Copyright */}
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-right">
            &copy; {currentYear} Shehzibah Ashraf. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
