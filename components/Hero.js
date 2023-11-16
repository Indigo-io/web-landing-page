import React from "react";

import { RoundedButton } from "./uiComponents/RoundedButton";
import { B2bConstants } from "./constants/b2bConstants";
import { scrollToSection } from "./helpers/scrollToSection";

export default function Hero() {
  return (
    <section className="hero" id="hero" style={{ backgroundColor: "#C5CAE9" }}>
      <div className="hero__background"></div>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__wrapper--text">
            <p className="hero__textContainer">
              <span
                className="hero__text"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                {B2bConstants.heroUpperText}
              </span>
              <span
                className="hero__text"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                {B2bConstants.heroBottomText}
              </span>
            </p>
            <RoundedButton
              text={"¡Quiero Indigo!"}
              backgroundColor={"#E8EAF6"}
              textColor={"black"}
              width={"200px"}
              onClick={() => scrollToSection("contacto")}
              isBold={true}
            />
          </div>
          <div className="hero__wrapper--ilustrator">
            <img
              src="/img/app.png"
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
