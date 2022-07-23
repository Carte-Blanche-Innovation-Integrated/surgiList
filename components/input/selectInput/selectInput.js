import styles from "./selectInput.module.css";

export default ({ id, fieldName, optionsList, value, handleOnChange }) => {
  return (
    <div className={styles.component}>
      <label className={styles.label} htmlFor={id}>{fieldName}</label>
      <select
        id={id}
        name={id}
        value={value ? value : optionsList[0]}
        onChange={handleOnChange}
        className={styles.select}
      >
        {optionsList.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
