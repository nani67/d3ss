'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import logo from '../../assets/logo.png';
import localFont from 'next/font/local';

const glacialIndifference = localFont({
    src: "../../fonts/GlacialIndifference.woff",
    variable: "--font-glacial-indifference",
});

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.sticky : ''}`}>
      <div className={styles.logo}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={logo} alt="Logo" width={40} height={40} />
          <span
            className={`${glacialIndifference.className} text-xl font-bold`}
            style={{ marginLeft: '8px', color: '#FFB000' }}
          >
            D3 Software Solutions
          </span>
        </Link>
      </div>
      {/* <button onClick={toggleMenu} className={styles.hamburger} style={{ color: '#fff'}}>
        ☰
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/">Home</Link></li>
          <li className={styles.navItem}><Link href="/portfolio">Portfolio</Link></li>
          <li className={styles.navItem}><Link href="/services">Services</Link></li>
          <li className={styles.navItem}><Link href="/contact">Contact Us</Link></li>
          <li className={`${styles.navItem} ${styles.getStarted}`} style={{ color: '#000'}}>
            <button>Get Started</button>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
