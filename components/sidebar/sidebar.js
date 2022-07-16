import styles from "./sidebar.module.css";
import SidebarItem from "./sidebarItem/sidebaritem";
import SECTIONS from "../data";

export default () => {
  return (
    <>
      <nav className={styles.sidebar} id="sidebar">
        {SECTIONS.map((item, index) => {
            return <SidebarItem key={index} index={index} title={item.title} isActive={true}/>;
        })}
      </nav>
    </>
  );
};
