import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContent}>
      <p>Weird Wishper &copy; {new Date().getFullYear()} Arbisoft</p>
    </div>
  );
}

export default Footer;
