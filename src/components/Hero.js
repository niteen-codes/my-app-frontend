import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners'; // Import a spinner from react-spinners
import './Hero.css';
import FullstackDev from '../assets/FullStackDevelopment.svg';
import AppDev from '../assets/AppDevelopment.jpeg';
import UIUX from '../assets/UIUXDesign.svg';
import Database from '../assets/database-for-web-applications.webp';

const Hero = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds delay

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <motion.div
                className="loading-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="loading-content"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                >
                    <ClipLoader color="#007bff" size={50} />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Loading...
                    </motion.p>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1>Hi, I'm Niteen Jha</h1>
                    <p>
                        A passionate Full-Stack Developer specializing in building modern, responsive, and user-friendly web applications.
                    </p>
                    <div className="hero-buttons">
                        <motion.a
                            href="/projects"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="/contact"
                            className="btn btn-outline-light"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>
            </section>

            {/* What I Do Section */}
            <section className="what-i-do">
                <motion.div
                    className="container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <h2>What I Do?</h2>
                    <div className="service-cards">
                        {/* Service Card 1 */}
                        <motion.div
                            className="service-card"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
                            <div className="service-card-content">
                                <img
                                    src={FullstackDev}
                                    alt="Fullstack Development"
                                    className="service-image"
                                />
                                <div className="service-text">
                                    <h3>Fullstack Development</h3>
                                    <ul>
                                        <li>⚡ Building responsive website front-end using React, HTML, CSS, BootStrap</li>
                                        <li>⚡ Developing custom and interactive 3D websites</li>
                                        <li>⚡ Creating application backend in Java, JavaScript & Python</li>
                                        <li>⚡ Managing data safely with PostgreSQL, MongoDB, and OracleDB</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Card 2 */}
                        <motion.div
                            className="service-card"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            <div className="service-card-content">
                                <div className="service-text">
                                    <h3>UI/UX Design</h3>
                                    <ul>
                                        <li>⚡ Designing highly attractive and responsive user interface for web applications</li>
                                        <li>⚡ Customizing logo designs, creating visiting cards and virtual cards from scratch</li>
                                        <li>⚡ Creating the flow of application functionalities to optimize user experience</li>
                                    </ul>
                                </div>
                                <img
                                    src={UIUX}
                                    alt="UI/UX"
                                    className="service-image"
                                />
                            </div>
                        </motion.div>

                        {/* Service Card 3 */}
                        <motion.div
                            className="service-card"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                        >
                            <div className="service-card-content">
                            <img
                                    src={AppDev}
                                    alt="AppDev"
                                    className="service-image"
                                />
                                <div className="service-text">
                                    <h3>App Development</h3>
                                    <ul>
                                        <li>⚡ Create wireframes, prototypes, and UI/UX designs for the app.</li>
                                        <li>⚡ Ensure the app is visually appealing and user-friendly.</li>
                                        <li>⚡ Work with designers, product managers, and other developers to deliver a high-quality app.</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service Card 4 */}
                        <motion.div
                            className="service-card"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                        >
                            <div className="service-card-content">
                                <div className="service-text">
                                    <h3>Database Management</h3>
                                    <ul>
                                        <li>⚡ Design and implement database schemas based on business requirements.</li>
                                        <li>⚡ Write and optimize SQL queries, stored procedures, functions, and triggers.</li>
                                        <li>⚡ Integrate databases with applications and third-party systems.</li>
                                    </ul>
                                </div>
                                <img
                                    src={Database}
                                    alt="Database"
                                    className="service-image"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default Hero;