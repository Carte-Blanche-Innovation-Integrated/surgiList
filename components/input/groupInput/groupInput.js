import styles from "./groupInput.module.css";

export default ({
  id,
  fieldName,
  selValue,
  txtValue,
  selOptionsList,
  handleOnChange,
}) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {fieldName}
      </label>
      <div className={`row ${styles.two}`}>
        <div className="col-9">
          <select
            id={id}
            name={id}
            value={selValue}
            onChange={handleOnChange}
            className={styles.select}
          >
            {selOptionsList.map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-3">
          <button
            className={styles.button}
            onClick={(e) =>
              handleOnChange({ target: { name: `${id}Detail`, value: "" } })
            }
          >
            Clear Entry
          </button>
        </div>
      </div>
      <textarea
        id={`${id}Detail`}
        name={`${id}Detail`}
        value={txtValue ? txtValue : ""}
        onChange={handleOnChange}
        placeholder={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        }
        className={styles.textarea}
        rows={5}
      ></textarea>
    </div>
  );
};
