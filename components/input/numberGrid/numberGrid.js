import styles from "./numberGrid.module.css";

export default ({ rows, handleOnChange }) => {
  return (
    <div key={1} className={styles.component}>
      {rows.map((row, index) => {
        return (
          <div key={index} className="row">
            {row.map((col) => {
              return (
                <div key={col.id} className="col">
                  <div className={styles.field}>
                    <label htmlFor={col.id} className={styles.label}>
                      {col.fieldName}
                    </label>
                    <input
                      type="number"
                      id={col.id}
                      value={col.value ? col.value : ""}
                      name={col.id}
                      onChange={(e) =>
                        handleOnChange({
                          target: {
                            name: col.id,
                            value: Number(e.target.value),
                          },
                        })
                      }
                      placeholder={1.0}
                      className={styles.input}
                      min={0}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
