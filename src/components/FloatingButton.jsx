import React from "react";
import styles from "./floatingBtn.module.scss";
import { MdChat } from "react-icons/md";

function FloatingButton() {
  return (
    <a className={styles.floatingBtn} href="tel: +2349070073451">
      <div id="ripple"></div>
      <MdChat color="white" size={30} />
    </a>
  );
}

export default FloatingButton;
