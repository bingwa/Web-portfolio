'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: 'Email',
      value: 'munyaobryan6@gmail.com',
      href: 'mailto:munyaobryan6@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/bryan-munyao-b11852309',
      href: 'https://www.linkedin.com/in/bryan-munyao-b11852309'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/bingwa',
      href: 'https://github.com/bingwa'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="min-h-screen py-32 px-6 bg-slate-900 flex items-center relative">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-heading text-white mb-8 text-center"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-400 mb-16 text-center max-w-3xl mx-auto font-body"
        >
          I'm currently open to new opportunities and collaborations. Feel free to reach out!
        </motion.p>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-heading text-white mb-8">Connect With Me</h3>
            
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-6 bg-slate-900/50 backdrop-blur-xl rounded-2xl hover:bg-slate-800/50 transition-all group"
              >
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  {method.icon}
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-body">{method.label}</p>
                  <p className="text-lg text-slate-200 group-hover:text-blue-400 transition-colors font-body">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-10 bg-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl"
          >
            <h3 className="text-2xl font-heading text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 font-body">
              <div>
                <label className="block text-slate-300 font-medium mb-3 text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-800/50 text-white rounded-2xl border border-slate-700/50 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-3 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-800/50 text-white rounded-2xl border border-slate-700/50 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-3 text-sm">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-slate-800/50 text-white rounded-2xl border border-slate-700/50 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none placeholder:text-slate-500"
                  placeholder="Your message..."
                />
              </div>
              
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-400 text-sm">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm">
                  Failed to send message. Please try again or email me directly.
                </div>
              )}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white shadow-lg shadow-white/10 rounded-xl hover:bg-white/30 hover:border-white/40 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
