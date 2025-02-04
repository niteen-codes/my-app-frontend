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
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    // Use the environment variable for API URL or hardcode if necessary
    const API_URL = process.env.REACT_APP_API_URL || 'https://my-app-backend-232q.onrender.com';

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
            setStatus("Please fill in all the fields.");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/contact/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Email sent successfully!");
                setFormData({ name: '', email: '', mobile: '', message: '' });
            } else {
                setStatus("Failed to send email.");
            }
        } catch (error) {
            setStatus("An error occurred while sending the email.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <motion.div className="contact-stripe" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, ease: "easeInOut" }}></motion.div>
            <div className="container">
                <motion.h2 className="section-title" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>Contact Me</motion.h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    {['name', 'email', 'mobile', 'message'].map((field, index) => (
                        <motion.div key={field} className="form-group" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}>
                            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                            {field === 'message' ? (
                                <textarea id={field} className="form-control" rows="5" required placeholder={`Enter your ${field}`} value={formData[field]} onChange={handleInputChange}></textarea>
                            ) : (
                                <input type={field === 'email' ? 'email' : field === 'mobile' ? 'tel' : 'text'} id={field} className="form-control" required placeholder={`Enter your ${field}`} pattern={field === 'mobile' ? "[0-9]{10}" : undefined} title={field === 'mobile' ? "Enter a valid 10-digit mobile number" : undefined} value={formData[field]} onChange={handleInputChange} />
                            )}
                        </motion.div>
                    ))}
                    <motion.button type="submit" className="btn" disabled={loading} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                </form>
                {loading && <div className="loading-overlay"><div className="spinner"></div></div>}
                {status && <motion.div aria-live="polite" className={`message-container ${status.includes("successfully") ? "success-message" : "error-message"}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>{status}</motion.div>}
            </div>
        </section>
    );
};

export default Contact;
