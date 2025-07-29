
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';


const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill out all fields.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    // You can add email service integration here
  };

  return (
    <>
      <Navbar />
      <motion.main
        className="homepage-bg contact-page"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 className="contact-title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Contact</motion.h1>
        <motion.p className="contact-desc" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          Feel free to reach out via the form or social links below.
        </motion.p>
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ margin: '0.5rem auto', width: '100%', maxWidth: '400px', display: 'block' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ margin: '0.5rem auto', width: '100%', maxWidth: '400px', display: 'block' }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            style={{ margin: '0.5rem auto', width: '100%', maxWidth: '400px', display: 'block' }}
          />
          <motion.button type="submit" className="contact-btn" whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.03 }} style={{ margin: '1rem auto', width: '100%', maxWidth: '400px', display: 'block' }}>
            Send Message
          </motion.button>
          {error && <motion.div className="contact-success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#f87171', margin: '0.5rem auto', maxWidth: '400px', textAlign: 'center' }}>{error}</motion.div>}
          {submitted && <motion.div className="contact-success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ margin: '0.5rem auto', maxWidth: '400px', textAlign: 'center' }}>Thank you! I'll get back to you soon.</motion.div>}
        </motion.form>
        <motion.div
          className="contact-socials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a href="mailto:rhojon.se@gmail.com" className="contact-link" aria-label="Email" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}><span>✉️</span> Email</motion.a>
          <motion.a href="https://github.com/ArJae" className="contact-link" aria-label="GitHub" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}><span>🐙</span> GitHub</motion.a>
          <motion.a href="https://www.linkedin.com/in/ar-jae-wiz/" className="contact-link" aria-label="LinkedIn" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}><span>💼</span> LinkedIn</motion.a>
        </motion.div>
      </motion.main>
    </>
  );
};

export default Contact;
