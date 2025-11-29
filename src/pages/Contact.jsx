
import React, { useState } from 'react';
import { LazyMotion, domAnimation, m as M } from 'framer-motion';
import Navbar from '../components/Navbar';


const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status.error) {
      setStatus({ ...status, error: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ ...status, error: 'Please fill out all fields.' });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setStatus({ ...status, error: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: '' });
    try {
      // Mock API call - replace with a real one (e.g., EmailJS, Formspree)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // On success
      setStatus({ submitting: false, submitted: true, error: '' });
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(prev => ({ ...prev, submitted: false })), 4000);
    } catch {
      // On error
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <>
      <Navbar />
      <M.main
        className="homepage-bg contact-page"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <M.h1 className="contact-title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Contact</M.h1>
        <M.p className="contact-desc" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          Feel free to reach out via the form or social links below.
        </M.p>
        <M.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            aria-label="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="contact-input min-h-[120px]"
          />
          <M.button
            type="submit"
            className="contact-btn"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
            disabled={status.submitting}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </M.button>
          {status.error && <M.div className="contact-error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{status.error}</M.div>}
          {status.submitted && <M.div className="contact-success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Thank you! I'll get back to you soon.</M.div>}
        </M.form>
        <M.div
          className="contact-socials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <M.a href="mailto:rhojon.se@gmail.com" className="contact-link" aria-label="Email" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}><span aria-hidden="true">✉️</span> Email</M.a>
          <M.a href="https://github.com/ArJae" className="contact-link" aria-label="GitHub" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}><span aria-hidden="true">🐙</span> GitHub</M.a>
          <M.a href="https://www.linkedin.com/in/ar-jae-wiz/" className="contact-link" aria-label="LinkedIn" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}><span aria-hidden="true">💼</span> LinkedIn</M.a>
        </M.div>
      </M.main>
      </>
    </LazyMotion>
  );
};

export default Contact;
