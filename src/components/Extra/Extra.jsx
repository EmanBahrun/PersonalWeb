
import { getImageUrl } from '../../utils';
import React from 'react';
import styles from './Extra.module.css';

export const Extra = () => {
    return (
        <section className={styles.container} id="extracurriculars">
            <h2 className={styles.title}>Extracurricular Activities</h2>
            <div className={styles.content}>
                <ul className={styles.activityItems}>
                    <li className={styles.activityItem}>
                        <div className={styles.activityItemText}>
                            <h3>National Society of Black Engineers</h3>
                            <p>Communication Chair (2022-2023)</p>
                            <p>Treasurer (2023-2024)</p>
                        </div>
                    </li>
                    <li className={styles.activityItem}>
                        <div className={styles.activityItemText}>
                            <h3>East African Student Association</h3>
                            <p>Outreach Chair (2022-2023)</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
