import styles from "./iconButton.module.css";
import Image from "next/image";

export default ({
  iconSrc,
  btnText,
  handleClick,
  size,
  variant,
}) => {
  return (
    <div
      className={`${styles.btn} ${size === "l" ? styles.large : styles.small} ${
        variant === "outlined"
          ? styles.outlined
          : variant === "filled"
          ? styles.filled
          : styles.hollow
      }`}
      onClick={handleClick}
    >
      <Image src={iconSrc} width={16} height={16} />
      <span>{btnText}</span>
    </div>
  );
};
