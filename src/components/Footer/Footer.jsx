import styles from "./Footer.module.css";
import mail from '../../assets/mail.png'

export const Footer = () => {
  return (
    <footer className={styles.container}>
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
        <div>
          <img src={mail} alt="mail" />
          <a
            href="mailto:santoshmanaguli1515@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            santoshmanaguli1515@gmail.com
          </a>
        </div>
        <a
          href="https://linkedin.com/in/santoshmanaguli"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/santoshmanaguli
        </a>
        <a
          href="https://github.com/santoshmanaguli"
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/santoshmanaguli
        </a>
      </div>
    </footer>
  );
};
