import styles from "./addPatientSectionContainer.module.css";

export default ({ id, title, children }) => {
  return (
    <>
      <div id={id} className={styles.section}>
        <div className={styles.title}>{title}</div>
        <div className={styles.children}>{children}</div>
      </div>
    </>
  );
};
