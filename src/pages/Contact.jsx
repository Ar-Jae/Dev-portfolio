import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // You can add email service integration here
  };

  return (
    <main className="homepage-bg contact-page">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-desc">Feel free to reach out via the form or social links below.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="contact-btn">Send Message</button>
        {submitted && <div className="contact-success">Thank you! I'll get back to you soon.</div>}
      </form>
      <div className="contact-socials">
        <a href="mailto:rhojon.se@gmail.com" className="contact-link" aria-label="Email"><span>✉️</span> Email</a>
        <a href="https://github.com/ArJae" className="contact-link" aria-label="GitHub"><span>🐙</span> GitHub</a>
        <a href="https://www.linkedin.com/in/ar-jae-wiz/" className="contact-link" aria-label="LinkedIn"><span>💼</span> LinkedIn</a>
      </div>
    </main>
  );
};

export default Contact;
