import React from "react";
import { CoachConstants } from "./constants/coachConstants";

export default function Camino() {
  return (
    <div className="camino" id="camino">
      <div className="camino__background" />
      <div className="container">
        <h1 className="camino__title">¿Como funciona?</h1>
        <div className="camino__section">
          <figure className="camino__imageContainer">
            <img className="camino__img" src="img/web-step1.png" />
          </figure>
          <div className="camino__texts">
            <div className="camino__number">1</div>
            <h3 className="camino__texts--title">
              {CoachConstants.pathInfo[0].title}{" "}
            </h3>
            <p className="camino__texts--description">
              {CoachConstants.pathInfo[0].text}
            </p>
          </div>
        </div>
        <div className="camino__section reverse">
          <figure className="camino__imageContainer">
            <img className="camino__img" src="img/web-step2.png" />
          </figure>
          <div className="camino__texts">
            <div className="camino__number white">2</div>
            <h3 className="camino__texts--title white">
              {CoachConstants.pathInfo[1].title}
            </h3>
            <p className="camino__texts--description white">
              {CoachConstants.pathInfo[1].text}
            </p>
          </div>
        </div>
        <div className="camino__section">
          <figure className="camino__imageContainer">
            <img className="camino__img" src="img/web-step3.png" />
          </figure>
          <div className="camino__texts">
            <div className="camino__number">3</div>
            <h3 className="camino__texts--title">
              {CoachConstants.pathInfo[2].title}
            </h3>
            <p className="camino__texts--description">
              {CoachConstants.pathInfo[2].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
