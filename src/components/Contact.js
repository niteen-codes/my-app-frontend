import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [status, setStatus] = useState(null); // To show success or error message after submission
    const [loading, setLoading] = useState(false); // To track the loading state

    // Handle input change to update formData state
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple form validation before submission
        if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
            setStatus("Please fill in all the fields.");
            return;
        }

        setLoading(true); // Start loading

        // Simulate sending data to the backend API
        try {
            const response = await fetch('http://localhost:8080/contact/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Send the form data as JSON
            });

            if (response.ok) {
                setStatus("Email sent successfully!");
                // Clear the form data after successful submission
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    message: ''
                });
            } else {
                setStatus("Failed to send email.");
            }
        } catch (error) {
            setStatus("An error occurred while sending the email.");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <section id="contact" className="contact">
            {/* Animated Stripe */}
            <motion.div
                className="contact-stripe"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>

            <div className="container">
                {/* Animated Title */}
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Contact Me
                </motion.h2>

                <form className="contact-form" onSubmit={handleSubmit}>
                    {/* Input Fields with Animations */}
                    <motion.div
                        className="form-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </motion.div>

                    <motion.div
                        className="form-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            required
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </motion.div>

                    <motion.div
                        className="form-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="mobile"
                            required
                            placeholder="Enter your mobile number"
                            value={formData.mobile}
                            onChange={handleInputChange}
                        />
                    </motion.div>

                    <motion.div
                        className="form-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <label htmlFor="message">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            rows="5"
                            required
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="btn"
                        disabled={loading}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                </form>

                {/* Loading Spinner */}
                {loading && (
                    <div className="loading-overlay">
                        <div className="spinner"></div>
                    </div>
                )}

                {/* Status Message */}
                {status && (
                    <motion.div
                        className={`message-container ${status.includes("successfully") ? "success-message" : "error-message"}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {status}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Contact;