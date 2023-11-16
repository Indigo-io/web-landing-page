import React from "react";
import styles from "./styles.module.css";

function BoxContainer({ title, text, icon }) {
  return (
    <div className={`${styles.boxContainer}`}>
      <div className={`${styles.titleContainer}`}>
        <figure className={`${styles.iconContainer}`}>{icon}</figure>
        <p className={`${styles.title}`}>{title}</p>
      </div>
      <p className={`${styles.text}`}>{text}</p>
    </div>
  );
}

export { BoxContainer };
