import styles from "./Button.module.css";

export const Button = (props) => {

  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => window.open(props.referenceValue, "_blank")}   //eslint-disable-line
    >
      {props.value}         
    </button>
  );
};
