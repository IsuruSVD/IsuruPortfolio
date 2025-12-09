import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Contact Info</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ fontSize: '1.5rem', color: 'var(--secondary-color)' }}><FaEnvelope /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Email</h4>
                                    <a href="mailto:isurusavindya97@gmail.com" style={{ color: 'var(--text-secondary)' }}>isurusavindya97@gmail.com</a>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ fontSize: '1.5rem', color: 'var(--secondary-color)' }}><FaPhone /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Phone</h4>
                                    <a href="tel:+94719707674" style={{ color: 'var(--text-secondary)' }}>+94 71 970 7674</a>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ fontSize: '1.5rem', color: 'var(--secondary-color)' }}><FaMapMarkerAlt /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Location</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Colombo, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <input type="text" placeholder="Name" style={{ flex: 1, padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: 'var(--text-color)', outline: 'none' }} />
                            <input type="email" placeholder="Email" style={{ flex: 1, padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: 'var(--text-color)', outline: 'none' }} />
                        </div>
                        <input type="text" placeholder="Subject" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: 'var(--text-color)', outline: 'none' }} />
                        <textarea placeholder="Message" rows="5" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: 'var(--text-color)', outline: 'none', resize: 'none' }}></textarea>
                        <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: 'fit-content' }}>
                            Send Message <FaPaperPlane />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
