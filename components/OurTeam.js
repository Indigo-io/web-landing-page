import React from "react";
import Image from "next/image";
import { RoundedAvatar } from "./uiComponents/RoundedAvatar";
import { aboutUsConstants } from "./constants/aboutUsConstants";

export default function OurTeam() {
  return (
    <section className="ourTeam" id="ourTeam">
      <p className="ourTeam__title">Nuestro Equipo</p>
      <figure></figure>
      <div className="ourTeam__teamContainer">
        {aboutUsConstants.teamInfo.map((item) => (
          <div className="ourTeam__person" key={item.name}>
            <RoundedAvatar avatar={item.imagePath} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <p className="ourTeam__subtitle">
        Y muchos mas colaboradores que confian en la mision tanto como nosotros.
      </p>
      <p className="ourTeam__muralTitle">Nuestro mural de cultura</p>
      <figure className="ourTeam__indigoImageContainer" id="indigo">
        <Image
          alt="indigo"
          width={1600}
          height={1131}
          src="/img/indigoDrawImage.jpeg"
          className="ourTeam__indigoImage"
        />
      </figure>
    </section>
  );
}
