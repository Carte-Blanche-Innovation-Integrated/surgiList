import styles from "./addPatient.module.css";
import PatientForm from "./addPatientForm/addPatientForm";

export default () => {

  return (
    <>
      <div className={styles.addPatient}>
        <div className={styles.addPatientTitle}>Add Patient</div>
          <PatientForm />
      </div>
    </>
  );
};
