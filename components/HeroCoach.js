import React from "react";
import { CoachConstants } from "./constants/coachConstants";
import { RoundedButton } from "./uiComponents/RoundedButton";
import { scrollToSection } from "./helpers/scrollToSection";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeroCoach() {
  return (
    <section className="heroCoach" id="hero">
      <div className="container">
        <div className="heroCoach__mainContainer">
          <div className="heroCoach__text-container">
            <h1 className="heroCoach__title">{CoachConstants.heroTitle}</h1>
            <p className="heroCoach__subtitle">{CoachConstants.heroSubtitle}</p>
            <RoundedButton
              text={"Contactanos"}
              onClick={() => scrollToSection("contacto")}
              sx={{
                color: "#7945EF",
                backgroundColor: "white",
                padding: "5px",
                width: "220px",
                letterSpacing: "1.4px",
                border: "none",
              }}
            />
          </div>
          <div className="heroCoach__slider-container">
            <Swiper
              className="heroCoach__slider"
              spaceBetween={50}
              slidesPerView={1}
              modules={[Autoplay, Pagination, Navigation]}
              speed={1000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                bulletClass: "heroCoach__slider-dots",
                bulletActiveClass: "heroCoach__slider-dots-active",
              }}
              loop={true}
            >
              <SwiperSlide>
                <div className="heroCoach__slider-item">
                  <div className="heroCoach__slider-number">01</div>
                  <h2 className="heroCoach__slider-title">
                    {CoachConstants.sliderTitle1}
                  </h2>
                  <p className="heroCoach__silder-description">
                    {CoachConstants.sliderText1}
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="heroCoach__slider-item">
                  <div className="heroCoach__slider-number">02</div>
                  <h2 className="heroCoach__slider-title">
                    {CoachConstants.sliderTitle2}
                  </h2>
                  <p className="heroCoach__silder-description">
                    {CoachConstants.sliderText2}
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="heroCoach__slider-item">
                  <div className="heroCoach__slider-number">03</div>
                  <h2 className="heroCoach__slider-title">
                    {CoachConstants.sliderTitle3}
                  </h2>
                  <p className="heroCoach__silder-description">
                    {CoachConstants.sliderText3}
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
