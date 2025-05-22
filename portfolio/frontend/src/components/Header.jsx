import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        {/* Logo with your name */}
        <div className={styles.logoWrapper}>
          <Link to="/" className={styles.logoLink}>
            <span className={styles.logoMark}>ST</span>
            <span className={styles.logoName}>Sujan Thapa</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link 
                to="/" 
                className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/resume" 
                className={`${styles.navLink} ${location.pathname === '/resume' ? styles.active : ''}`}
              >
                Resume
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/outreach" 
                className={`${styles.navLink} ${location.pathname === '/outreach' ? styles.active : ''}`}
              >
                Outreach
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/personal" 
                className={`${styles.navLink} ${location.pathname === '/personal' ? styles.active : ''}`}
              >
                Personal
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.mobileMenuButton} ${mobileMenuOpen ? styles.open : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ''}`}>
          <ul className={styles.mobileNavList}>
            <li className={styles.mobileNavItem}>
              <Link 
                to="/" 
                className={`${styles.mobileNavLink} ${location.pathname === '/' ? styles.active : ''}`}
              >
                Home
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link 
                to="/resume" 
                className={`${styles.mobileNavLink} ${location.pathname === '/resume' ? styles.active : ''}`}
              >
                Resume
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link 
                to="/outreach" 
                className={`${styles.mobileNavLink} ${location.pathname === '/outreach' ? styles.active : ''}`}
              >
                Outreach
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link 
                to="/personal" 
                className={`${styles.mobileNavLink} ${location.pathname === '/personal' ? styles.active : ''}`}
              >
                Personal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;