import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', textAlign: 'center' }}>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: '1.8', color: 'var(--text-secondary)' }}
                    >
                        I am a <strong style={{ color: 'var(--primary-color)' }}>Tech Entrepreneur</strong> and the Founder of <strong style={{ color: 'var(--secondary-color)' }}>TechknowLK</strong>, driven by a relentless passion for innovation. My journey is defined by a deep expertise in <strong style={{ color: 'var(--accent-color)' }}>IoT, Automation, Electronics, and Software Development</strong>.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: '1.8', color: 'var(--text-secondary)' }}
                    >
                        With a hands-on approach to solving real-world problems, I specialize in bridging the gap between hardware and software. From designing complex embedded systems and industrial automation solutions to building scalable mobile apps and cloud integrations, I thrive on creating technology that makes a difference.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: '1.8', color: 'var(--text-secondary)' }}
                    >
                        Whether it's networking, hardware troubleshooting, or AI-based smart systems, I bring a creative engineering mindset to every project. My goal is simple: to build the future, one circuit and line of code at a time.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default About;
