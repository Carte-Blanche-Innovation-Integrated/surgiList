import styles from "./groupInput.module.css";

export default ({
  id,
  fieldName,
  selValue,
  handleSelOnChange,
  selOptionsList,
  txtValue,
  handleTxtOnChange,
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
            onChange={(e) => handleSelOnChange(e.target.value)}
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
            onClick={(e) => handleTxtOnChange("")}
          >
            Clear Entry
          </button>
        </div>
      </div>
      <textarea
        id={`${id}-textarea`}
        value={txtValue}
        onChange={(e) => handleTxtOnChange(e.target.value)}
        placeholder={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
        }
        className={styles.textarea}
        rows={5}
      ></textarea>
    </div>
  );
};
