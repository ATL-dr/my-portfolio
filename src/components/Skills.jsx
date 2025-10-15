import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiVite } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-400" /> },
  { name: "Database", icon: <FaDatabase className="text-purple-400" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-center text-gray-900 dark:text-white"
    >
      {/* Animated Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
      >
        ⚙️ Skills & Technologies
      </motion.h2>

      {/* Compact Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="group flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md w-24 h-24 sm:w-28 sm:h-28 transition-all duration-300 cursor-pointer hover:shadow-sky-400/40 dark:hover:shadow-sky-500/40 hover:-translate-y-1"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {/* Floating Icon */}
            <motion.div
              className="text-3xl sm:text-4xl mb-2 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              {skill.icon}
            </motion.div>
            <p className="text-sm sm:text-base font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
