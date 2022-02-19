import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__background"></div>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__wrapper--text">
            <h1 className="hero__title" data-aos="fade-right">
              Toma el control de tu vida y de tu tiempo, un hábito a la vez.
            </h1>
            <p
              className="mb-5 hero__text"
              data-aos="fade-right"
              data-aos-delay="100"
              width="80%"
            >
              Crea hábitos de vida saludables mejorando tu nutrición, entrenando
              tu cuerpo y aprendiendo a controlar y descansar tu mente.
            </p>
            <Link
              href="/start-now"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-offset="-500"
            >
              <a className="hero__button">Empezar ahora</a>
            </Link>
          </div>
          <div className="hero__wrapper--ilustrator">
            <img
              src="/img/hero__ilustrator.svg"
              alt="Image"
              data-aos="fade-right"
              className="hero__ilustrator"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
