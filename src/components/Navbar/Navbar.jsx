import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div>
          <a href="/" className={styles.title}>
            Portfolio
          </a>
        </div>
        <div className={styles.menu}>
          <ul className={styles.menuItems}>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/experience">Experience</a>
            </li>
            <li>
              <a href="/experience">Projects</a>
            </li>
            <li>
              <a href="/experience">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
