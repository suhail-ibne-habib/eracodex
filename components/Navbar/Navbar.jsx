"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/" onClick={closeMenu}>
            <img 
              src="/logo.png" 
              alt="Eracodex Logo" 
              width={140} 
              height={40} 
              className={styles.logo}
            />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar1Active : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar2Active : ''}`}></div>
          <div className={`${styles.bar} ${isMenuOpen ? styles.bar3Active : ''}`}></div>
        </button>

        {/* Nav Links - Mobile and Desktop */}
        <div className={`${styles.navWrapper} ${isMenuOpen ? styles.navWrapperOpen : ''}`}>
          <ul className={styles.navLinks}>
            <li><Link href="#services" className={styles.link} onClick={closeMenu}>Services</Link></li>
            <li><Link href="#work" className={styles.link} onClick={closeMenu}>Work</Link></li>
            <li><Link href="#about" className={styles.link} onClick={closeMenu}>About</Link></li>
            <li className={styles.mobileOnly}>
              <a href="#book" className={styles.ctaButton} onClick={closeMenu}>Book a Call</a>
            </li>
          </ul>
        </div>

        <div className={styles.ctaContainer}>
          <a href="#book" className={styles.ctaButton}>Book a Call</a>
        </div>
      </div>
    </nav>
  );
}
