import React from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import OurValues from "./OurValues";
import GuidingBehaviors from "./GuidingBehaviors";
import OurPrinciples from "../components/OurPrinciples";

export default function OurBehaviors() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnDotsHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    easing: "ease-out",
  };

  return (
    <div className="ourBehaviors__background">
      <div className="container">
        <section className="ourBehaviors__mainContainer" id="beneficios">
          <Slider className="ourBehaviors__slider" {...carouselSettings}>
            <OurValues />
            <OurPrinciples />
            <GuidingBehaviors />
          </Slider>
        </section>
      </div>
    </div>
  );
}
