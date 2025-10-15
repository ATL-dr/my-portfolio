import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Main container for smooth section layout */}
      <div className="flex flex-col items-center gap-20 md:gap-32 px-4 sm:px-6 lg:px-10 pt-24">
        
        {/* Each section is centered and slightly narrower */}
        <section className="w-full max-w-6xl rounded-3xl shadow-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 sm:p-10">
          <Hero />
        </section>

        <section className="w-full max-w-6xl rounded-3xl shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-6 sm:p-10">
          <About />
        </section>

        <section className="w-full max-w-6xl rounded-3xl shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-6 sm:p-10">
          <Projects />
        </section>

        <section className="w-full max-w-6xl rounded-3xl shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-6 sm:p-10">
          <Skills />
        </section>

        <section className="w-full max-w-6xl rounded-3xl shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-6 sm:p-10 mb-10">
          <Contact />
        </section>
      </div>

      {/* Soft footer gradient */}
      <div className="h-16 bg-gradient-to-b from-transparent to-sky-100 dark:to-gray-800 w-full rounded-t-[3rem]"></div>
    </div>
  );
}

export default App;
