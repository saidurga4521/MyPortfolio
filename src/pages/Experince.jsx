import React from "react";
import { motion } from "framer-motion";

const Experince = () => {
  const experiences = [
    {
      role: "Freelance Fullstack Developer",
      company: "NomadSkills",
      duration: "Sep 2025 - Present",
      description:
        "Collaborating with a small team to design and develop Nomad Skills, an e-learning platform. Built and launched the landing page, which is now live.Currently developing the student portal with features like authentication and dashboards.Using technologies such as React, Node.js, Express, MongoDB, and Tailwind CSS. Gaining hands-on experience in end-to-end development, API integration, and responsive UI design.",
      skills: ["React", "NodeJS", "MongoDB", "ExpressJS"],
    },
    {
      role: "Data Science Intern",
      company: "Innomatics Research Labs",
      duration: "Feb 2023 - May 2023",
      description:
        "Built a deep learning system to detect plant diseases with 85% accuracy. Pre-processed large image datasets to improve model performance. Developed backend APIs using Flask for deployment. Enabled faster, accurate disease detection to support agriculture.",
      skills: ["Flask", "ML", "Computer Vision"],
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center mb-10 px-4 md:px-0"
      >
        Work Experience
      </motion.h1>

      {/* Experiences List */}
      <div className="w-full max-w-5xl px-4 md:px-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-6 md:gap-8 mb-6"
          >
            {/* Left Section - Role & Company */}
            <div className="flex gap-4 items-start md:w-1/3">
              <span className="text-4xl">💼</span>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-bold">{exp.role}</h2>
                <p className="text-gray-300 mt-1">{exp.company}</p>
                <p className="text-gray-400 text-sm mt-1">{exp.duration}</p>
              </div>
            </div>

            {/* Right Section - Description & Skills */}
            <div className="flex flex-col gap-4 md:w-2/3">
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              <div className="flex gap-2 flex-wrap">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-600 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experince;
