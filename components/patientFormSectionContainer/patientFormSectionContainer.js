import styles from "./patientFormSectionContainer.module.css";

export default ({ id, title, children, isFirst }) => {
  return (
    <>
      <div
        id={id}
        className={`${styles.section} ${isFirst ? styles.first : ""}`}
      >
        <section className={`${styles.title} ${isFirst ? styles.first : ""}`}>
          {title}
        </section>
        <div className={styles.children}>{children}</div>
      </div>
    </>
  );
};
