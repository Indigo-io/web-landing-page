import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

export default function OurValues() {
  return (
    <section className="ourValues" id="values">
      <p className="ourValues__title">Nuestros Valores</p>
      <Swiper
        className="ourValues__slider"
        spaceBetween={200}
        slidesPerView={2}
        speed={1000}
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            spaceBetween: 300,
          },
          680: {
            slidesPerView: 3,
            spaceBetween: 200,
          },
          600: {
            slidesPerView: 2,
            centeredSlides: false,
          },
        }}
      >
        <SwiperSlide>
          <div className="ourValues__item">
            <h2 className="ourValues__item-title">Honestidad</h2>
            <p className="ourValues__item-description">
              Siempre actuamos con transparencia y sinceridad.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ourValues__item">
            <h2 className="ourValues__item-title">Congruencia</h2>
            <p className="ourValues__item-description">
              Nuestras acciones están alineadas con nuestros valores.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ourValues__item">
            <h2 className="ourValues__item-title">Respeto</h2>
            <p className="ourValues__item-description">
              Valoramos la diversidad y tratamos a todos con respeto.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ourValues__item">
            <h2 className="ourValues__item-title">Compromiso</h2>
            <p className="ourValues__item-description">
              Nos comprometemos a cumplir nuestras promesas y metas.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="ourValues__item">
            <h2 className="ourValues__item-title">Creatividad</h2>
            <p className="ourValues__item-description">
              Fomentamos la innovación y la originalidad en todo lo que hacemos.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/*  <div className="ourValues__container">
        <div className="ourValues__item">
          <h2>Honestidad</h2>
          <p>Siempre actuamos con transparencia y sinceridad.</p>
        </div>
        <div className="ourValues__item">
          <h2>Congruencia</h2>
          <p>Nuestras acciones están alineadas con nuestros valores.</p>
        </div>
        <div className="ourValues__item">
          <h2>Respeto</h2>
          <p>Valoramos la diversidad y tratamos a todos con respeto.</p>
        </div>
        <div className="ourValues__item">
          <h2>Compromiso</h2>
          <p>Nos comprometemos a cumplir nuestras promesas y metas.</p>
        </div>
        <div className="ourValues__item">
          <h2>Creatividad</h2>
          <p>
            Fomentamos la innovación y la originalidad en todo lo que hacemos.
          </p>
        </div>
      </div> */}
    </section>
  );
}
