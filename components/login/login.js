import Image from "next/image";
import styles from "./login.module.css";
import logoImg from "../../public/images/logo.svg";
import PasswordInput from "../input/passwordInput/passwordInput";
import IconButton from "../iconButton/iconButton";
import logInImg from "../../public/images/log-in.svg";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import cookieCutter from "cookie-cutter";

export default () => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    // redirect to home if already logged in
    const exists = cookieCutter.get(process.env.cookieName);
    if (!!exists) {
      router.push("/");
    }
  }, []);

  const handleAuth = () => {
    if (password === "123456") {
      setPassword("");
      cookieCutter.set(process.env.cookieName, true);
      const url = router.query.returnUrl || "/";
      router.push(url);
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className={styles.component}>
      <Image src={logoImg} width={226} height={68} />
      <div className={styles.login}>
        <PasswordInput
          id='password'
          value={password}
          handleOnChange={(e) => setPassword(e.target.value)}
          handleEnter={handleAuth}
        />
        <div className={styles.loginBtn}>
          <IconButton
            iconSrc={logInImg}
            btnText={"Login"}
            size={"l"}
            variant={"filled"}
            handleClick={handleAuth}
          />
        </div>
      </div>
    </div>
  );
};
