import styles from "./patientList.module.css";

import Header from "../header/header";
import PatientListHeader from "../patientListHeader/patientListHeader";
import PatientListFilters from "../patientListFilters/patientListFilters";
import PatientListItem from "../patientListItem/patientListItem";
import Image from "next/image";
import notFoundImg from "../../public/images/not-found.svg";
import plusImg from "../../public/images/plus.svg";
import IconButton from "../iconButton/iconButton";

import { useState } from "react";
import { useRouter } from "next/router";

export default ({ patientList, selectedTab }) => {
  const router = useRouter();
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAdd = () => {
    let q = {};
    if (selectedTab === "weekend") {
      q = { weekendList: true };
    } else if (selectedTab === "take") {
      q = { takeList: true };
    } else if (selectedTab === "speciality") {
      if (filter) {
        q = { speciality: filter };
      }
    }

    router.push({ pathname: `/add`, query: q });
  };

  const handleEdit = () => {
    router.push(`/edit/${selectedTab}`);
  };

  return (
    <>
      <Header />
      <PatientListHeader
        selectedTab={selectedTab}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
      />
      {patientList ? (
        <main className={styles.listArea}>
          {selectedTab === "speciality" ? (
            <PatientListFilters activeFilter={filter} setFilter={setFilter} />
          ) : null}
          {patientList.map((patient, index) => {
            return <PatientListItem key={index} data={patient} />;
          })}
        </main>
      ) : (
        <div className={styles.notFound}>
          <div className={styles.imgArea}>
            <Image src={notFoundImg} width={100} height={100} />
            <div>There is no patient in this list!</div>
          </div>
          <IconButton
            iconSrc={plusImg}
            btnText={"Add Patient"}
            variant="filled"
            size="l"
            handleClick={handleAdd}
          />
        </div>
      )}
    </>
  );
};
