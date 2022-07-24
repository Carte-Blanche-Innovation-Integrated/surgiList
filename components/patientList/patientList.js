import styles from "./patientList.module.css";

import Header from "../header/header";
import PatientListHeader from "../patientListHeader/patientListHeader";
import PatientListFilters from "../patientListFilters/patientListFilters";
import PatientListItem from "../patientListItem/patientListItem";
import Image from "next/image";
import notFoundImg from "../../public/images/not-found.svg";
import plusImg from "../../public/images/plus.svg";
import IconButton from "../iconButton/iconButton";
import printImg from "../../public/images/printer.svg";
import { useReactToPrint } from "react-to-print";

import { useState, useRef } from "react";
import { useRouter } from "next/router";

export default ({ patientList, selectedTab }) => {
  const printRef = useRef(null);
  const router = useRouter();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const [filter, setFilter] = useState("");
  const [editQuery, setEditQuery] = useState("");

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
    router.push(`/update/${editQuery}?attr=mrn`);
  };

  return (
    <>
      <Header />
      <PatientListHeader
        selectedTab={selectedTab}
        handleAdd={handleAdd}
        handleEdit={handleEdit}
        setSearchValue={setEditQuery}
        searchValue={editQuery}
      />
      {patientList ? (
        <main className={styles.listArea}>
          <div
            className={`${styles.filterRow} ${
              selectedTab !== "speciality" ? "justify-content-end" : null
            }`}
          >
            {selectedTab === "speciality" ? (
              <PatientListFilters activeFilter={filter} setFilter={setFilter} />
            ) : null}

            <IconButton
              iconSrc={printImg}
              btnText={"Print list"}
              size={"l"}
              variant={"hollow"}
              handleClick={handlePrint}
            />
          </div>

          <div ref={printRef}>
            {patientList
              .filter((patient) => {
                if (selectedTab === "speciality") {
                  return patient.specialty === filter;
                }
                return true;
              })
              .map((patient, index) => {
                return <PatientListItem key={index} data={patient} />;
              })}
          </div>
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
