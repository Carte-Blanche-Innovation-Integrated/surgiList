import styles from "./footer.module.css";
import IconButton from "../iconButton/iconButton";

export default ({btnTxt, btnIcon, handleCancel, handleSubmit}) => {
  return (
    <footer className={styles.footer}>
      <button
        type="button"
        className={styles.cancelBtn}
        onClick={handleCancel}
      >
        Cancel
      </button>
      <IconButton
        iconSrc={btnIcon}
        btnText={btnTxt}
        handleClick={handleSubmit}
        size={"l"}
        variant={"filled"}
      />
    </footer>
  );
};
