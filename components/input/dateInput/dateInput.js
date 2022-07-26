import styles from "./dateInput.module.css";

export default ({ id, fieldName, value, handleOnChange }) => {
  return (
    <div className={styles.component}>
      <label className={styles.label} htmlFor={id}>
        {fieldName}
      </label>
      <input
        type="date"
        id={id}
        name={id}
        value={value ? value : ""}
        onChange={(e) =>
          handleOnChange({
            target: { name: id, value: e.target.value},
          })
        }
        onFocus={(e) => e.target.showPicker()}
        className={styles.input}
      />
    </div>
  );
};
