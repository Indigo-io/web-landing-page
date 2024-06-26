import React, { useEffect, useState } from "react";

import { RoundedButton } from "./uiComponents/RoundedButton";
import { RoundedAvatar } from "./uiComponents/RoundedAvatar";
import Link from "next/link";
import Image from "next/image";

import { scrollToSection } from "./helpers/scrollToSection";
import { useMediaQuery } from "@mui/material";
import { MainConstants } from "./constants/mainConstants";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Hero() {
  const Verticals = {
    Meditation: {
      title: "Mindfulness",
      description: MainConstants.meditationText,
      color: "#8B6EE5",
    },
    Fitness: {
      title: "Actividad Fisica",
      description: MainConstants.fitnessText,
      color: "#2EBEF7",
    },
    Alimentation: {
      title: "Alimentación",
      description: MainConstants.nutritionText,
      color: "#498F67",
    },
    AI: {
      title: "Inteligencia artificial",
      description: MainConstants.AIText,
      color: "#8B6EE5",
    },
    API: {
      title: "Marca Blanca",
      description: MainConstants.apiText,
      color: "#5473E2",
    },
  };

  const [hydrated, setHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const [leftVerticalSelected, setLeftVerticalSelected] =
    useState("Meditation");
  const [rightVerticalSelected, setRightVerticalSelected] = useState("AI");

  const [leftVerticalChanging, setLeftVerticalChanging] = useState(false);
  const [rightVerticalChanging, setRightVerticalChanging] = useState(false);

  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    setLeftVerticalChanging(true);
    setTimeout(() => {
      setLeftVerticalChanging(false);
    }, 500);
  }, [leftVerticalSelected]);

  useEffect(() => {
    setRightVerticalChanging(true);
    setTimeout(() => {
      setRightVerticalChanging(false);
    }, 500);
  }, [rightVerticalSelected]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const CustomCard = ({ logo, title, text, url }) => (
    <div className="hero__card">
      <figure className="hero__card--logo-container">
        <Image src={logo} layout="fill" />
      </figure>
      <h1 className="hero__card--title">{title}</h1>
      <p className="hero__card--description">{text}</p>
      <Link href={url}>
        <p className="hero__card--KnowMore">Conocer Más</p>
      </Link>
    </div>
  );

  useEffect(() => {
    setHydrated(true);
  }, []);

  // No renderiza nada hasta que se hidrate en el cliente
  if (!hydrated) {
    return null;
  }

  return (
    <main className="hero" id="hero">
      {!isMobile ? (
        <section className="hero__main">
          <div className="hero__xd"></div>
          <div className="hero__upperContainer">
            <div className="hero__backgroundColumn hero__backgroundColumn-1">
              <figure className="hero__backgroundColumn-dot">
                <Image
                  src="/img/indigo2024/dot.png"
                  layout="fill"
                  alt="Logo de indigo"
                />
              </figure>
              <figure
                className="hero__leftCircle"
                style={{
                  boxShadow:
                    leftVerticalSelected === "Meditation"
                      ? "0 0 20px 10px rgba(255, 255, 255, 0.5)"
                      : "none",
                }}
                onClick={() => setLeftVerticalSelected("Meditation")}
              >
                <Image
                  src="/img/indigo2024/meditation.png"
                  layout="fill"
                  alt="Imagen de meditación"
                />
              </figure>
              <figure
                className="hero__leftCircle"
                style={{
                  boxShadow:
                    leftVerticalSelected === "Fitness"
                      ? "0 0 20px 10px rgba(255, 255, 255, 0.5)"
                      : "none",
                }}
                onClick={() => setLeftVerticalSelected("Fitness")}
              >
                <Image
                  src="/img/indigo2024/sport.png"
                  layout="fill"
                  alt="Imagen de deportes"
                />
              </figure>
              <figure
                className="hero__leftCircle"
                style={{
                  boxShadow:
                    leftVerticalSelected === "Alimentation"
                      ? "0 0 20px 10px rgba(255, 255, 255, 0.5)"
                      : "none",
                }}
                onClick={() => setLeftVerticalSelected("Alimentation")}
              >
                <Image
                  src="/img/indigo2024/alimentation.png"
                  layout="fill"
                  alt="Imagen de alimentación"
                />
              </figure>
            </div>
            <div className="hero__backgroundColumn hero__backgroundColumn-2">
              <div className="backgroundColumn-2--upperSide">
                <div className="hero__chalkboard">
                  <div className="hero__chalkboard-dot top-left-dot"></div>
                  <div className="hero__chalkboard-dot top-right-dot"></div>
                  <div className="hero__chalkboard-dot bottom-left-dot"></div>
                  <div className="hero__chalkboard-dot bottom-right-dot"></div>
                  <div
                    className={`${leftVerticalChanging ? "customFade" : ""}`}
                  >
                    <h4
                      className="hero__chalkboard--title"
                      style={{
                        color: Verticals[leftVerticalSelected].color,
                      }}
                    >
                      {Verticals[leftVerticalSelected].title}
                    </h4>
                    <p className="hero__chalkboard--description">
                      {Verticals[leftVerticalSelected].description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="backgroundColumn-2--bottomSide"></div>
            </div>
            <div className="hero__backgroundColumn hero__backgroundColumn-3">
              <figure
                className={`hero__logo ${isVisible ? "isVisible" : "isHidden"}`}
              >
                <RoundedAvatar
                  avatar="/img/indigo2024/logo-indigo-solo.png"
                  sx={{ width: "100%", height: "100%" }}
                />
              </figure>
              <h3 className="hero__title">{MainConstants.mainTitle}</h3>
              <h6 className="hero__text">{MainConstants.mainSubtitle}</h6>
              <RoundedButton
                text={"¡Quiero Indigo!"}
                sx={{
                  backgroundColor: "#7945EF",
                  width: "220px",
                  border: "none",
                  fontWeight: "bold",
                  letterSpacing: "1.8px",
                }}
                onClick={() => scrollToSection("contacto")}
              />
            </div>
            <div className="hero__backgroundColumn hero__backgroundColumn-4">
              <div className="backgroundColumn-4--upperSide">
                <div className="hero__chalkboard">
                  <div className="hero__chalkboard-dot top-left-dot"></div>
                  <div className="hero__chalkboard-dot top-right-dot"></div>
                  <div className="hero__chalkboard-dot bottom-left-dot"></div>
                  <div className="hero__chalkboard-dot bottom-right-dot"></div>
                  <div
                    className={`${rightVerticalChanging ? "customFade" : ""}`}
                  >
                    <h4
                      className="hero__chalkboard--title"
                      style={{
                        color: Verticals[rightVerticalSelected].color,
                      }}
                    >
                      {Verticals[rightVerticalSelected].title}
                    </h4>
                    <p className="hero__chalkboard--description">
                      {Verticals[rightVerticalSelected].description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="backgroundColumn-4--bottomSide"></div>
            </div>
            <div className="hero__backgroundColumn hero__backgroundColumn-5">
              <figure className="hero__backgroundColumn-dot">
                <Image
                  src="/img/indigo2024/dot.png"
                  layout="fill"
                  alt="Imagen de punto"
                />
              </figure>
              <figure className="hero__backgroundColumn-5--dots">
                <Image
                  src="/img/indigo2024/tech-dots.png"
                  layout="fill"
                  alt="Imagen de puntos tecnologicos"
                />
              </figure>
              <figure
                className="hero__rightCircle"
                style={{
                  boxShadow:
                    rightVerticalSelected === "AI"
                      ? "0 0 20px 10px rgba(255, 255, 255, 0.5)"
                      : "none",
                }}
                onClick={() => setRightVerticalSelected("AI")}
              >
                <Image
                  src="/img/indigo2024/ai.png"
                  layout="fill"
                  alt="Imagen de Inteligencia Artificial."
                />
              </figure>
              <figure
                className="hero__rightCircle"
                style={{
                  boxShadow:
                    rightVerticalSelected === "API"
                      ? "0 0 20px 10px rgba(255, 255, 255, 0.5)"
                      : "none",
                }}
                onClick={() => setRightVerticalSelected("API")}
              >
                <Image
                  src="/img/indigo2024/api.png"
                  layout="fill"
                  alt="Imagen de API"
                />
              </figure>
            </div>
          </div>
          <div className="hero__bottomContainer">
            <figure className="hero__floor">
              <Image
                src="/img/indigo2024/bannerFloor.png"
                layout="fill"
                alt="Imagen de piso"
              />
            </figure>
            <figure className="hero__left-plant">
              <Image
                src="/img/indigo2024/blue-plant.png"
                layout="fill"
                alt="Imagen de planta azul"
              />
            </figure>
            <figure className="hero__right-plant">
              <Image
                src="/img/indigo2024/green-plant.png"
                layout="fill"
                alt="Imagen de planta verde"
              />
            </figure>
            <figure className="hero__yoga">
              <Image
                src="/img/indigo2024/illustration-yoga.png"
                layout="fill"
                alt="Imagen de yoga"
              />
            </figure>
            <figure className="hero__coaches">
              <Image
                src="/img/indigo2024/illustration_coaches.png"
                layout="fill"
                alt="Imagen de coaches"
              />
            </figure>
            <figure className="hero__fitness">
              <Image
                src="/img/indigo2024/illustration-fitness.png"
                layout="fill"
                alt="Imagen de fitness"
              />
            </figure>
            <figure className="hero__healthy">
              <Image
                src="/img/indigo2024/illustration-healthy.png"
                layout="fill"
                alt="Imagen de alimentación"
              />
            </figure>
            <figure className="hero__meditation">
              <Image
                src="/img/indigo2024/illustration-meditation.png"
                layout="fill"
                alt="Imagen de meditación"
              />
            </figure>
          </div>
        </section>
      ) : (
        <section className="hero__main">
          <div className="hero__upperContainer">
            <div className="hero__backgroundColumn hero__backgroundColumn-3">
              <figure
                className={`hero__logo ${isVisible ? "isVisible" : "isHidden"}`}
              >
                <RoundedAvatar
                  avatar="/img/indigo2024/logo-indigo-solo.png"
                  sx={{ width: "100%", height: "100%" }}
                />
              </figure>
              <h3 className="hero__title">Wellness and Habit Tracking</h3>
              <h6 className="hero__text">
                B2B and B2C Solutions with habit tracking healthcare
              </h6>
              <RoundedButton
                text={"¡Quiero Indigo!"}
                sx={{
                  backgroundColor: "#7945EF",
                  width: "220px",
                  border: "none",
                  fontWeight: "bold",
                  letterSpacing: "1.8px",
                }}
                onClick={() => scrollToSection("contacto")}
              />
            </div>
          </div>
          <div className="hero__bottomContainer">
            <figure className="hero__floor">
              <Image
                src="/img/indigo2024/bannerFloor.png"
                layout="fill"
                alt="Imagen de piso"
              />
            </figure>
            <figure className="hero__left-plant">
              <Image
                src="/img/indigo2024/blue-plant.png"
                layout="fill"
                alt="Imagen de planta azul"
              />
            </figure>
            <figure className="hero__right-plant">
              <Image
                src="/img/indigo2024/green-plant.png"
                layout="fill"
                alt="Imagen de planta verde"
              />
            </figure>
            <figure className="hero__coaches">
              <Image
                src="/img/indigo2024/illustration-coaches.png"
                layout="fill"
                alt="Imagen de coaches"
              />
            </figure>
          </div>
        </section>
      )}

      <section className="hero__cards--mainContainer">
        <h1 className="hero__cards-title">Soluciones que ofrecemos</h1>
        <div className="hero__cardsContainer">
          <CustomCard
            title={"B2C"}
            logo={"/img/indigo2024/b2c.png"}
            url={"/b2c"}
            text={MainConstants.b2cText}
          />
          <CustomCard
            title={"B2B"}
            logo={"/img/indigo2024/b2b.png"}
            url={"/b2b"}
            text={MainConstants.b2bText}
          />
          <CustomCard
            title={"White Label"}
            logo={"/img/indigo2024/brand.png"}
            url={"/white-label"}
            text={MainConstants.whiteLabelText}
          />
        </div>
      </section>
    </main>
  );
}
