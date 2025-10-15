import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Globe, ArrowLeft, ArrowRight } from "lucide-react";

const allProjects = [
  {
    title: "Portfolio Website",
    description: "A responsive React and Tailwind portfolio showcasing my work.",
    details:
      "Built using React, Tailwind CSS, and Framer Motion for animations. Fully responsive with reusable components.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=60",
    link: "#",
    github: "#",
    status: "live",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Admin dashboard to manage analytics, orders, and products in real time.",
    details:
      "Features real-time sales tracking, authentication, and analytics visualization with Chart.js. Full-stack integration planned with Node.js backend.",
    tech: ["React", "Node.js", "Chart.js", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=60",
    link: "#",
    github: "#",
    status: "dev",
  },
  {
    title: "AI Blog Generator",
    description: "Generate SEO-friendly blogs using AI and Next.js.",
    details:
      "Uses OpenAI API for content generation and supports tone customization. Will deploy via Vercel.",
    tech: ["Next.js", "OpenAI API", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=60",
    link: "#",
    github: "#",
    status: "dev",
  },
  {
    title: "Crypto Tracker",
    description:
      "Real-time crypto dashboard to track live prices, trends, and market stats.",
    details:
      "Built with React and Tailwind CSS, this project fetches live cryptocurrency data from CoinGecko API. Includes chart visualizations, real-time updates, and portfolio tracking. Fully responsive with a dark modern UI.",
    tech: ["React", "Tailwind", "API Integration", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=800&q=60",
    link: "#",
    github: "#",
    status: "dev",
  },
  {
    title: "Chat App",
    description: "Real-time chat app using Firebase with private rooms.",
    details:
      "Uses Firebase Auth for sign-in, Firestore for chat sync, and Tailwind for styling.",
    tech: ["React", "Firebase", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&q=60",
    link: "#",
    github: "#",
    status: "dev",
  },
  {
    title: "Task Manager",
    description: "Task management app with CRUD features and authentication.",
    details:
      "React frontend with Express/Mongo backend. LocalStorage fallback for offline support.",
    tech: ["React", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=60",
    link: "#",
    github: "#",
    status: "dev",
  },
  {
    title: "Weather Forecast App",
    description: "Weather forecasts by city or GPS location.",
    details:
      "Built using the OpenWeather API with geolocation support and forecast charts.",
    tech: ["React", "OpenWeather API", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=800&q=60",
    link: "#",
    github: "#",
    status: "dev",
  },
  {
    title: "Recipe Finder",
    description: "Recipe search with filters and favorites support.",
    details:
      "Uses Spoonacular API and local storage to save favorites. Built with React.",
    tech: ["React", "API Integration", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    link: "#",
    github: "#",
    status: "dev",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.status === filter);

  // Reset current index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Keyboard escape support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    setSelected(filteredProjects[(currentIndex + 1) % filteredProjects.length]);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
    setSelected(
      filteredProjects[
        (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
      ]
    );
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="flex justify-center gap-4 mb-10">
          {["all", "live", "dev"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500/20"
              }`}
            >
              {cat === "all"
                ? "All"
                : cat === "live"
                ? "Live ✅"
                : "Under Development 🚧"}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  setSelected(project);
                  setCurrentIndex(index);
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {project.status === "dev" && (
                  <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-md">
                    🚧 In Development
                  </span>
                )}
                {project.status === "live" && (
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-md border border-white/20">
                    Live ✅
                  </span>
                )}

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center backdrop-blur-sm">
                  <p className="text-white font-medium text-sm bg-white/10 px-4 py-2 rounded-full border border-white/20 animate-pulse">
                    🔍 View Details
                  </p>
                </div>

                <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/30 text-blue-200 text-xs font-medium px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => e.target === e.currentTarget && setSelected(null)}
            >
              <motion.div
                className="relative bg-white/10 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-white/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute -top-3 -right-3 bg-gray-800 hover:bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg shadow-md"
                >
                  &times;
                </button>

                <img
                  src={selected.image}
                  alt={selected.title}
                  className="rounded-xl w-full h-64 object-cover mb-4"
                />

                <h3 className="text-2xl font-bold text-blue-400 mb-2">
                  {selected.title}
                </h3>
                {selected.status === "dev" && (
                  <p className="text-yellow-400 font-medium mb-3">
                    🚧 Currently in development
                  </p>
                )}
                {selected.status === "live" && (
                  <p className="text-green-400 font-medium mb-3">
                    ✅ Live Project
                  </p>
                )}

                <p className="text-gray-300 mb-4">{selected.details}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition"
                  >
                    <Globe size={18} /> Live Demo
                  </a>
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-full transition"
                  >
                    <Github size={18} /> GitHub
                  </a>
                </div>

                {/* Nav Buttons */}
                <div className="absolute inset-y-0 left-2 flex items-center">
                  <button
                    onClick={prevProject}
                    className="bg-gray-800/70 hover:bg-gray-700 text-white p-2 rounded-full"
                  >
                    <ArrowLeft size={18} />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <button
                    onClick={nextProject}
                    className="bg-gray-800/70 hover:bg-gray-700 text-white p-2 rounded-full"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
