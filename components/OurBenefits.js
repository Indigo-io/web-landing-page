import React, { useEffect, useRef, useState } from "react";

import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  RoundedButton,
  SelectableRoundedButton,
} from "./uiComponents/RoundedButton";
import { B2bConstants } from "./constants/b2bConstants";
import { scrollToSection } from "./helpers/scrollToSection";

export default function OurBenefits() {
  const [selectedButton, setSelectedButton] = useState("fisic");
  const [fisicStatus, setFisicStatus] = useState();
  const [mentalStatus, setMentalStatus] = useState();
  const [teamsStatus, setTeamsStatus] = useState();
  const [isChanging, setIsChanging] = useState(false);

  const carrouselText = {
    FISIC: "fisic",
    MENTAL: "mental",
    TEAMS: "teams",
  };

  const carouselRef = useRef(null);

  useEffect(() => {
    if (selectedButton === carrouselText.FISIC) {
      setFisicStatus(true);
      setMentalStatus(false);
      setTeamsStatus(false);
    } else if (selectedButton === carrouselText.MENTAL) {
      setFisicStatus(false);
      setMentalStatus(true);
      setTeamsStatus(false);
    } else if (selectedButton === carrouselText.TEAMS) {
      setFisicStatus(false);
      setMentalStatus(false);
      setTeamsStatus(true);
    }
  }, [selectedButton]);

  const onButtonClick = (newText, slickToChange) => {
    if (!isChanging) {
      setSelectedButton(newText), carouselRef.current.slickGoTo(slickToChange);
    }
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    beforeChange: () => setIsChanging(true),
    afterChange: () => setIsChanging(false),
    easing: "ease-out",
  };

  function carouselSection(section) {
    return (
      <div className="ourBenefits__bottomSide">
        <div className="ourBenefits__bottomSide">
          <div className="ourBenefits__bottomSideContainer">
            <p className="ourBenefits__bottomSideTitle">
              {B2bConstants.textToShow[section].title}
            </p>
            <p>{B2bConstants.textToShow[section].description}</p>
            <RoundedButton
              text={"Cotiza un plan"}
              onClick={() => scrollToSection("contacto")}
            />
          </div>
          <figure className="ourBenefits__botomSideImageContainer">
            <img
              className="ourBenefits__botomSideImage"
              src="/img/hero__ilustrator.png"
            />
          </figure>
        </div>
      </div>
    );
  }

  return (
    <div className="ourBenefits__background">
      <div className="container">
        <section className="ourBenefits__mainContainer" id="beneficios">
          <div className="ourBenefits__upperSide">
            <h1 className="ourBenefits__title">
              {B2bConstants.ourBenefitsText}
            </h1>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <SelectableRoundedButton
                text={B2bConstants.fisic}
                onClick={() => onButtonClick(carrouselText.FISIC, 0)}
                isSelected={fisicStatus}
              />
              <SelectableRoundedButton
                text={B2bConstants.mental}
                onClick={() => onButtonClick(carrouselText.MENTAL, 1)}
                isSelected={mentalStatus}
              />
              <SelectableRoundedButton
                text={B2bConstants.teams}
                onClick={() => onButtonClick(carrouselText.TEAMS, 2)}
                isSelected={teamsStatus}
              />
            </div>
          </div>
          <Slider ref={carouselRef} {...carouselSettings}>
            {carouselSection("fisic")}
            {carouselSection("mental")}
            {carouselSection("teams")}
          </Slider>
        </section>
      </div>
    </div>
  );
}
