import React from "react";

export default function Prices() {
  return (
    <section className="prices" id="testimonios">
      <div className="container">
        <h3 className="prices__title">¿Qué tipo de acceso quieres?</h3>
        <div className="prices__cards">
          <div className="prices__card">
            <span className="prices__type">Gratis</span>
            <span className="prices__value">u$s 0</span>
            <ul className="prices__list">
              <li className="prices__list--item">
                Crea y controla tus propios hábitos.
              </li>
              <li className="prices__list--item">Notificaciones.</li>
              <li className="prices__list--item">
                Almacenamiento de estadísticas semanales.
              </li>
              <li className="prices__list--item">
                Acceso limitado a contenidos de entrenamiento físico, mental y
                nutrición.
              </li>
            </ul>
          </div>
          <div className="prices__card">
            <span className="prices__type">Básico (*)</span>
            <span className="prices__value">u$s 5,99/mes</span>
            <ul className="prices__list">
              <li className="prices__list--item">
                Creación de desafíos propios.
              </li>
              <li className="prices__list--item">
                Acceso a desafíos grupales.
              </li>
              <li className="prices__list--item">
                Almacenamiento de estadísticas sin límites.
              </li>
              <li className="prices__list--item">
                Acceso ilimitado a contenidos de entrenamiento físico, mental y
                nutrición.
              </li>
            </ul>
            <span className="prices__note">(*) No disponible aún</span>
          </div>
          <div className="prices__card">
            <span className="prices__type">Premium (*)</span>
            <span className="prices__value">u$s 14,99/mes</span>
            <ul className="prices__list">
              <li className="prices__list--item">
                Todos los beneficios de las demás subscripciones.
              </li>
              <li className="prices__list--item">
                Consultas con los especialistas (**): <br />- Nutrición <br />-
                Psicología
                <br />- Entrenamiento personal
              </li>
            </ul>
            <span className="prices__note">(*) No disponible aún</span>
            <span className="prices__note">
              (**) Dos consultas de treinta minutos por mes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
