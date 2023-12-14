import styles from "./Footer.module.css";
import mail from '../../assets/mail.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

export const Footer = () => {
  return (
    <section className={styles.container} id="contact">
      <div>
        <h1 className={styles.content}>Contact</h1>
        <h3
          className={`${styles.content}`}
          style={{ fontWeight: 400, marginTop: "10px" }}
        >
          Feel free to reach out!
        </h3>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.contactInfoDiv}>
          <img src={mail} alt="mail" className={styles.imgStyles} />
          <a
            href="mailto:santoshmanaguli1515@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            santoshmanaguli1515@gmail.com
          </a>
        </div>
        <div className={styles.contactInfoDiv}>
          <img src={linkedin} alt="linkedin" className={styles.imgStyles} />
          <a
            href="https://linkedin.com/in/santoshmanaguli"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/santoshmanaguli
          </a>
        </div>
        <div className={styles.contactInfoDiv}>
          <img src={github} alt="github" className={styles.imgStyles} />
          <a
            href="https://github.com/santoshmanaguli"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/santoshmanaguli
          </a>
        </div>
      </div>
    </section>
  );
};
