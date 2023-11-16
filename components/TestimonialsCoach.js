import React from "react";
import { RoundedAvatar } from "./uiComponents/RoundedAvatar";
import { CoachConstants } from "./constants/coachConstants";

export default function TestimonialsCoach() {
  return (
    <section className="testimonials__background">
      <div className="container">
        <div className="testimonials__mainContainer" id="testimonios">
          <p className="testimonials__mainTitle">Testimonios</p>
          <div className="testimonals__container">
            {CoachConstants.testimonialsInfo.map((item) => (
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
