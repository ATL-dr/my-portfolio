import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-white/20 shadow-md z-50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          ATL.dev
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-800 dark:text-gray-200 font-medium">
          <li>
            <a href="#hero" className="hover:text-purple-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-500 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-purple-500 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-500 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-6 p-2 rounded-full bg-purple-100 dark:bg-gray-800 text-purple-600 dark:text-yellow-400 hover:scale-110 transition-transform duration-300 shadow-md"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
