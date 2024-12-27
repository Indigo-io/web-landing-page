import React from "react";
import { aboutUsConstants } from "./constants/aboutUsConstants";

export default function HeroAboutUs() {
  return (
    <section className="hero-about-us" id="whoWeAre">
      <div className="hero-about-us__container">
        <h1 className="hero-about-us__title">{aboutUsConstants.HERO_TITLE}</h1>
        <p className="hero-about-us__paragraph">{aboutUsConstants.HERO_TEXT}</p>
        <figure className="hero-about-us__sign" />
      </div>
    </section>
  );
}
