'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formError, setFormError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formError[name]) setFormError(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Invalid email format';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    else if (formData.message.trim().length < 10) errors.message = 'Minimum 10 characters';
    setFormError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      // simulate email sending
      await new Promise(res => setTimeout(res, 1500));
      setSubmitStatus({
        success: true,
        message: "Message sent! I'll get back to you soon."
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus({
        success: false,
        message: 'Failed to send. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 bg-gradient-to-br from-[#0f0c29] via-[#1e1b4b] to-[#24243e] text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Let's Create Impact
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Let's connect! I'm always open to discussing new projects or opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 pb-2 border-b border-gray-700/50">
              <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                Contact Info
              </span>
            </h3>

            <div className="space-y-5">
              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                <div className="p-2 bg-gray-900/50 rounded-lg border border-purple-500/20 group-hover:border-purple-400/50 transition-colors">
                  <FaMapMarkerAlt className="text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-400 text-sm">Ghaziabad, Uttar Pradesh</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                <div className="p-2 bg-gray-900/50 rounded-lg border border-purple-500/20 group-hover:border-purple-400/50 transition-colors">
                  <FaEnvelope className="text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:snehasinghaug09@gmail.com"
                    className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
                  >
                    snehasinghaug09@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4 group">
                <div className="p-2 bg-gray-900/50 rounded-lg border border-purple-500/20 group-hover:border-purple-400/50 transition-colors">
                  <FaPhone className="text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919528966514"
                    className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
                  >
                    +91 9528966514
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-3">Connect with me</h4>
              <div className="flex gap-3">
                {[
                  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/sneha-singh-b9b52723b/' },
                  { icon: <FaGithub />,   url: 'https://github.com/sneha097' },
                  { icon: <FaTwitter />,  url: '' },
                  { icon: <SiLeetcode />, url: 'https://leetcode.com/u/Sneha__9/' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-400/50 hover:text-purple-400 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full p-3 text-sm rounded-lg bg-gray-900/50 border ${
                    formError.name
                      ? 'border-red-500/80'
                      : 'border-gray-700 hover:border-purple-400/50'
                  } focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-colors`}
                />
                {formError.name && (
                  <p className="text-red-400 text-xs mt-1">{formError.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full p-3 text-sm rounded-lg bg-gray-900/50 border ${
                    formError.email
                      ? 'border-red-500/80'
                      : 'border-gray-700 hover:border-purple-400/50'
                  } focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-colors`}
                />
                {formError.email && (
                  <p className="text-red-400 text-xs mt-1">{formError.email}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`w-full p-3 text-sm rounded-lg bg-gray-900/50 border ${
                  formError.subject
                    ? 'border-red-500/80'
                    : 'border-gray-700 hover:border-purple-400/50'
                } focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-colors`}
              />
              {formError.subject && (
                <p className="text-red-400 text-xs mt-1">{formError.subject}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className={`w-full p-3 text-sm rounded-lg bg-gray-900/50 border ${
                  formError.message
                    ? 'border-red-500/80'
                    : 'border-gray-700 hover:border-purple-400/50'
                } focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-colors`}
              />
              {formError.message && (
                <p className="text-red-400 text-xs mt-1">{formError.message}</p>
              )}
            </div>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg text-sm ${
                  submitStatus.success
                    ? 'bg-green-900/20 text-green-400'
                    : 'bg-red-900/20 text-red-400'
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-purple-700 cursor-wait'
                  : 'bg-gradient-to-r from-purple-600 to-pink-300 hover:to-pink-300'
              } transition-all`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2
                      5.291A7.962 7.962 0 014 12H0c0
                      3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
