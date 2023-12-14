import styles from "./Hero.module.css";
import { Button } from "../Button/Button.jsx";

export const Hero = () => {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Santosh Managuli</h1>
        <p className={styles.para}>
          I’m a front-end developer with 2+ years of experience using Reactjs
          and Vuejs. Reach out if you’d like to learn more!
        </p>
        <Button
          value={"Contact Me"}
          referenceValue={"mailto:santoshmanaguli1515@gmail.com"}
        />
        <Button
          value={"Resume"}
          referenceValue={"https://docs.google.com/document/d/1THc7Fmxj7NFQYTPzXTCSUL1bcKmn5RYO/edit"}
        />
      </div>
    </section>
  );
};
