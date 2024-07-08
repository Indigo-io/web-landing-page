import React from "react";

import { MainConstants } from "./constants/mainConstants";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function OurBenefits() {
  return (
    <div className="ourBenefits__background">
      <div className="container">
        <section className="ourBenefits__mainContainer" id="companias">
          <h1 className="ourBenefits__title">{MainConstants.companiesText}</h1>
          <Swiper
            className="ourBenefits__slider"
            spaceBetween={50}
            slidesPerView={2}
            modules={[Autoplay, Pagination, Navigation]}
            speed={1000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass: "ourBenefits_slider-dots",
              bulletActiveClass: "ourBenefits_slider-dots-active",
            }}
            loop={true}
            breakpoints={{
              720: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="ourBenefits__company">
                <figure className="ourBenefits__logo--container">
                  <Image
                    className="ourBenefits__logo"
                    src="/img/indigo2024/brands_tyrrell.png"
                    width={254}
                    height={62}
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ourBenefits__company">
                <figure className="ourBenefits__logo--container">
                  <Image
                    className="ourBenefits__logo"
                    src="/img/indigo2024/brands_italcred.png"
                    width={204}
                    height={42}
                    style={{
                      height: "35px",
                      alignSelf: "flex-end",
                    }}
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ourBenefits__company">
                <figure className="ourBenefits__logo--container">
                  <Image
                    className="ourBenefits__logo"
                    src="/img/indigo2024/brands_plus.png"
                    width={194}
                    height={89}
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ourBenefits__company">
                <figure className="ourBenefits__logo--container">
                  <Image
                    className="ourBenefits__logo"
                    src="/img/indigo2024/brands_manteca.png"
                    width={220}
                    height={44}
                  />
                </figure>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
}
