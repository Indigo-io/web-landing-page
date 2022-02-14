import React from "react";

export default function Camino() {
  return (
    <div className="camino">
      <div className="camino__background"></div>
      <div className="container">
        <h1 className="camino__title">Tu Camino</h1>
        <div className="camino__section">
          <img className="camino__img" src="img/camino01.svg" />
          <div className="camino__texts">
            <div className="camino__number">1</div>
            <h3 className="camino__texts--title">Punto de Partida</h3>
            <p className="camino__texts--description">
              El primer paso al crear hábitos saludables es entender desde qué
              punto estás empezando. Estaremos monitoreando la rutina que
              tienes, empezaremos a enseñarte las cosas básicas sobre nutrición
              saludable, ejercicio, manejo de estrés y sueño. Esto te ayudará a
              entender cuáles son los cambios que debes hacer.
            </p>
          </div>
        </div>
        <div className="camino__section reverse">
          <img className="camino__img" src="img/camino02.svg" />
          <div className="camino__texts">
            <div className="camino__number">2</div>
            <h3 className="camino__texts--title white">Hábitos Conscientes</h3>
            <p className="camino__texts--description white">
              Cuando tengas claro cuáles son tus hábitos, es hora de empezar a
              cambiarlos. Para hacer eso, Indigo te da metas establecidas,
              maneras claras para llegar a estas metas, y motivación y apoyo
              para ayudarte con los obstáculos en el camino.
            </p>
          </div>
        </div>
        <div className="camino__section">
          <img className="camino__img" src="img/camino03.svg" />
          <div className="camino__texts">
            <div className="camino__number">3</div>
            <h3 className="camino__texts--title">Hábitos Inconscientes</h3>
            <p className="camino__texts--description">
              Después de semanas de aprendizaje y práctica, empezarás a notar
              que esos hábitos ya los tienes incorporados y los harás de una
              manera inconsciente, esto es lo maravilloso de cómo funciona
              nuestra mente, primero es reticente a los cambios, hasta que los
              empieza a incorporar y luego los toma como naturales y pasan a ser
              inconscientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
