import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

function RoundedAvatar({ avatar, width }) {
  return (
    <figure
      className={`${styles.roundedAvatar}`}
      style={{
        width: width ? width : "150px",
        height: width ? width : "150px",
      }}
    >
      <Image src={avatar} layout="fill" alt="avatar" objectFit="cover" />
    </figure>
  );
}

export { RoundedAvatar };
