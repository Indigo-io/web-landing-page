import Image from "next/image";
import React from "react";
import { B2bConstants } from "./constants/b2bConstants";
import { RoundedAvatar } from "./uiComponents/RoundedAvatar";

export default function Testimonials2() {
  return (
    <section className="testimonials__background">
      <div className="container">
        <div className="testimonials__mainContainer" id="testimonios">
          <p className="testimonials__mainTitle">Testimonios</p>
          <div className="testimonals__container">
            {B2bConstants.testimonialsInfo.map((item) => (
              <div className="testimonials__item" key={item.name}>
                <div className="testimonials__person">
                  <div className="testimonials__imageContainer">
                    <RoundedAvatar avatar={item.imagePath} />
                  </div>
                  <p className="testimonials__name">{item.name}</p>
                </div>
                <p className="testimonials__text">
                  {item.text}
                  {/* Boton */}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
