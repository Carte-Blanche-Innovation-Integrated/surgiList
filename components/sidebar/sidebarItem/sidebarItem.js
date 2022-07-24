import styles from "./sidebaritem.module.css";

export default ({ index, title, sectHref }) => {
  return (
    <>
      <a
        className={`nav-link ${index === 0 ? "active" : null} ${styles.a}`}
        href={`#${sectHref}`}
        data-to-scrollspy-id={sectHref}
      >
        <div className={styles.number}>{index + 1}</div>
        <span>{title}</span>
      </a>
    </>
  );
};
