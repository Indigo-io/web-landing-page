import Image from "next/image";
import React from "react";
import { CoachConstants } from "./constants/coachConstants";
import { RoundedButton } from "./uiComponents/RoundedButton";

export default function DownloadCoaches() {
  return (
    <section className="downloadCoaches" id="descargar">
      <div className="container">
        <div className="downloadCoaches__mainContainer">
          <figure className="downloadCoaches__imageContainer">
            <Image
              className="downloadCoaches__image"
              src="/img/logoIndigo_coach_blanco.png"
              width={312}
              height={153}
            />
          </figure>
          <h1 className="downloadCoaches__title">
            {CoachConstants.bannerTitle}
          </h1>
          <p className="downloadCoaches__text">{CoachConstants.bannerText}</p>
          <RoundedButton
            text={"REGISTRATE EN INDIGO COACH"}
            onClick={() => scrollToSection("contacto")}
            sx={{
              color: "white",
              backgroundColor: "#3D5EF3",
              padding: "10px",
              width: "300px",
              letterSpacing: "1.4px",
              border: "none",
              fontWeight: "bold",
              fontSize: "13px",
            }}
          />
          <h3 className="downloadCoaches__callToactionText">
            {CoachConstants.callToActionText}
          </h3>
          <div className="downloadCoaches__appsContainer">
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/indigo-balance/id1611795903"
              className="bannerB2C__appImage"
              rel="noreferrer"
            >
              <img
                className="bannerB2C__appImage"
                src="/img/download-ios.svg"
              />
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.indigobalance.app"
              className="bannerB2C__appImage"
              rel="noreferrer"
            >
              <img
                className="bannerB2C__appImage"
                src="/img/download-google.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* especialistas= "https://especialistas.indigobalance.com/"
appleStore = "https://apps.apple.com/us/app/indigo-balance/id1611795903"
googlePlay = "https://play.google.com/store/apps/details?id=com.indigobalance.app" */

/* logoCoaches = "/img/logoIndigo_coach_blanco.png 312px 153px"
logoios= "/img/download-ios.svg"
logo googlePlay = "/img/download-google.svg" */
