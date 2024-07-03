import { WhiteLabelConstants } from "./constants/whiteLabelConstants";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WhiteLabelSteps() {
  return (
    <section className="whiteLabelSteps__mainContainer" id="pasos">
      <div className="container">
        <Swiper
          className="whiteLabelSteps__slider"
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
            bulletClass: "whiteLabelSteps__slider-dots",
            bulletActiveClass: "whiteLabelSteps__slider-dots-active",
          }}
          loop={true}
          onMouseEnter={(swiper) => swiper.autoplay.stop()}
          onMouseLeave={(swiper) => swiper.autoplay.start()}
        >
          <SwiperSlide>
            <div className="whiteLabelSteps__container">
              <figure className="whiteLabelSteps__imageContainer">
                <Image
                  className="whiteLabelSteps__image"
                  src="/img/indigo2024/api-illustration2.png"
                  width={350}
                  height={350}
                  alt="white label image"
                  priority
                />
              </figure>
              <div className="whiteLabelSteps__descriptionContainer">
                <h1 className="whiteLabelSteps__title">
                  {WhiteLabelConstants.sliderTitle1}
                </h1>
                <p className="whiteLabelSteps__text">
                  {WhiteLabelConstants.sliderText1}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="whiteLabelSteps__container">
              <figure className="whiteLabelSteps__imageContainer">
                <Image
                  className="whiteLabelSteps__image"
                  src="/img/indigo2024/api-illustration3.png"
                  width={350}
                  height={350}
                  alt="white label image"
                  priority
                />
              </figure>
              <div className="whiteLabelSteps__descriptionContainer">
                <h1 className="whiteLabelSteps__title">
                  {WhiteLabelConstants.sliderTitle2}
                </h1>
                <p className="whiteLabelSteps__text">
                  {WhiteLabelConstants.sliderText2}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="whiteLabelSteps__container">
              <figure className="whiteLabelSteps__imageContainer">
                <Image
                  className="whiteLabelSteps__image"
                  src="/img/indigo2024/api-illustration4.png"
                  width={350}
                  height={350}
                  alt="white label image"
                  priority
                />
              </figure>
              <div className="whiteLabelSteps__descriptionContainer">
                <h1 className="whiteLabelSteps__title">
                  {WhiteLabelConstants.sliderTitle3}
                </h1>
                <p className="whiteLabelSteps__text">
                  {WhiteLabelConstants.sliderText3}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
