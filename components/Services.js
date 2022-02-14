import React from "react";

export default function Services() {
  return (
    <div className="services">
      <div className="container">
        <h2 className="services__title">¿Qué vas a obtener?</h2>
        <p className="services__text">
          Trabajar tu nutricion, tu mente y tu <br />
          estado fisico de manera integral.
        </p>
        <div className="services__cards">
          <div className="services__card">
            <img className="services__card--img" src="img/fitness.png" alt="" />
            <h3 className="services__card--title">Fitness</h3>
            <p className="services__card--text">
              Entrena tu cuerpo, mantente saludable, vive más y mejor.
              Buscaremos que ganes fuerza y movilidad. Tu cuerpo es tu templo,
              queremos ayudarte a cuidarlo.
            </p>
          </div>
          <div className="services__card">
            <img
              className="services__card--img"
              src="img/nutrition.png"
              alt=""
            />
            <h3 className="services__card--title">Nutrición</h3>
            <p className="services__card--text">
              Incorpora hábitos alimentarios saludables que te permiten sentirte
              mejor con tu cuerpo, clarificar tus pensamientos y tener más
              energía para encarar los desafíos del día a día, desde el primer
              día.
            </p>
          </div>
          <div className="services__card">
            <img className="services__card--img" src="img/mind.png" alt="" />
            <h3 className="services__card--title">Mente</h3>
            <p className="services__card--text">
              Trabaja en tus capacidades cognitivas, para mejorar tu gestión
              emocional, y aprender a calmar tu mente. Una mente en paz toma
              mejores decisiones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
