import React from "react";
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm Santosh Managuli
        </h1>
        <p className={styles.para}>
          I’m a front-end developer with 2+ years
          of experience using Reactjs and Vuejs.
          Reach out if you’d like to learn more!
        </p>
        <a href="mailto:santoshmanaguli1515@gmail.com" className={styles.btn}>
          Contact Me
        </a>
      </div>
    </section>
  );
};