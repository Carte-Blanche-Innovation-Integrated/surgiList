import styles from "./patientListHeader.module.css";
import IconButton from "../iconButton/iconButton";
import plusImg from "../../public/images/plus.svg";
import editImg from "../../public/images/edit.svg";
import SearchButton from "../searchButton/searchButton";
import Link from "next/link";

export default ({
  selectedTab,
  handleAdd,
  searchValue,
  setSearchValue,
  handleEdit,
}) => {
  const links = [
    {
      id: "take",
      name: "Take List",
      href: "/",
    },
    {
      id: "weekend",
      name: "Weekend List",
      href: "/weekend",
    },
    {
      id: "speciality",
      name: "Speciality List",
      href: "/speciality",
    },
  ];

  return (
    <div className={styles.header}>
      <div className={styles.links}>
        {links.map((link) => {
          return (
            <div
              key={link.id}
              className={`${styles.link} ${
                selectedTab === link.id ? styles.active : null
              }`}
            >
              <Link href={link.href}>
                <span>{link.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.buttons}>
        <SearchButton
          btnIcon={editImg}
          btnTxt={"Edit Patient"}
          handleSearch={handleEdit}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchPlaceholder={"Enter patient’s MRN"}
        />

        <IconButton
          iconSrc={plusImg}
          btnText={"Add Patient"}
          handleClick={handleAdd}
          size="s"
          variant="filled"
        />
      </div>
    </div>
  );
};
