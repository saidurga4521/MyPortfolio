import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Social Media App",
      description:
        "This project is a social media application that allows users to interact with each other by creating and sharing posts. Users can upload content, like posts, and share their thoughts through comments. Additionally, I implemented features for profile management, enabling users to update their profile information directly. Users can also edit their previously shared posts, making the platform more dynamic and user-friendly.",
      image: "/Screenshot 2025-08-10 185248.png",
      video: "#",
      features: [
        "Comments",
        "Update Profile",
        "Add Post",
        "Like & Dislike",
        "Follow & Unfollow",
      ],
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      demoLink: "https://social-media-egdw.vercel.app/",
      codeLink: "https://github.com/saidurga4521/SocialMedia",
    },
    {
      title: "Payment Application",
      description:
        "Paysphere is a full-stack payment management system that integrates with Edviron’s payment gateway to process secure online transactions. It provides a smooth flow for initiating payments, validating responses, and tracking transaction statuses with a user-friendly dashboard.",
      image: "/Screenshot 2025-10-05 184109.png",
      video: "#",
      features: [
        "Create Payment",
        "Payment Integration",
        "Payment Tracking",
        "Admin Dashboard to see transaction details",
        "School-wise transactions",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Webhooks",
        "Redux",
        "Express.js",
      ],
      demoLink: "https://edviron-frontend-7rel.vercel.app/",
      codeLink: "https://github.com/saidurga4521/Edviron-Frontend",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    if (current < projects.length - 1) {
      setDirection(1);
      setCurrent((prev) => prev + 1);
    }
  };

  const prevProject = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((prev) => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center relative overflow-hidden">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center mb-10 px-4 md:px-0"
      >
        Featured Projects
      </motion.h1>

      {/* Project Wrapper */}
      <div className="w-full max-w-5xl px-4 md:px-0 relative flex items-center justify-center">
        {/* Left Arrow — closer to content */}
        {current > 0 && (
          <button
            onClick={prevProject}
            className="absolute left-2 sm:left-4 md:-left-6 lg:-left-10 xl:-left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 p-2 sm:p-3 rounded-full text-white shadow-lg transition duration-300 z-20"
          >
            <FaChevronLeft size={22} />
          </button>
        )}

        {/* Project Slide */}
        <div className="w-full relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-6"
            >
              {/* Image + Video Section */}
              <div className="md:w-1/3 flex flex-col gap-6">
                <img
                  src={projects[current].image}
                  alt={`${projects[current].title} homepage`}
                  className="rounded-xl w-full h-auto shadow-lg object-cover"
                />
                {projects[current].video && projects[current].video === "#" && (
                  <div className="mt-2">
                    <video
                      src={projects[current].video}
                      controls
                      className="rounded-xl w-full h-auto shadow-lg border border-gray-700"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-center mt-3"
                    >
                      <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide">
                        Project Video
                      </h3>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="flex-1 flex flex-col gap-3">
                <h2 className="text-xl md:text-2xl font-bold">
                  {projects[current].title}
                </h2>
                <p className="text-gray-300">{projects[current].description}</p>

                <div>
                  <h3 className="text-purple-400 font-semibold mb-1">
                    Key Features:
                  </h3>
                  <ul className="list-disc list-inside text-gray-300">
                    {projects[current].features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {projects[current].technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-600 rounded-full text-sm md:text-base"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <a
                    href={projects[current].demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex items-center justify-center gap-2 text-white font-semibold shadow-md transition duration-300"
                  >
                    <FaPlay /> Demo
                  </a>
                  <a
                    href={projects[current].codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center gap-2 text-white font-semibold shadow-md transition duration-300"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow — closer to content */}
        {current < projects.length - 1 && (
          <button
            onClick={nextProject}
            className="absolute right-2 sm:right-4 md:-right-6 lg:-right-10 xl:-right-12 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 p-2 sm:p-3 rounded-full text-white shadow-lg transition duration-300 z-20"
          >
            <FaChevronRight size={22} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
