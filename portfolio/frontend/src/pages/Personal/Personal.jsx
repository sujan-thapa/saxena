import React from 'react';
import styles from './Personal.module.css';
import football1 from '../../assets/images/personal/football1.png';
import football2 from '../../assets/images/personal/football2.jpg';
import travel1 from '../../assets/images/personal/manakamana.jpg';
import travel2 from '../../assets/images/personal/trishuli.jpg';

const Personal = () => {
    return (
        <main className={styles.main}>
            <div className={styles.leisureInfo}>
                <h1>Personal</h1>
                <p>What I love to do?</p>
            </div>
            <div className={styles.boundary}>

            </div>
            <div className={styles.loveOne}>
                <div>
                    <h2>Football</h2>
                    <p>I am a big fan of football. I enjoy watching matches, following my favorite teams, and playing the sport whenever I get the chance. Football inspires me with its teamwork, strategy, and passion.</p>

                </div>
                <div>
                    <img className={styles.images} src={football1} alt="Football1" />
                    <img className={styles.images} src={football2} alt="Football2" />
                </div>

            </div>
            <div className={styles.loveTwo}>
                <div>
                <h2>Traveling</h2>
                <p>I love to travel and explore new places. Traveling allows me to experience different cultures, meet new people, and gain fresh perspectives.</p>
                </div>
                <div>
                    <img className={styles.images} src={travel1} alt="Traveling1" />
                    <img className={styles.images} src={travel2} alt="Traveling2" />
                </div>
            </div>
        </main>

    );
};

export default Personal;