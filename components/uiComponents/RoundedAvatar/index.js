import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

function RoundedAvatar({ avatar, sx }) {
  return (
    <figure className={`${styles.roundedAvatar}`} style={sx}>
      <Image src={avatar} layout="fill" alt="avatar" objectFit="contain" />
    </figure>
  );
}

export { RoundedAvatar };
