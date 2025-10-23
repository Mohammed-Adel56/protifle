import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaVuejs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFlutter,
  SiFirebase,
  SiVercel,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: FaReact, level: 90, color: "text-blue-500" },
        { name: "Vue.js", icon: FaVuejs, level: 95, color: "text-green-500" },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          level: 85,
          color: "text-gray-800",
        },
        { name: "JavaScript", icon: FaJs, level: 90, color: "text-yellow-500" },
        {
          name: "TypeScript",
          icon: SiTypescript,
          level: 80,
          color: "text-blue-600",
        },
        { name: "HTML5", icon: FaHtml5, level: 95, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, level: 90, color: "text-blue-400" },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          level: 85,
          color: "text-cyan-500",
        },
        {
          name: "Bootstrap",
          icon: FaBootstrap,
          level: 80,
          color: "text-purple-500",
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 85, color: "text-green-500" },
        {
          name: "Express.js",
          icon: SiExpress,
          level: 80,
          color: "text-gray-600",
        },
        {
          name: "MongoDB",
          icon: SiMongodb,
          level: 75,
          color: "text-green-600",
        },
        { name: "RESTful API", icon: FaJs, level: 85, color: "text-blue-500" },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        { name: "Flutter", icon: SiFlutter, level: 90, color: "text-blue-400" },
        {
          name: "React Native",
          icon: FaReact,
          level: 75,
          color: "text-blue-500",
        },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 85, color: "text-orange-600" },
        { name: "GitHub", icon: FaGithub, level: 80, color: "text-gray-800" },
        {
          name: "Firebase",
          icon: SiFirebase,
          level: 70,
          color: "text-yellow-500",
        },
        { name: "Vercel", icon: SiVercel, level: 75, color: "text-gray-800" },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I work with a wide range of technologies to create amazing digital
            experiences. Here are the tools and technologies I use to bring
            ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <skill.icon className={`text-2xl ${skill.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Responsive Design",
              "UI/UX Design",
              "Cross-browser Compatibility",
              "Performance Optimization",
              "SEO Optimization",
              "Agile Development",
              "Version Control",
              "API Integration",
              "Database Design",
              "Cloud Deployment",
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
