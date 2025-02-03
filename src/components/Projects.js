import React from 'react';
import { motion } from 'framer-motion'; // For smooth animations
import { FaReact, FaJs, FaNodeJs, FaPython, FaJava, FaCss3, FaHtml5, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiFlask, SiFirebase, SiRedux, SiMysql, SiBootstrap } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';


import './Projects.css';

const techIcons = {
    'React': <FaReact />, 'JavaScript': <FaJs />, 'Node.js': <FaNodeJs />,
    'React Native': <FaReact />, 'Firebase': <SiFirebase />, 'Redux': <SiRedux />,
    'Python': <FaPython />, 'TensorFlow': <SiTensorflow />, 'Keras': <SiKeras />,
    'Flask': <SiFlask />, 'Java': <FaJava />, 'CSS': <FaCss3 />, 'HTML': <FaHtml5 />,
    'Hibernate': <FaDatabase />, 'SQL': <SiMysql />, 'Bootstrap': <SiBootstrap />,
    'Spring Boot': (
        <img 
            src="https://cdn-icons-png.flaticon.com/512/919/919854.png" 
            alt="Spring Boot" 
            className="tech-icon-img"
        />
    ), 'Tailwind': <SiTailwindcss />,
 // Spring Boot icon
};

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Tourist Destination',
            description: 'The Tourist Destination Project is an initiative aimed at showcasing and promoting specific locations as prime tourist attractions. Its goal is to highlight the unique features, cultural significance, and natural beauty of selected destinations, making them appealing to travelers from around the world.',
            image: 'https://as2.ftcdn.net/v2/jpg/05/10/75/01/1000_F_510750167_SdgAKSuCTfwAqPW7issA7B6Ox4QbvSwi.jpg',
            link: '#', // Add actual project link
            techStack: ['React', 'JavaScript', 'CSS', 'Java', 'SQL', 'Bootstrap', 'Hibernate']
        },
        {
            id: 2,
            title: 'Fashion Factory',
            description: 'Fashion Factory is a sleek online platform offering a curated collection of stylish clothing, accessories, and fashion products. Explore the latest trends, premium items, and exclusive designs, all available for effortless shopping from the comfort of your home.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbfH9MAuSJOTgA3NRVhGZFSwbiscO6VTwWBelsoWU0j5PkUyu328GOM120K2HDz82bgA&usqp=CAU',
            link: '#', // Add actual project link
            techStack: ['React', 'SQL', 'Spring Boot','Hibernate','JavaScript','HTML','Tailwind']
        },
        {
            id: 3,
            title: 'Sellwell',
            description: 'SellWell is an e-commerce platform designed to offer a seamless shopping experience for customers seeking high-quality crockery goods. Whether you are looking for elegant dinnerware, stylish tea sets, or practical kitchen essentials, SellWell has a wide variety of products to meet all your crockery needs.',
            image: 'https://cdn.qwenlm.ai/output/42960f60-88da-42ef-a62b-48e1bfebca5c/t2i/2e24cc4d-f588-41c0-93ba-21cb9637a95a/d5e36d70-296b-4669-9593-9890cb57ac59.png',
            link: '#', // Add actual project link
            techStack: ['Java', 'Spring Boot', 'SQL', 'CSS', 'Bootstrap', 'CORS']
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.div
                    className="projects-intro"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="https://dhruvilrathod.me/assets/illustrations/ProjectsCover.svg"
                        alt="Projects Cover"
                        className="projects-intro-image"
                    />
                    <h4 className="projects-intro-description">
                        My projects leverage a diverse range of cutting-edge technology tools. I specialize in building data science solutions and seamlessly deploying them as web applications using robust cloud infrastructure.
                    </h4>
                </motion.div>

                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    My Projects
                </motion.h2>

                <motion.div
                    className="projects-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <p className="project-tech-stack">
                                    <strong>Tech Stack:</strong>
                                    <span className="tech-icons">
                                        {project.techStack.map((tech, index) => (
                                            <span key={index} className="tech-icon">
                                                {techIcons[tech]} {tech}
                                            </span>
                                        ))}
                                    </span>
                                </p>
                                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

