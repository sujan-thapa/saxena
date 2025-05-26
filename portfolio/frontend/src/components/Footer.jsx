import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <div className="email">
            <h2>Email</h2>
            <p>sujann.tthapa@gmail.com</p>
        </div>
        <div className="github">
            <h2>GitHub</h2>
            <a href="https://github.com/sujan-thapa" target="_blank" rel="noopener noreferrer">
                https://github.com/sujan-thapa
            </a>
        </div>
        <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Sujan Thapa</p>
            <p>All rights reserved</p>

        </div>
    </footer>
);

export default Footer;