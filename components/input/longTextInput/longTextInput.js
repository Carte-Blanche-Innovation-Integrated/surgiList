import styles from "./longTextInput.module.css";

export default ({ id, fieldName, value, handleOnChange }) => {
  return (
    <div className={styles.component}>
      <label htmlFor={id} className={styles.label}>
        {fieldName}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
        className={styles.textarea}
        placeholder={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
        rows={5}
      ></textarea>
    </div>
  );
};
