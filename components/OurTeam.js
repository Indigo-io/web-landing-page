import React from "react";
import Image from "next/image";

export default function OurTeam() {
  return (
    <section className="ourTeam" id="mural">
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
