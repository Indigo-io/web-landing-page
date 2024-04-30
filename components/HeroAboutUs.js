import React from "react";

import { aboutUsConstants } from "./constants/aboutUsConstants";

export default function HeroAboutUs() {
  return (
    <section className="heroAboutUs" id="heroAboutUs">
      <div className="heroAboutUs__background"></div>
      <div className="container">
        <div className="heroAboutUs__wrapper">
          <div className="heroAboutUs__wrapper--text">
            <p className="heroAboutUs__textContainer">
              <span
                className="heroAboutUs__text"
                data-aos="fade-right"
                data-aos-delay="100"
                style={{ fontSize: "41px" }}
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
            <img
              src="/img/team.png"
              alt="Image"
              data-aos="fade-right"
              className="heroAboutUs__ilustrator"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
