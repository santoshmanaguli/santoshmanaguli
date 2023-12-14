import styles from "./Experience.module.css";
import arr from "../../data/history.json";

export const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2>EXPERIENCE</h2>
      <div className={styles.expItems}>
        {arr.map((i, id) => {
          return (
            <div key={id} className={styles.expRowDiv}>
              <h4>{i.role}</h4>
              <h5 style={{ fontWeight: "300" }}>{i.startDate}</h5>
              <ul className={styles.expPoints}>
                {i.experiences.map((j, ids) => {
                  return <li key={ids}>{j}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
