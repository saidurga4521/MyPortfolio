import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Connect = () => {
  const contacts = [
    {
      platform: "GitHub",
      username: "saidurga4521",
      icon: <Github className="w-8 h-8 text-purple-400" />,
      link: "https://github.com/saidurga4521",
    },
    {
      platform: "LinkedIn",
      username: "Durga Prasad Kamireddi",
      icon: <Linkedin className="w-8 h-8 text-blue-500" />,
      link: "https://www.linkedin.com/in/durga-prasad-kamireddi/",
    },
    {
      platform: "Email",
      username: "saikamireddi3@gmail.com",
      icon: <Mail className="w-8 h-8 text-red-400" />,
      link: "mailto:saikamireddi3@gmail.com",
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
        Let's Connect
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-5xl text-center text-gray-300 mb-10 px-4 md:px-0"
      >
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out through
        any of the platforms below!
      </motion.p>

      {/* Contact Cards */}
      <div className="w-full max-w-5xl px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">{contact.icon}</div>
            <h2 className="text-xl font-bold mb-1">{contact.platform}</h2>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400"
            >
              {contact.username}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
