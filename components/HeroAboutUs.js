import React from "react";

import { RoundedButton } from "./uiComponents/RoundedButton";
import { aboutUsConstants } from "./constants/aboutUsConstants";
import { scrollToSection } from "./helpers/scrollToSection";

export default function HeroAboutUs() {
  return (
    <section className="hero" id="hero">
      <div className="hero__background"></div>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__wrapper--text">
            <p className="hero__textContainer">
              <span
                className="hero__text"
                data-aos="fade-right"
                data-aos-delay="100"
                style={{ fontSize: "41px" }}
              >
                {aboutUsConstants.heroUpperText}
              </span>
              <span
                className="hero__text"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                {aboutUsConstants.heroBottomText}
              </span>
            </p>
          </div>
          <div className="hero__wrapper--ilustrator">
            <img
              src="/img/team.png"
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
