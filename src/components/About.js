import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobile, FaRocket, FaGraduationCap } from "react-icons/fa";
import { HiLightningBolt, HiUsers, HiGlobe } from "react-icons/hi";

const About = () => {
  const stats = [
    { icon: FaCode, value: "2+", label: "Years Experience" },
    { icon: FaMobile, value: "10+", label: "Mobile Apps" },
    { icon: HiGlobe, value: "15+", label: "Web Projects" },
    { icon: HiUsers, value: "5+", label: "Happy Clients" },
  ];

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Informatique Education",
      period: "Dec 2024 - Present",
      description:
        "Developing modern web applications and educational platforms using React, Next.js, and modern web technologies.",
      icon: FaCode,
      color: "bg-blue-500",
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      period: "2018 - 2023",
      description:
        "Full-stack development including web applications, mobile apps with Flutter, and custom software solutions.",
      icon: FaRocket,
      color: "bg-purple-500",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate frontend developer with expertise in creating beautiful,
            responsive web applications and mobile apps. I love turning ideas
            into reality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a Computer Science graduate with extensive experience in
              application development and software solutions. I specialize in
              Flutter development, creating high-performance mobile applications
              with smooth and modern user interfaces.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Additionally, I master Full Stack development using MERN Stack
              (MongoDB, Express.js, React, Node.js), enabling me to build
              comprehensive web applications from frontend to backend. I excel
              at transforming ideas into powerful and effective software
              products.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <HiLightningBolt className="text-yellow-500 mr-2" />
                <span className="text-sm font-medium">Fast Development</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <FaGraduationCap className="text-blue-500 mr-2" />
                <span className="text-sm font-medium">Computer Science</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <FaMobile className="text-green-500 mr-2" />
                <span className="text-sm font-medium">Mobile & Web</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary-600 text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Work Experience
          </h3>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-16 h-16 ${exp.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg`}
                >
                  <exp.icon />
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? "ml-6" : "mr-6"}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h4>
                    <p className="text-primary-600 font-semibold mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
