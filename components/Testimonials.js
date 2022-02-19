/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">
      <div className="container">
        <h3 className="testimonials__title">Testimonios</h3>
        <div className="testimonials__cards">
          <div className="testimonials__card">
            <p className="testimonials__summary--text">
              “Indigo es todo lo que está bien! Es un acompañamiento integral,
              super profesional para una vida más activa, saludable y relajada.
              Estoy muy contenta y satisfecha con el constante aprendizaje.
              Depende mucho de mi, pero Indigo no me deja sola.”
            </p>
            <div className="testimonials__summary">
              <img
                className="testimonials__card--photo"
                src="img/person01.png"
              />
              <span className="testimonials__summary--name">
                María Eugenia Bruch
              </span>
            </div>
          </div>
          <div className="testimonials__card">
            <p className="testimonials__summary--text">
              “Mi primera impresión fue “wow” que increíble hacer algo paso a
              paso, queriendo ayudarme con flexibilidad y dinamismo. Me encanta
              el seguimiento que hacen, me siento muy acompañado y comprendido.”
            </p>
            <div className="testimonials__summary">
              <img
                className="testimonials__card--photo"
                src="img/person02.png"
              />
              <span className="testimonials__summary--name">
                Diego Reimundes
              </span>
            </div>
          </div>
          <div className="testimonials__card">
            <p className="testimonials__summary--text">
              "Las conversaciones iniciales me permitieron tomar conciencia de
              la necesidad. Luego, las instancias de seguimiento me motivaron a
              sostener los comportamientos deseados. Hoy puedo decir que tengo
              un nuevo hábito que me enorgullece."
            </p>
            <div className="testimonials__summary">
              <img
                className="testimonials__card--photo"
                src="img/person03.png"
              />
              <span className="testimonials__summary--name">Lis Espeche</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
