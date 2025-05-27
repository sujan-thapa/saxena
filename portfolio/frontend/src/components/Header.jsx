import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <span>ST</span>
          <span>Sujan Thapa</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <Link to="/resume" className={`${styles.link} ${location.pathname === '/resume' && styles.active}`}>
            Resume
          </Link>
          <Link to="/research" className={`${styles.link} ${location.pathname === '/research' && styles.active}`}>
            Projects
          </Link>
          {/* <Link to="/outreach" className={`${styles.link} ${location.pathname === '/outreach' && styles.active}`}>
            Outreach
          </Link> */}
          <Link to="/personal" className={`${styles.link} ${location.pathname === '/personal' && styles.active}`}>
            Personal
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className={styles.mobileNav}>
            <Link to="/" className={styles.mobileLink} onClick={closeMenu}>
              Home
            </Link>
            <Link to="/resume" className={styles.mobileLink} onClick={closeMenu}>
              Resume
            </Link>
            <Link to="/outreach" className={styles.mobileLink} onClick={closeMenu}>
              Outreach
            </Link>
            <Link to="/personal" className={styles.mobileLink} onClick={closeMenu}>
              Personal
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;