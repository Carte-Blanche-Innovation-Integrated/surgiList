import styles from './header.module.css';
import Image from "next/image";

export default () => {
  return (
    <>
      <header className={`${styles.header} border-clr d-flex bg-white border-bottom border-1`}>
        <div>
          <Image src="/images/logo.svg" width={100} height={30} />
        </div>
        <div className={styles.logout}>
          <Image src="/images/log-out.svg" width={16} height={16} />
          <span>Logout</span>
        </div>
      </header>
    </>
  );
};
