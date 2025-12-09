import React from 'react';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
                    Isuru <span style={{ color: 'var(--primary-color)' }}>Savindya</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Building the future with IoT, AI, and Automation.</p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                    <a href="https://www.linkedin.com/in/isuru-savindya-491589179" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ fontSize: '1.5rem', color: 'var(--text-color)' }}><FaLinkedin /></a>
                    <a href="https://www.facebook.com/isuru.s.kliz/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ fontSize: '1.5rem', color: 'var(--text-color)' }}><FaFacebook /></a>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Isuru Savindya. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
