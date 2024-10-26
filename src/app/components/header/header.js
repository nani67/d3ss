'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import logo from '../../assets/logo.png';
import Image from 'next/image';

import localFont from 'next/font/local';

const glacialIndifference = localFont({
    src: "../../fonts/GlacialIndifference.woff",
    variable: "--font-glacial-indifference",
});
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add event listener on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.sticky : ''}`}>
    <div className={styles.logo} >
      <Link href="/" style={{ display: 'flex', flexDirection: 'row'}}>
        <Image src={logo} alt="Logo" width={40} height={40}/>
        <span className={`m-2 ${glacialIndifference.className} text-xl font-bold`}  style={{ display:'inline-block', color:'#FFB000' }}>D3 Software Solutions</span>
      </Link>
    </div>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem} style={{padding: '8px',}}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem} style={{padding: '8px',}}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={styles.navItem} style={{padding: '8px',}}>
          <Link href="/services">Services</Link>
        </li>
        <li className={styles.navItem} style={{padding: '8px',}}>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li className={styles.navItem} style={{ backgroundColor: '#FFB000', padding: '8px', borderRadius: '4px'}}>
          <button href="/contact">Get Started</button>
        </li>
      </ul>
    </nav>
  </header>
  );
};

export default Header;
