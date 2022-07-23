import styles from "./sidebar.module.css";
import SidebarItem from "./sidebarItem/sidebaritem";

export default ({ sectionList }) => {
  return (
    <>
      <nav className={`${styles.sidebar} nav`} id="sidebar">
        {sectionList.map((item, index) => {
          return (
            <SidebarItem
              key={index}
              index={index}
              title={item.title}
              sectHref={item.id}
            />
          );
        })}
      </nav>
    </>
  );
};
