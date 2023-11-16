import React from "react";
import { CoachConstants } from "./constants/coachConstants";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function SubHero() {
  return (
    <div className="sub-hero" id="porque">
      <div className="container" style={{ position: "relative" }}>
        <h1 className="sub-hero__title">{CoachConstants.subHeroTitle}</h1>
        <p className="sub-hero__text">{CoachConstants.subHeroText1}</p>
        <p className="sub-hero__text">{CoachConstants.subHeroText2}</p>
        <div className="whatsapp-buttonContainer">
          <a href="https://wa.me/+12056153558" target="_blank">
            <WhatsAppIcon sx={{ color: "white", fontSize: "32px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
