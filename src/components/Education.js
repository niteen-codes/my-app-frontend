import React from "react";
import { motion } from "framer-motion";
import { 
  FaGraduationCap, FaUniversity, FaSchool, FaCalendarAlt, 
  FaBookOpen, FaCertificate, FaBuilding 
} from "react-icons/fa"; 
import "./Education.css"; // Import the CSS file
import EducationCover from '../assets/EducationCover.svg';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications",
      institution: "Audyogik Sikshan Mandal's Institute of Management & Computer Studies, Thane",
      university: "University of Mumbai",
      year: "2021 - 2023",
      description:
        "MCA stands for Master of Computer Applications. It is a postgraduate degree that focuses on computer science and application development.",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "G.R. Patil College of Arts, Science, Commerce and B.M.S, Dombivli",
      university: "University of Mumbai",
      year: "2016 - 2019",
      description:
        "A Bachelor of Science in Information Technology (B.Sc. IT) degree program typically takes three to four years depending on the country. This degree is primarily focused on subjects such as software, databases, and networking.",
    },
  ];

  const certificationsData = [
    {
      title: "Java Full Stack Development",
      institution: "JSpiders, Thane",
      duration: "Aug 2023 - May 2024",
      description:
        "A comprehensive program covering Java, Spring Boot, Hibernate, REST APIs, frontend technologies (React.js), and database management.",
    },
    {
      title: "Cloud Computing",
      institution: "National Programme on Technology Enhanced Learning",
      duration: "Mar 2023 - May 2023",
      description:
        "Cloud computing is a technology that enables users to access and use computing resources like servers, storage, and software over the internet on a pay-as-you-go basis.",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-900 text-white">
      <div className="education-container">
        
        {/* 🎓 Education Intro Section */}
        <motion.div 
          className="degrees-intro-content"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={EducationCover}
            alt="Education Cover"
            className="degrees-intro-image"
          />
          <h2 className="degrees-intro-title">
            🎓 A Journey of Continuous Learning: Building Skills, Solving Problems, and Shaping the Future 🌟
          </h2>
        </motion.div>

        {/* Section Title: My Degrees */}
        <motion.h2
          className="education-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Degrees
        </motion.h2>

        {/* Education Entries */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="education-degree">
                <FaGraduationCap className="education-icon" /> {edu.degree}
              </h3>
              <p className="education-institution">
                <FaSchool className="education-icon" /> {edu.institution}
              </p>
              <div className="education-university">
                <FaUniversity className="education-icon" />
                <span>{edu.university}</span>
              </div>
              <p className="education-year">
                <FaCalendarAlt className="education-icon" /> {edu.year}
              </p>
              <p className="education-description">
                <FaBookOpen className="education-icon" /> {edu.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 📜 Certifications Section */}
        <motion.h2
          className="certifications-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Certifications 📜
        </motion.h2>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="certification-title">
                <FaCertificate className="certification-icon" /> {cert.title}
              </h3>
              <p className="certification-institution">
                <FaBuilding className="certification-icon" /> {cert.institution}
              </p>
              <p className="certification-duration">
                <FaCalendarAlt className="certification-icon" /> {cert.duration}
              </p>
              <p className="certification-description">
                <FaBookOpen className="certification-icon" /> {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
