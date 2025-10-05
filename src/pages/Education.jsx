import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const experiences = [
    {
      branch: "B-tech Mechanical Engineering with Minor CSE",
      college: "Acharya Nagarjuna University",
      duration: "July 2020 - July 2024 ",
      description:
        "I completed my Bachelor of Technology in Mechanical Engineering with a minor in Computer Science from Acharya Nagarjuna University. During this time, I gained strong knowledge in computer science fundamentals, including Data Structures and Algorithms, Machine Learning, and Web Development. I applied these skills in projects like a MERN Stack Social Media Platform and a Deep Learning-based Plant Disease Detection system. Overall, I built a solid foundation in programming, AI, and full-stack development, preparing me to tackle real-world technical challenges.",
      skills: ["Python", "ML", "DSA"],
      score: "8.6",
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
        Education
      </motion.h1>

      {/* Experiences List */}
      <div className="w-full max-w-5xl px-4 md:px-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col md:flex-row justify-between gap-4 md:gap-8 mb-6"
          >
            <div className="flex gap-4 items-start">
              <span className="text-4xl">💼</span>
              <div>
                <h2 className="text-xl md:text-2xl font-bold">{exp.branch}</h2>
                <p className="text-gray-300">{exp.college}</p>
                <p className="text-gray-400 text-sm">{exp.duration}</p>
                <p className="text-gray-300 text-sm">{`Score: ${exp.score} GPA`}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:w-2/3">
              <p className="text-gray-300">{exp.description}</p>
              <div className="flex gap-2 flex-wrap">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-purple-600 rounded-lg text-sm md:text-base"
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

export default Education;
