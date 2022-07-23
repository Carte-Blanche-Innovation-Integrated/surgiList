import styles from "./header.module.css";
import Image from "next/image";

import logo from "../../public/images/logo.svg";
import logOut from "../../public/images/log-out.svg";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";

export default () => {
  const router = useRouter();

  const handleLogout = () => {
    cookieCutter.set(process.env.cookieName, "", { expires: new Date(0) });
    router.push("/login");
  };

  return (
    <>
      <header
        className={`${styles.header} border-clr d-flex bg-white border-bottom border-1`}
      >
        <div>
          <Image src={logo} width={100} height={30} />
        </div>
        <div className={styles.logout} onClick={handleLogout}>
          <Image src={logOut} width={16} height={16} />
          <span>Logout</span>
        </div>
      </header>
    </>
  );
};
