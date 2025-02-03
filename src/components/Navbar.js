import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false); // State for toggling navigation on small screens

    // Detect scroll to change navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle toggle of navigation menu on smaller screens
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // Close the navigation menu when a link is clicked
    const closeNav = () => {
        setIsNavOpen(false);
    };


    

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
            <Link className="navbar-brand" to="/">
    <span className="developer-name">My Portfolio</span>
</Link>  


                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNav} // Toggle navigation on click
                    aria-controls="navbarNav"
                    aria-expanded={isNavOpen ? 'true' : 'false'}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeNav}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/experience" onClick={closeNav}>Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/education" onClick={closeNav}>Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects" onClick={closeNav}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills" onClick={closeNav}>Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={closeNav}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
