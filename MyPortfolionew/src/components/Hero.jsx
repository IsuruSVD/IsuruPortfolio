import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
    // SVG Path variants for animation
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '80px', // For navbar
            }}
        >
            {/* Glowing Connections SVG Overlay */}
            <svg
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            >
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Left Line to LinkedIn/Facebook */}
                <motion.path
                    d="M 50% 30% L 30% 30% L 30% 60% L 40% 60%"
                    fill="transparent"
                    stroke="var(--primary-color)"
                    strokeWidth="2"
                    filter="url(#glow)"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ vectorEffect: 'non-scaling-stroke' }} // Keeps stroke width constant on resize if viewBox was used, but here we use %
                />
                {/* Right Line to Contact */}
                <motion.path
                    d="M 50% 30% L 70% 30% L 70% 70% L 60% 70%"
                    fill="transparent"
                    stroke="var(--primary-color)"
                    strokeWidth="2"
                    filter="url(#glow)"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.5 }}
                />

                {/* Connection Nodes */}
                <circle cx="30%" cy="30%" r="4" fill="var(--primary-color)" filter="url(#glow)" />
                <circle cx="70%" cy="30%" r="4" fill="var(--primary-color)" filter="url(#glow)" />
                <circle cx="30%" cy="60%" r="4" fill="var(--primary-color)" filter="url(#glow)" />
                <circle cx="70%" cy="70%" r="4" fill="var(--primary-color)" filter="url(#glow)" />

            </svg>

            <div className="container" style={{ zIndex: 1, textAlign: 'center', position: 'relative' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ marginBottom: '2rem', position: 'relative', display: 'inline-block' }}>
                        <img
                            src="/profile.jpg"
                            alt="Isuru Savindya"
                            style={{
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                objectPosition: 'center 20%',
                                border: '4px solid var(--primary-color)',
                                boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
                                position: 'relative',
                                zIndex: 2,
                                background: '#000' // Ensure image has bg if transparent
                            }}
                        />
                        {/* Connecting dots on image border */}
                        <div style={{ position: 'absolute', top: '50%', left: '-10px', width: '10px', height: '10px', background: 'var(--primary-color)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary-color)' }}></div>
                        <div style={{ position: 'absolute', top: '50%', right: '-10px', width: '10px', height: '10px', background: 'var(--primary-color)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary-color)' }}></div>
                    </div>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Hello, I'm</h2>
                    <h1 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.1 }}>
                        Isuru <span style={{ color: 'var(--primary-color)' }}>Savindya</span>
                    </h1>
                    <h3 style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Electronics & Network Engineer | Founder @ TechknowLK
                    </h3>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                        <FaMapMarkerAlt />
                        <span>Colombo, Sri Lanka</span>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
                        <a href="https://www.linkedin.com/in/isuru-savindya-491589179" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2rem', color: 'var(--text-color)', transition: 'color 0.3s' }} className="social-icon">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/isuru.s.kliz/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '2rem', color: 'var(--text-color)', transition: 'color 0.3s' }} className="social-icon">
                            <FaFacebook />
                        </a>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center', marginBottom: '3rem' }}>
                        <a href="mailto:isurusavindya97@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--text-color)', transition: 'color 0.3s', textDecoration: 'none' }} className="contact-link">
                            <FaEnvelope style={{ color: 'var(--primary-color)' }} /> isurusavindya97@gmail.com
                        </a>
                        <a href="tel:+94719707674" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--text-color)', transition: 'color 0.3s', textDecoration: 'none' }} className="contact-link">
                            <FaPhone style={{ color: 'var(--primary-color)' }} /> +94 71 970 7674
                        </a>
                    </div>

                    <motion.a
                        href="#" // Placeholder for CV
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download CV
                    </motion.a>
                </motion.div>
            </div >
        </section >
    );
};

export default Hero;
