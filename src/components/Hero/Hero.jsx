import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <Typewriter
            options={{
              strings: ["Hi, I'm Eman"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className={styles.description}>
          I'm a Senior Computer Science Student at UC Riverside and an Aspiring Software Engineer!!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/nunit.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};
