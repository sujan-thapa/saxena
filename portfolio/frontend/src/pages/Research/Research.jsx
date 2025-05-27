import React from 'react';
import styles from './Research.module.css';

const Research = () => {
    return (
        <main>
            <div className={styles.projects}>
                <h1>Some Projects</h1>
            </div>
            <div className={styles.projects}>
                <h2>Movie Recommendation System</h2>
                <p>
                    This project focuses on developing a movie recommendation system using two key techniques: collaborative filtering and content-based filtering. Collaborative filtering works by analyzing past user behavior, such as ratings or viewing history, to identify patterns and recommend movies that similar users have enjoyed.
                </p>
                <p>On the other hand, content-based filtering recommends movies based on the features of the movies themselves, such as genre, director, cast, or plot keywords. By analyzing these attributes, the system can suggest films that align with a user’s past preferences, even if other users haven’t rated them highly. Combining both collaborative filtering and content-based techniques allows the system to provide more accurate and personalized movie suggestions, taking into account both individual user behavior and the intrinsic qualities of the movies.</p>
            </div>
            <div className={styles.projects}>
                <h2>Recommendation System Using Machine Learning</h2>
                <p>
                    This project is centered around developing a movie recommendation system that utilizes two popular techniques: collaborative filtering and content-based filtering. Collaborative filtering works by analyzing user behavior, such as ratings or interactions with movies, to find similarities between users. It then recommends movies based on what users with similar tastes have liked in the past, assuming that if they enjoyed certain movies, others with comparable preferences will too.
                </p>
                <p>Content-based filtering, on the other hand, takes a different approach by focusing on the attributes of the movies themselves. This could include factors like genre, director, cast, and plot details. By understanding the features of movies a user has previously enjoyed, the system can recommend new films with similar characteristics, even if other users have not rated them highly. Combining both collaborative and content-based filtering techniques enhances the system’s ability to deliver personalized and relevant movie recommendations, tailored to individual user preferences.</p>
            </div>
            <div className={styles.projects}>
                <h2>Online Job Portal System</h2>
                <p>
                    This project involves the development of an Online Job Portal System built using the Laravel framework in PHP. The system aims to connect job seekers with potential employers, providing a platform where users can browse job listings, submit applications, and track their progress. The job portal allows candidates to create profiles, upload resumes, and apply for jobs that match their skills and experience.
                </p>
                <p>On the employer side, the platform enables companies to post job openings, review applications, and manage recruitment processes efficiently. With the power of Laravel, the system ensures a robust and secure environment, featuring intuitive user interfaces and a smooth user experience. Additionally, the portal can include features such as search filters, job alerts, and resume matching, enhancing the job-seeking experience and making the hiring process more effective. By leveraging Laravel's MVC architecture and other advanced features, this system provides a scalable and maintainable solution for connecting employers and job seekers.</p>
            </div>
        </main>
    );
};

export default Research;

/* In Research.module.css, add: */
