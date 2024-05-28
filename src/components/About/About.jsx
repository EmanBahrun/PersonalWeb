import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <a href="https://docs.google.com/document/d/13LY4jGdIG-GdHj7MViX8K1P-jJf0MgCyCa3U36o7w4Q/edit?usp=sharing">
          <img
            src={getImageUrl("about/resume.jpg")}
            alt="Interactive Resume Icon"
            className={styles.resumeIcon} 
          />
        </a>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3><b>Computer Science Student</b></h3>
              <p>
             I'm Eman Bahrun, a dedicated Senior Computer Science student at the University of California, Riverside. My academic journey has been marked by a deep passion for technology and a commitment to mastering a diverse set of programming skills. Proficient in Python, C, C++, Java, HTML, CSS, and JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Aspiring Software Engineer</h3>
              <p>
              I am an aspiring software engineer, deeply engaged in mastering the art of coding. My passion for technology drives my commitment to developing innovative software solutions. Through continuous learning and practical experience, I aim to make a significant impact in the tech world, pushing the boundaries of what's possible with modern software.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Hobbies</h3>
              <p>
                I love watching and playing sports. My favorite sport is Soccer and I am an Arsenal fan. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
