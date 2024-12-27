import { PrincipalConstants } from "./constants/principalConstants";

export default function WhatWeAre() {
  return (
    <section className="what-we-are" id="whatWeAre">
      <div className="what-we-are__container">
        <div className="what-we-are__text-container">
          <h2 className="what-we-are__title">
            {PrincipalConstants.WHAT_WE_ARE__TITLE}
          </h2>
          <p className="what-we-are__subtitle">
            {PrincipalConstants.WHAT_WE_ARE__SUBTITLE}
          </p>
        </div>
        <figure className="what-we-are__image" />
      </div>
    </section>
  );
}
