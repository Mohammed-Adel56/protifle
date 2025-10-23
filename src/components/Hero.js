import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiCode, HiLightningBolt } from "react-icons/hi";

const Hero = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Mohammed-Adel56",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mohamed-adel-9018841b3/",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                👋 Hello, I'm Mohamed Adel
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
                Frontend
                <span className="block gradient-text">Developer</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Passionate about creating beautiful, responsive web applications
                with modern technologies. Specialized in React, Flutter, and
                full-stack development with 2+ years of experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#projects"
                className="btn-primary inline-flex items-center justify-center"
              >
                <HiCode className="mr-2" />
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1cqwPV8NTTkG2ALc-eB6pL6jGdUOblEKo/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <FaDownload className="mr-2" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <img
                      src="/images/photoself.jpg"
                      alt="Mohamed Adel"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Mohamed Adel
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    Frontend Developer
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <HiLightningBolt className="text-yellow-500" />
                    <span>2+ Years Experience</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce animation-delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
