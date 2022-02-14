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
              ¿Estás viviendo la vida que quieres vivir?
            </h1>
            <p
              className="mb-5 hero__text"
              data-aos="fade-right"
              data-aos-delay="100"
              width="80%"
            >
              Crea hábitos saludables trabajando en tu nutrición, tu
              entrenamiento físico y mental de forma integral.
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
