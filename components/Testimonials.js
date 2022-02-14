import React from "react";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h3 className="testimonials__title">Testimonios</h3>
        <div className="testimonials__cards">
          <div className="testimonials__card">
            <img className="testimonials__card--photo" src="img/person.png" />
            <div className="testimonials__summary">
              <p className="testimonials__summary--text">
                Get a fully retina ready site when you build with Startup
                Framework. Websites look sharper and more gorgeous on devices
                with retina display support
              </p>
              <span className="testimonials__summary--name">Juan Perez</span>
            </div>
          </div>
          <div className="testimonials__card">
            <img className="testimonials__card--photo" src="img/person.png" />
            <div className="testimonials__summary">
              <p className="testimonials__summary--text">
                Get a fully retina ready site when you build with Startup
                Framework. Websites look sharper and more gorgeous on devices
                with retina display support
              </p>
              <span className="testimonials__summary--name">Juan Perez</span>
            </div>
          </div>
          <div className="testimonials__card">
            <img className="testimonials__card--photo" src="img/person.png" />
            <div className="testimonials__summary">
              <p className="testimonials__summary--text">
                Get a fully retina ready site when you build with Startup
                Framework. Websites look sharper and more gorgeous on devices
                with retina display support
              </p>
              <span className="testimonials__summary--name">Juan Perez</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
