import styles from "./switchInput.module.css";

export default ({ id, fieldName, value, handleOnChange }) => {
  return (
    <div className={styles.component}>
      <label className={styles.switch}>
        <input
          className={styles.input}
          type="checkbox"
          id={id}
          value={value}
          onChange={(e) => handleOnChange(e.target.checked)}
          defaultChecked={false}
        />
        <span className={styles.slider}></span>
      </label>

      <label htmlFor={id} className={styles.label}>
        {fieldName}
      </label>
    </div>
  );
};
