import React from "react";
import styles from "./styles.module.css";

function BoxContainer({ title, text, icon, backgroundColor, height, color }) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor ?? "#2b2d2e",
        height: height ?? "300px",
        color: color ?? "white",
      }}
      className={`${styles.boxContainer}`}
    >
      <div className={`${styles.titleContainer}`}>
        <p className={`${styles.title}`}>{title}</p>
        <figure className={`${styles.iconContainer}`}>{icon}</figure>
      </div>
      <p className={`${styles.text}`}>{text}</p>
    </div>
  );
}

export { BoxContainer };
