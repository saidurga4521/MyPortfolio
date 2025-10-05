import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Machine Learning",
      organization: "IBM",
      date: "April 2024",
      description:
        "Completed Machine Learning course by IBM, gaining expertise in supervised and unsupervised learning, model evaluation, and practical ML applications.",
      link: "https://drive.google.com/file/d/1aShPImQDt_HnfHQwFoHDCmNE3pT4pMl8/view?usp=drivesdk",
    },
    {
      title: "Computer Vision",
      organization: "NPTEL",
      date: "Nov 2023",
      description:
        "Completed Computer Vision course by NPTEL with 69%, learning image processing, object detection, and deep learning applications in vision tasks.",
      link: "https://drive.google.com/file/d/1m5Vgun9KdOyCN9Dc8aaLuPmxowRAFbGI/view?usp=drivesdk",
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
        Certificates & Achievements
      </motion.h1>

      {/* Certificate Cards */}
      <div className="w-full max-w-5xl px-4 md:px-0 space-y-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col md:flex-row justify-between gap-6"
          >
            {/* Left: Icon + Title */}
            <div className="flex gap-4 items-start md:w-1/4">
              <Award className="text-purple-400 w-10 h-10 flex-shrink-0" />
              <div className="flex flex-col">
                <h2 className="text-xl md:text-2xl font-bold">{cert.title}</h2>
                <p className="text-gray-300">{cert.organization}</p>
                <span className="text-gray-400 text-sm">{cert.date}</span>
              </div>
            </div>

            {/* Right: Description + Button */}
            <div className="flex flex-col gap-3 md:w-3/4">
              <p className="text-gray-300">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                className="w-max px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex items-center gap-2 text-white font-semibold shadow-md transition duration-300"
              >
                View Credential
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
