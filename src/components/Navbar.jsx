import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Services', to: 'services' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                background: scrolled ? 'var(--nav-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                transition: 'background 0.3s, padding 0.3s',
                padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: scrolled ? 'var(--shadow)' : 'none',
            }}
        >
            <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                    src="/profile.jpg"
                    alt="Profile"
                    style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        objectPosition: 'center 20%',
                        border: '2px solid var(--primary-color)',
                    }}
                />
                <span>Isuru<span style={{ color: 'var(--text-color)' }}>Savindya</span></span>
            </div>

            <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', marginRight: '1rem', borderRight: '1px solid var(--border-color)', paddingRight: '1.5rem' }}>
                    <a href="mailto:isurusavindya97@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <FaEnvelope style={{ color: 'var(--primary-color)' }} /> isurusavindya97@gmail.com
                    </a>
                    <a href="tel:+94719707674" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <FaPhone style={{ color: 'var(--primary-color)' }} /> +94 71 970 7674
                    </a>
                </div>
                <ul style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                style={{ cursor: 'pointer', fontWeight: 500, transition: 'color 0.3s' }}
                                className="nav-link"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ThemeToggle />
            </div>

            <div className="mobile-menu-icon" onClick={toggleMenu} style={{ display: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-color)' }}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            background: 'var(--nav-bg)',
                            backdropFilter: 'blur(10px)',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            boxShadow: 'var(--shadow)',
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={toggleMenu}
                                style={{ cursor: 'pointer', fontSize: '1.2rem', fontWeight: 500 }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <ThemeToggle />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
