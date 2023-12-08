import React from "react";
import { RoundedButton } from "./uiComponents/RoundedButton";

export default function BannerLogo() {
  const calendlyLink = "https://calendly.com/reuconbruno/30min";

  return (
    <div className="bannerLogo">
      <div className="container">
        <div className="bannerLogo__container">
          <figure className="bannerLogo__imageContainer">
            <img
              className="bannerLogo__image"
              src="img/logoIndigo_sin_borde-02.png"
            />
          </figure>
          <div className="bannerLogo-calendly">
            <p className="bannerLogo-calendlyTitle">Quieres saber mas?</p>
            <RoundedButton
              text={"Agenda tu Calendly"}
              width={"250px"}
              backgroundColor={"#49a8df"}
              onClick={() => window.open(calendlyLink, "_blank")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
