import styles from "./patientListFilters.module.css";
import { SPECIALTIES } from "../data";
import { useEffect } from "react";

export default ({ activeFilter, setFilter }) => {
  useEffect(() => {
    setFilter(SPECIALTIES[0]);
  }, []);
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
