import styles from "./patientListFilters.module.css";
import { SPECIALTIES } from "../data";

export default ({ activeFilter, setFilter }) => {
  return (
    <>
      <div className={styles.filters}>
        {SPECIALTIES.map((speciality, index) => {
          return (
            <div
              key={index}
              className={`${styles.filter} ${
                activeFilter === speciality ? styles.active : null
              }`}
              onClick={() => {
                if (activeFilter === speciality) {
                  setFilter("");
                } else {
                  setFilter(speciality);
                }
              }}
            >
              {speciality}
            </div>
          );
        })}
      </div>
    </>
  );
};
