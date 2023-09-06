import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Write.module.css";
import React from "react";
import QuillWrite from "../../components/QuillWrite/QuillWrite";

export const Write = () => {
  return (
    <>
      <NavBar />
      <div className={styles.content}>
        <QuillWrite />
      </div>
      <Footer />
    </>
  );
};
