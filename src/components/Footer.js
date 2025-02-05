import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Import Instagram icon
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2025 My Portfolio. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/niteen-codes" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon github-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/niteen-jha-35a594264" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="icon linkedin-icon" />
</a>

                    <a href="https://wa.me/+917977572797" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="icon whatsapp-icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="icon instagram-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
