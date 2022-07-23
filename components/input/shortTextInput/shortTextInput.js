import styles from "./shortTextInput.module.css";

export default ({ id, fieldName, placeholder, value, handleOnChange }) => {
  return (
    <div className={styles.component}>
      <label className={styles.label} htmlFor={id}>
        {fieldName}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        value={value ? value : ""}
        onChange={handleOnChange}
        placeholder={placeholder ? placeholder : "Add text"}
        className={styles.input}
      />
    </div>
  );
};
