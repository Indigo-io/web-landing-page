import React from "react";

export default function GuidingBehaviors() {
  return (
    <div className="guidingBehaviors">
      <h1 className="guidingBehaviors__title">Comportamientos Orientadores</h1>
      <div className="guidingBehaviors__container">
        <div className="guidingBehaviors__itemContainer column1">
          <h2 className="guidingBehaviors__subtitle">
            Genero espacios de comunicación
          </h2>
          <p className="guidingBehaviors__text">
            Tanto para entender al otro como para hacerme entender. La
            comunicación efectiva es clave para el trabajo en equipo.
          </p>
        </div>
        <div className="guidingBehaviors__itemContainer column2">
          <h2 className="guidingBehaviors__subtitle">
            Pido ayuda cuando la necesito
          </h2>
          <p className="guidingBehaviors__text">
            Reconocer la necesidad de ayuda demuestra humildad y contribuye al
            desarrollo de soluciones más robustas.
          </p>
        </div>
        <div className="guidingBehaviors__itemContainer column3">
          <h2 className="guidingBehaviors__subtitle">
            Cumplo los compromisos asumidos
          </h2>
          <p className="guidingBehaviors__text">
            La confiabilidad es esencial en un equipo. Cumplir con los
            compromisos demuestra responsabilidad y fortalece la confianza.
          </p>
        </div>
        <div className="guidingBehaviors__itemContainer column4">
          <h2 className="guidingBehaviors__subtitle">Pido y doy feedback</h2>
          <p className="guidingBehaviors__text">
            El feedback constructivo es fundamental para el crecimiento
            individual y del equipo. Estar abierto a recibir y dar feedback es
            una habilidad valiosa.
          </p>
        </div>
        <div className="guidingBehaviors__itemContainer column5">
          <h2 className="guidingBehaviors__subtitle">
            Tomo decisiones en equipo
          </h2>
          <p className="guidingBehaviors__text">
            La toma de decisiones colaborativa fomenta la diversidad de ideas y
            perspectivas. A veces, las decisiones unánimes son clave, pero otras
            veces es necesario considerar diferentes opiniones.
          </p>
        </div>
      </div>
    </div>
  );
}
