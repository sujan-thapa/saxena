import React from 'react'
import styles from './Home.module.css'
import sujanImg from '../../assets/images/sujan.jpg';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.home}>
        <div className={styles.portrait}>
          <img className={styles.profileImg} src={sujanImg} alt="Sujan Thapa" />
        </div>
        <div className={styles.info}>
          <h1>Sujan Thapa</h1>
          <h2>About Me</h2>
          <div className={styles.myInfo}>
            <p className={styles.myInfoText}>
              I’m Sujan Thapa, a student at Loyalist College in Toronto, passionate about computer programming. I’m currently focused on mastering Data Structures and Algorithms (DSA) to strengthen my problem-solving abilities and prepare for coding challenges. I enjoy building projects, learning new technologies, and improving my skills through practical experience.
            </p>

            <p className={styles.myInfoText}>
              In addition to programming, I’m interested in traveling and exploring different cultures. I also enjoy watching football and finding inspiration in both sports and travel to stay creative and motivated in my work.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;
