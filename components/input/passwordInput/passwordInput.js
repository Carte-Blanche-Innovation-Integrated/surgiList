import styles from "./passwordInput.module.css";

export default ({ id, value, handleOnChange, handleEnter }) => {
  return (
    <input
      type="password"
      id={id}
      value={value}
      onChange={handleOnChange}
      placeholder={"Please enter password"}
      className={styles.input}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleEnter();
        }
      }}
    />
  );
};
