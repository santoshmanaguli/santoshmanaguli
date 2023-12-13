import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.aboutDivSection}>
        <div className={styles.aboutSection}>
          <h2>ABOUT</h2>
        </div>
        <div className={styles.aboutList}>
          <h4 style={{"padding-left": "10px", "font-weight": "500"}}>Frontend Developer</h4>
          <ul className={styles.points}>
            <li>Experience in building responsive and optimised sites</li>
            <li>Implementing UI components using frontend Frameworks</li>
            <li>
              Using css frameworks like <b>Bootstrap</b> and <b>Material UI</b>
            </li>
            <li>
              Integrating <b>GPT</b> in web apps.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
