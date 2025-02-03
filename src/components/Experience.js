import React from "react";
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaCommentDots, FaTools, FaLink } from "react-icons/fa";
import { IoLogoAngular, IoLogoJavascript, IoLogoPhp } from "react-icons/io";
import { SiIonic, SiMysql, SiBootstrap } from "react-icons/si";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Trainee Software Engineer",
      company: "Igmite Solutions Pvt Ltd.",
      companyLink: "https://igmite.in/",
      duration: "Jan 2023 - Jun 2023",
      description:
        "Developed scalable web applications using Ionic, Angular, PHP, MySQL, and Bootstrap. Led the development of multiple features while ensuring seamless integration with the backend.",
      technologies: [
        { name: "Ionic", icon: <SiIonic className="tech-icon" /> },
        { name: "Angular", icon: <IoLogoAngular className="tech-icon" /> },
        { name: "MySQL", icon: <SiMysql className="tech-icon" /> },
        { name: "BootStrap", icon: <SiBootstrap className="tech-icon" /> },
        { name: "JavaScript", icon: <IoLogoJavascript className="tech-icon" /> },
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <motion.div
        className="experience-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image and Text Section */}
        <div className="experience-header">
          <img src="https://dhruvilrathod.me/assets/illustrations/ExperienceCover.svg" alt="Experience" className="experience-image" />
          <h3 className="experience-subheading">
            💼 From Corporate Giants to Creative Freelance Projects: A Journey Through Internships, Challenges, Innovation and Community Involvements
          </h3>
        </div>

        {/* Experience Section */}
        <h2 className="animate__animated animate__fadeInUp">Experience</h2>
        <p className="experience-intro">
          Below is a snapshot of my professional experience, where I have had the opportunity to work with leading technologies and contribute to meaningful projects.
        </p>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="experience-title">
                <FaBriefcase className="icon" /> {exp.title}
              </h3>
              <p className="experience-company">
                <FaBuilding className="icon" /> <strong>{exp.company}</strong> | {exp.duration}
              </p>
              <p className="experience-description">
                <FaCommentDots className="icon" /> {exp.description}
              </p>
              <p className="experience-technologies">
                <FaTools className="icon" /> <strong>Technologies: </strong>
                <span className="technologies-list">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-item">
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </span>
              </p>
              {exp.companyLink && (
                <p className="experience-company-link">
                  <FaLink className="icon" />
                  <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">
                    Visit {exp.company}
                  </a>
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
