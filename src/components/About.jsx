import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-700"
    >
      {/* Decorative Waves (top & bottom) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-16 text-gray-50 dark:text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M1200 0L0 0 0 120 1200 0z" fill="currentColor"></path>
        </svg>
      </div>

      {/* Core Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-8"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="Profile"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-purple-500 shadow-lg"
          />
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg">
            React Developer ⚡
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Hey, I’m{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              ATL
            </span>
            — a passionate front-end developer who believes the best digital
            experiences come from the perfect blend of{" "}
            <span className="font-semibold text-pink-500">design, motion</span>,
            and{" "}
            <span className="font-semibold text-purple-500">
              purposeful code
            </span>
            . My goal is to craft user interfaces that feel alive, intuitive,
            and memorable.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I specialize in building modern, high-performance interfaces using{" "}
            <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
            <strong>Framer Motion</strong>. Each project I work on focuses on
            simplicity, elegance, and the art of seamless interactivity.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Outside of coding, I’m constantly exploring new UI patterns, fine-tuning
            animations, and studying product design to understand how technology
            can emotionally connect with users. 🚀
          </p>
        </motion.div>

        {/* Skill Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 pt-6"
        >
          {[
            "React.js",
            "Tailwind CSS",
            "Framer Motion",
            "Node.js",
            "REST APIs",
            "UI/UX Design",
            "Performance Optimization",
            "Clean Architecture",
          ].map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md rounded-full px-5 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:bg-purple-100/40 dark:hover:bg-purple-900/20 transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-16 text-gray-50 dark:text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M1200 0L0 0 0 120 1200 0z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;
