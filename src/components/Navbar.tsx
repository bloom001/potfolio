"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Shield, Cpu } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education & Certs", href: "#education" },
  { label: "Workshops", href: "#workshops" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Determine active theme on load
    const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(currentTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    }
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-panel shadow-lg"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollToSection(e, "#home")}
            className="flex items-center space-x-2 group cursor-pointer focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyber-purple to-cyber-blue shadow-md transition-transform duration-300 group-hover:scale-105">
              <Shield className="w-5 h-5 text-white animate-pulse-slow" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyber-blue via-white to-cyber-purple bg-clip-text text-transparent group-hover:text-cyber-blue transition-colors duration-300 dark:from-cyber-blue dark:via-white dark:to-cyber-purple">
              S. ASHRAF
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-cyber-blue dark:text-gray-300 dark:hover:text-cyber-blue transition-colors duration-200 focus:outline-none"
              >
                {item.label}
              </a>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200 focus:outline-none cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-cyber-green text-glow-green" />
              ) : (
                <Moon className="w-4 h-4 text-cyber-purple" />
              )}
            </button>
          </div>

          {/* Mobile menu controls */}
          <div className="flex items-center md:hidden space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200 focus:outline-none cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-cyber-green" />
              ) : (
                <Moon className="w-4 h-4 text-cyber-purple" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200 focus:outline-none cursor-pointer text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu container */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 glass-panel rounded-xl shadow-xl border border-white/10 dark:border-white/5 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className="px-3 py-2 rounded-lg text-base font-medium text-foreground hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-cyber-blue transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
