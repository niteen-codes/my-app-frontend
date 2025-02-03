import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Technology from "./components/Technology";
import Education from './components/Education';
import './index.css'; // Ensure this is included at the top


function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Hero />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/technology/:name" element={<Technology />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/education" element={<Education/>}/>
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;