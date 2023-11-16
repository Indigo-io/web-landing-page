import React from "react";

import { RoundedButton } from "./uiComponents/RoundedButton";
import { CoachConstants } from "./constants/coachConstants";
import { scrollToSection } from "./helpers/scrollToSection";

export default function HeroCoach() {
  return (
    <section className="hero" id="hero">
      <div className="hero__background"></div>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__wrapper--text">
            <p className="hero__textContainer">
              <span
                className="hero__title"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                {CoachConstants.heroUpperText}
              </span>
              <span
                className="hero__text"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                {CoachConstants.heroBottomText}
              </span>
            </p>
            <RoundedButton
              text={"¡Quiero Indigo!"}
              backgroundColor={"#E8EAF6"}
              textColor={"black"}
              width={"200px"}
              isBold={true}
              onClick={() => scrollToSection("contacto")}
            />
          </div>
          <div className="hero__wrapper--ilustrator">
            <img
              src="/img/hero__ilustrator.png"
              alt="Image"
              data-aos="fade-right"
              className="hero__ilustrator"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
