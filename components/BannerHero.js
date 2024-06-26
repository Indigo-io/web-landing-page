import React from "react";
import { RoundedButton } from "./uiComponents/RoundedButton";
import Image from "next/image";
import { MainConstants } from "./constants/mainConstants";

export default function BannerLogo() {
  const calendlyLink = "https://calendly.com/lali-indigo";

  return (
    <div className="bannerHero" id="calendly">
      <div className="container">
        <div className="bannerHero__main-container">
          <div className="bannerHero__left-container">
            <h1 className="bannerHero__title">{MainConstants.bannerTitle}</h1>
            <p className="bannerHero__description">
              {MainConstants.bannerText}
            </p>
            <div className="bannerHero__button-desktop">
              <RoundedButton
                text={"AGENDA TU CALENDLY"}
                sx={{
                  width: "250px",
                  backgroundColor: "#7945EF",
                  border: "none",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "12px",
                }}
                onClick={() => window.open(calendlyLink, "_blank")}
              />
            </div>
          </div>
          <div className="bannerHero__right-container">
            <div className="bannerHero__image--background">
              <figure className="bannerHero__image--container">
                <Image
                  src="/img/indigo2024/agenda.png"
                  layout="fill"
                  alt="Imagen Agenda."
                />
              </figure>
            </div>
            <div className="bannerHero__button-mobile">
              <RoundedButton
                text={"AGENDA TU CALENDLY"}
                sx={{
                  width: "250px",
                  backgroundColor: "#7945EF",
                  border: "none",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "12px",
                }}
                onClick={() => window.open(calendlyLink, "_blank")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
