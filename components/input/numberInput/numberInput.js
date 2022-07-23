import styles from "./numberInput.module.css";

export default ({ id, fieldName, placeholder, value, handleOnChange }) => {
  return (
    <div className={styles.component}>
      <label htmlFor={id} className={styles.label}>
        {fieldName}
      </label>
      <input
        type="number"
        id={id}
        name={id}
        value={value}
        onChange={(e) =>
          handleOnChange({ target: { name: id, value: Number(e.target.value) } })
        }
        placeholder={placeholder ? placeholder : 0}
        className={styles.input}
      />
    </div>
  );
};
