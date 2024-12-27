import React from "react";
import { PrincipalConstants } from "./constants/principalConstants";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__container">
        <h2 className="banner__title">{PrincipalConstants.BANNER__TITLE}</h2>
        <figure className="banner__image" />
        <p className="banner__paragraph">{PrincipalConstants.BANNER__TEXT}</p>
      </div>
    </div>
  );
}
