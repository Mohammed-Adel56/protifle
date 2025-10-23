import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiNodedotjs } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Resume Builder",
      description:
        "A modern web application that uses artificial intelligence to help users create professional resumes with smart suggestions and templates.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Next.js", "Tailwind CSS", "AI Integration"],
      icons: [SiReact, SiNextdotjs],
      liveUrl: "https://resume-builder-drab-three.vercel.app/",
      githubUrl: "#",
      featured: true,
    },

    {
      title: "E-Commerce Platform",
      description:
        "A complete e-commerce solution with responsive design, shopping cart, payment integration, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      icons: [SiReact, SiNodedotjs],
      liveUrl: "https://oshba.runasp.net/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "AlaaBer pools Website",
      description:
        "A professional website for AlaaBer Pools company with modern design, responsive layout, and interactive features.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      icons: [SiReact, SiNextdotjs],
      liveUrl: "https://alaaberpools.com/ar/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "To-Do List Application",
      description:
        "A full-stack to-do application with user authentication, task management, and real-time updates.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Node.js", "React", "MongoDB"],
      icons: [SiNodedotjs, SiReact],
      liveUrl: "https://todo-list-fmqz.vercel.app/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Responsive Landing Page",
      description:
        "A modern, responsive landing page built with React framework, featuring smooth animations and mobile-first design.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      icons: [SiReact],
      liveUrl: "https://landpage-nine-vert.vercel.app/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Responsive Landing Page",
      description:
        "A modern, responsive landing page built with React framework, featuring smooth animations and mobile-first design.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      icons: [SiReact],
      liveUrl: "https://land-page2-e49s.vercel.app/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Responsive Landing Page",
      description:
        "A modern, responsive landing page built with React framework, featuring smooth animations and mobile-first design.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      icons: [SiReact],
      liveUrl: "https://lang-page3.vercel.app/",
      githubUrl: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web
            development, mobile app development, and full-stack solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {project.icons.map((Icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="bg-white/90 backdrop-blur-sm rounded-full p-2"
                      >
                        <Icon className="text-lg text-gray-700" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
                    >
                      <FaEye className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-700 font-medium transition-colors duration-300"
                    >
                      <FaGithub className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="mr-1" />
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-700 text-sm font-medium transition-colors duration-300"
                    >
                      <FaGithub className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              I'm always open to discussing new projects and opportunities.
            </p>
            <a
              href="#contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
