import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  // Profile state
  const [profile, setProfile] = useState({
    firstName: "DurgaPrasad",
    lastName: "Kamireddi",
    title: "Full Stack Developer & Software Engineer",
    github: "https://github.com/saidurga4521",
    linkedin: "https://www.linkedin.com/in/durga-prasad-kamireddi/",
    leetcode: "https://leetcode.com/u/saikamireddi/",
    email: "your.email@example.com",
    resume: "public/DurgaPrasad2.pdf", // 👈 Add your resume file in the public folder
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-16 lg:px-32 relative">
      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center space-y-4"
      >
        <img
          src="/profile image2.jpg"
          alt="profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-purple-500 shadow-lg object-cover"
        />
      </motion.div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mt-8 space-y-4"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          {profile.firstName} {profile.lastName}
        </h1>
        <h3 className="text-xl md:text-2xl text-gray-300 font-medium">
          {profile.title}
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          Skilled Software Engineer with expertise in the{" "}
          <span className="text-purple-400 font-semibold">MERN stack</span>,{" "}
          <span className="text-purple-400 font-semibold">Python</span>, and{" "}
          <span className="text-purple-400 font-semibold">SQL</span>, solving{" "}
          <span className="text-pink-400 font-bold">450+ problems</span> on
          LeetCode. Passionate about building scalable, high-performance
          applications and exploring{" "}
          <span className="text-purple-400 font-semibold">AI with ML & DL</span>
          .
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col md:flex-row gap-4 mt-10"
      >
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold shadow-lg hover:opacity-90 transition duration-300">
          <a href="#projects">View My Work</a>
        </button>
        <button className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white font-semibold hover:bg-gray-700 transition duration-300">
          <a href="#connect">Get In Touch</a>
        </button>
        {/* ✅ Download Resume Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-semibold shadow-lg hover:opacity-90 transition duration-300">
          <a href={profile.resume} download>
            Download Resume
          </a>
        </button>
      </motion.div>

      {/* Social & Contact Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="flex mt-8 gap-6 text-3xl md:text-4xl"
      >
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href={profile.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition duration-300"
        >
          <SiLeetcode />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="hover:text-red-500 transition duration-300"
        >
          <MdEmail />
        </a>
      </motion.div>
    </div>
  );
};

export default Home;
