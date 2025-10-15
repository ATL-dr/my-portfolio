import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-8 py-24 
                 bg-gradient-to-b from-gray-50 via-purple-50 to-gray-100 
                 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 
                 text-gray-900 dark:text-white transition-colors duration-700 overflow-hidden"
    >
      {/* Soft glowing orbs for depth */}
      <div className="absolute top-32 left-1/3 w-72 h-72 bg-purple-400/30 dark:bg-purple-600/20 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-pink-400/20 dark:bg-pink-700/20 blur-3xl rounded-full animate-pulse-slow"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl z-10 text-center md:text-left space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            ATL
          </span>{" "}
          👋
        </h1>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m a passionate{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            React Developer
          </span>{" "}
          who loves building beautiful, interactive, and high-performance web
          applications — blending design and functionality into meaningful user
          experiences.
        </p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3 
                     rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300"
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* Illustration / Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 mb-10 md:mb-0 md:ml-16"
      >
        <div className="relative">
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/921/921071.png"
            alt="Developer Illustration"
            className="w-64 md:w-96 drop-shadow-2xl"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
          {/* Soft glow behind the image */}
          <div className="absolute inset-0 bg-purple-400/20 dark:bg-purple-700/20 blur-3xl rounded-full -z-10"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
