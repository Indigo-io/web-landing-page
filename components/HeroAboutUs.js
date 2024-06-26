import React from "react";

import { aboutUsConstants } from "./constants/aboutUsConstants";
import Image from "next/image";

export default function HeroAboutUs() {
  return (
    <section className="heroAboutUs" id="hero">
      <div className="container">
        <div className="heroAboutUs__wrapper">
          <div className="heroAboutUs__wrapper--text">
            <p className="heroAboutUs__textContainer">
              <span
                className="heroAboutUs__title"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                {aboutUsConstants.heroUpperText}
              </span>
              <span
                className="heroAboutUs__text"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                {aboutUsConstants.heroBottomText}
              </span>
            </p>
          </div>
          <div className="heroAboutUs__wrapper--ilustrator">
            <figure className="heroAboutUs__image-container">
              <Image
                className="heroAboutUs__image"
                src="/img/indigo2024/indigo_illustration.png"
                width={577}
                height={577}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
