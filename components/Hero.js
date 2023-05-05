import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__background"></div>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__wrapper--text">
            <h1 className="hero__title" data-aos="fade-right">
                  Comenza entrenar ahora
            </h1>
            <p
              className="mb-5 hero__text"
              data-aos="fade-right"
              data-aos-delay="100"
              width="60%"
            >
              Entrenadores personales a disposición en todo lugar y momento.  
              Y algunas cosas más.
            </p>
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
