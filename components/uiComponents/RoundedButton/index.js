import React from "react";
import styles from "./styles.module.css";

function SelectableRoundedButton({ text, onClick, isSelected }) {
  return (
    <button
      className={`${styles.roundedButton} ${isSelected ? styles.darkMode : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function RoundedButton({ text, onClick, sx }) {
  return (
    <button className={`${styles.roundedButton}`} onClick={onClick} style={sx}>
      {text}
    </button>
  );
}

export { SelectableRoundedButton, RoundedButton };
