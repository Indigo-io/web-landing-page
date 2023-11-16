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

function RoundedButton({
  text,
  onClick,
  backgroundColor,
  textColor,
  width,
  isBold,
}) {
  return (
    <button
      className={`${styles.roundedButton}`}
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor ?? "black",
        color: textColor ? textColor : "white",
        width: width ? width : "200px",
        fontWeight: isBold ? "bold" : "",
      }}
    >
      {text}
    </button>
  );
}

export { SelectableRoundedButton, RoundedButton };
