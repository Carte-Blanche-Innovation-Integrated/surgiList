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
        value={value}
        onChange={e => handleOnChange(e.target.value)}
        placeholder={placeholder ? placeholder : "Add text"}
        className={styles.input}
      />
    </div>
  );
};
