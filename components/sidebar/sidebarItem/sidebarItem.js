import styles from './sidebaritem.module.css';

export default ({ index, title, isActive }) => {
    return (
        <>
            <div className={`${styles.item} ${isActive ? styles.active : null}`}>
                <div className={styles.number}>{index}</div>
                <span>{title}</span>
            </div> 
        </>
    );
}
