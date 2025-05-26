import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change and scroll
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [mobileMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${mobileMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        {/* Logo with name */}
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <span className={styles.logoMark}>ST</span>
            <span className={styles.logoText}>Sujan Thapa</span>
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
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={styles.menuIcon}></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ''}`}>
          <nav className={styles.mobileNavContent}>
            <ul className={styles.mobileNavList}>
              <li className={styles.mobileNavItem}>
                <Link 
                  to="/" 
                  className={`${styles.mobileNavLink} ${location.pathname === '/' ? styles.active : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link 
                  to="/resume" 
                  className={`${styles.mobileNavLink} ${location.pathname === '/resume' ? styles.active : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resume
                </Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link 
                  to="/outreach" 
                  className={`${styles.mobileNavLink} ${location.pathname === '/outreach' ? styles.active : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Outreach
                </Link>
              </li>
              <li className={styles.mobileNavItem}>
                <Link 
                  to="/personal" 
                  className={`${styles.mobileNavLink} ${location.pathname === '/personal' ? styles.active : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Personal
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;