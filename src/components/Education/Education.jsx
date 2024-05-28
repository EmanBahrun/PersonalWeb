import React from 'react';
import styles from './Education.module.css';
import { getImageUrl } from '../../utils';

export const Education = () => {
    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                <ul className={styles.educationItems}>
                    <li className={styles.educationItem}>
                        <img src={getImageUrl("education/hat.jpg")} alt="UC Riverside logo" className={styles.eduLogo} />
                        <div className={styles.educationItemText}>
                            <h3>University of California, Riverside</h3>
                            <p>Bachelor of Science in Computer Science, GPA 3.8</p>
                            <p>Relevant coursework: Data Structures and Algorithms, Introduction to Software Engineering, Database Management, Introducation to Web Development, Artificial Intelligence</p>
                        </div>
                    </li>
                    <li className={styles.educationItem}>
                        <img src={getImageUrl("education/diploma.jpg")} alt="High School logo" className={styles.eduLogo} />
                        <div className={styles.educationItemText}>
                            <h3>Santa Monica College </h3>
                            <p>Certificate of Completion in Computer Science, GPA 3.84 </p>
                            <p>Relevant coursework: Intro to Programming, Data Structure and Algorithms, Assembly Language, Digital Logics</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
