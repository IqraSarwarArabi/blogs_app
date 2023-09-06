import styles from "./Write.module.css";
import React from "react";
import QuillWrite from "../../components/QuillWrite/QuillWrite";

export const Write = () => {
  return (
    <>
      <div className={styles.content}>
        <QuillWrite />
      </div>
    </>
  );
};
