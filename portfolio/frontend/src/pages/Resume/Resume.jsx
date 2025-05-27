import React from 'react';
import styles from './Resume.module.css';

const Resume = () => {
    return (
        <div className={styles.resume}>
            <h2>RESUME</h2>
            <p>Full Resume can be found <span><a href="https://drive.google.com/file/d/1HW-CMdmdHH3g-An5bzeCnIiOftERKvJg/view?usp=drive_link">here</a></span>.</p>
        </div>
    );
};

export default Resume;