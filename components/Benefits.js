import React from "react";

import { CoachConstants } from "./constants/coachConstants";

export default function Benefits() {
  return (
    <div className="benefits" id="beneficiosCoach">
      <div className="benefits__background" />
      <div className="container">
        <div className="benefits__section reverse2">
          <figure className="benefits__section-imageContainer">
            <img
              className="benefits__section-img"
              src="img/webcoach-step1.png"
            />
          </figure>
          <div className="benefits__section__texts">
            <h3 className="camino__texts--title">Beneficios para vos </h3>
            <ul className="camino__texts--description">
              <li className="list-item">{CoachConstants.benefitsItems[0]}</li>
              <li className="list-item">{CoachConstants.benefitsItems[1]}</li>
              <li className="list-item">{CoachConstants.benefitsItems[2]}</li>
              <li className="list-item">{CoachConstants.benefitsItems[3]}</li>
              <li className="list-item">{CoachConstants.benefitsItems[4]}</li>
              <li className="list-item">{CoachConstants.benefitsItems[5]}</li>
              <li className="list-item">{CoachConstants.benefitsItems[6]}</li>
              <li className="list-item">{CoachConstants.benefitsItems[7]}</li>
            </ul>
          </div>
        </div>
        <div style={{ height: "200px" }}> </div>
        <div className="benefits__section reverse">
          <figure className="benefits__section-imageContainer">
            <img
              className="benefits__section-img"
              src="img/webcoach-step2.png"
            />
          </figure>
          <div className="benefits__section__texts">
            <h3 className="camino__texts--title">Beneficios para tu usuario</h3>
            <ul className="camino__texts--description">
              <li className="list-item">
                Actividades y planificaciones en la App de Indigo.
              </li>
              <li className="list-item">
                Recordatorios que llegan en forma de Notificación Push.
              </li>
              <li className="list-item">
                Trackeo y visualización de sus progresos.
              </li>
              <li className="list-item">Feedback directo para el coach.</li>
              <li className="list-item">Descarga de archivos multimedia.</li>
              <li className="list-item">Rápida navegación.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
