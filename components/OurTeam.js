import React from "react";
import { aboutUsConstants } from "./constants/aboutUsConstants";

export default function OurTeam() {
  return (
    <section className="ourTeam" id="culture">
      <div className="ourTeam__container">
        <p className="ourTeam__muralTitle">{aboutUsConstants.MURAL_TITLE}</p>
        <span className="ourTeam__mural-subtitle">
          {aboutUsConstants.MURAL_SUBTITLE}
        </span>
        <figure className="ourTeam__indigo-image" id="indigo" />
      </div>
    </section>
  );
}
