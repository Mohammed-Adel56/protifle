import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt,
} from "react-icons/fa";

const Experience = () => {
  const timeline = [
    {
      year: "2024",
      title: "Frontend Developer",
      company: "Informatique Education",
      type: "Current Position",
      description:
        "Developing modern web applications and educational platforms using Vue 3 and modern web technologies. Creating responsive and interactive user interfaces for educational content.",
      icon: FaCode,
      color: "bg-blue-500",
      status: "current",
    },
    {
      year: "2023",
      title: "Freelance Developer",
      company: "Self-Employed",
      type: "Freelance",
      description:
        "Full-stack development including web applications, mobile apps with Flutter, and custom software solutions. Worked with various clients to deliver high-quality digital products.",
      icon: FaBriefcase,
      color: "bg-purple-500",
      status: "completed",
    },
    {
      year: "2022",
      title: "Mobile App Developer",
      company: "Freelance Projects",
      type: "Mobile Development",
      description:
        "Specialized in Flutter development, creating cross-platform mobile applications with beautiful UI/UX designs and smooth performance.",
      icon: FaCode,
      color: "bg-green-500",
      status: "completed",
    },
    {
      year: "2021",
      title: "Web Developer",
      company: "Freelance Projects",
      type: "Web Development",
      description:
        "Building responsive websites and web applications using modern technologies like React, Node.js, and various frontend frameworks.",
      icon: FaCode,
      color: "bg-orange-500",
      status: "completed",
    },
    {
      year: "2020",
      title: "Computer Science Graduate",
      company: "University",
      type: "Education",
      description:
        "Graduated with a degree in Computer Science, gaining strong foundation in programming, algorithms, and software development principles.",
      icon: FaGraduationCap,
      color: "bg-indigo-500",
      status: "completed",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of my professional journey, from education to current
            role, showcasing my growth and expertise in web and mobile
            development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12"
              >
                {/* Timeline Dot */}
                <div
                  className={`relative z-10 w-16 h-16 ${
                    item.color
                  } rounded-full flex items-center justify-center text-white shadow-lg ${
                    item.status === "current"
                      ? "ring-4 ring-primary-200 animate-pulse"
                      : ""
                  }`}
                >
                  <item.icon className="text-xl" />
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-primary-600 font-semibold mb-1">
                          {item.company}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <FaCalendarAlt className="mr-2" />
                          <span>{item.year}</span>
                          <span className="mx-2">•</span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              item.status === "current"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {item.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "2+", label: "Years Experience" },
            { number: "25+", label: "Projects Completed" },
            { number: "10+", label: "Mobile Apps" },
            { number: "15+", label: "Web Projects" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
