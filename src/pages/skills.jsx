import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaBrain, FaRobot } from "react-icons/fa";

const Skills = () => {
  const skills = {
    "Programming Languages": ["JavaScript", "Python"],
    Frontend: ["React", "Redux", "Tailwind CSS", "HTML"],
    Backend: ["NodeJs", "MongoDB", "MYSQL", "Express", "REST APIs", "Git"],
    "Computer Science Fundamentals": ["DSA", "DBMS"],
    Others: ["Machine Learning", "Deep Learning"],
  };

  const categoryIcons = {
    "Programming Languages": <FaCode className="text-purple-400 mr-2" />,
    Frontend: <FaBrain className="text-purple-400 mr-2" />,
    Backend: <FaServer className="text-purple-400 mr-2" />,
    "Computer Science Fundamentals": (
      <FaDatabase className="text-purple-400 mr-2" />
    ),
    Others: <FaRobot className="text-purple-400 mr-2" />,
  };

  return (
    <div className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center mb-10 px-4 md:px-0"
      >
        Skills & Expertise
      </motion.h1>

      {/* Skills Grid */}
      <div className="w-full max-w-5xl px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
            }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300"
          >
            <div className="flex items-center mb-3">
              {categoryIcons[category]}
              <h2 className="text-lg md:text-xl font-semibold text-purple-400">
                {category}
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 5px 15px rgba(255,0,255,0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm shadow-sm cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
