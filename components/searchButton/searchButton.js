import IconButton from "../iconButton/iconButton";
import styles from "./searchButton.module.css";

export default ({
  btnIcon,
  btnTxt,
  searchValue,
  setSearchValue,
  searchPlaceholder,
  handleSearch,
}) => {
  return (
    <div className={styles.searchBtn}>
      <input
        className={styles.input}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={searchPlaceholder}
      />
      <IconButton
        iconSrc={btnIcon}
        btnText={btnTxt}
        handleClick={handleSearch}
        size="s"
        variant="outlined"
      />
    </div>
  );
};
