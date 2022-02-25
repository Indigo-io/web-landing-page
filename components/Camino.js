import React from "react";

export default function Camino() {
  return (
    <div className="camino" id="camino">
      <div className="camino__background" />
      <div className="container">
        <h1 className="camino__title">Tu Camino</h1>
        <div className="camino__section">
          <img className="camino__img" src="img/camino01.svg" />
          <div className="camino__texts">
            <div className="camino__number">1</div>
            <h3 className="camino__texts--title">Empieza a usar la APP</h3>
            <p className="camino__texts--description">
              Comienza descargando la app y crea tu propio plan con los hábitos
              que quieres desarrollar.
            </p>
          </div>
        </div>
        <div className="camino__section reverse">
          <img className="camino__img" src="img/camino02.svg" />
          <div className="camino__texts">
            <div className="camino__number">2</div>
            <h3 className="camino__texts--title white">
              Sigue un paso a paso simple
            </h3>
            <p className="camino__texts--description white">
              Realiza las acciones que te llevarán a desarrollar cada hábito. La
              aplicación te notificará cuando sea el momento adecuado, para que
              puedas mantener la constancia.
            </p>
          </div>
        </div>
        <div className="camino__section">
          <img className="camino__img" src="img/camino03.svg" />
          <div className="camino__texts">
            <div className="camino__number">3</div>
            <h3 className="camino__texts--title">Incorpora un hábito</h3>
            <p className="camino__texts--description">
              Desarrolla tu primer hábito en base a los objetivos que te has
              planteado y aprovecha las notificaciones de la app para lograrlo.
              Podrás trabajar en más de uno a la vez y sentir cómo logras un
              balance saludable con pequeños pasos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
