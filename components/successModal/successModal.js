import styles from "./successModal.module.css";
import Image from "next/image";

import IconButton from "../iconButton/iconButton";
import homeImg from "../../public/images/home.svg";
import successImg from "../../public/images/success.svg";

export default ({ messageTxt, closeHandler, modalRef }) => {
  return (
    <div className="modal fade" tabIndex="-1" ref={modalRef}>
      <div className={`modal-dialog ${styles.placement}`}>
        <div className="modal-content">
          <div className={`modal-body ${styles.box}`}>
            <Image src={successImg} width={100} height={100} />
            <p>{messageTxt}</p>
            <IconButton
              iconSrc={homeImg}
              btnText={"Go home"}
              handleClick={closeHandler}
              size={"l"}
              variant={"filled"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
