import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';
import SocialIcons from '../components/SocialIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for your message! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              I'm currently open to new opportunities and collaborations. 
              Feel free to reach out through the form or my social channels.
            </p>

            <SocialIcons links={socialLinks} />
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:border-primary focus:ring-2 focus:ring-indigo-900/50 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:border-primary focus:ring-2 focus:ring-indigo-900/50 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:border-primary focus:ring-2 focus:ring-indigo-900/50 outline-none transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
