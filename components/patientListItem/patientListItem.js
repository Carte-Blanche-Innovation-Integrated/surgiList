import styles from "./patientListItem.module.css";

export default ({ data }) => {
  return (
    <div className={styles.item}>
      <div>
        <div className={styles.name}>
          {data?.firstName} {data?.surName}
        </div>
        <div className={styles.info}>
          {data?.mrn}.{data?.sex}.{data?.age} yrs
        </div>
      </div>
    </div>
  );
};
