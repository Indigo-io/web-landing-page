import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        toast.success("Tu mensaje ha sido enviado. ¡Muchas gracias!");
        console.log(data);
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Ups algo pasó, intenta nuevamente!");
      });
  };

  return (
    <div className="contact" id="contacto">
      <Toaster />
      <div className="container">
        <h2 className="contact__title">Contacto</h2>
        <p className="contact__text">¿En qué podemos ayudarte?</p>
        <div className="contact__wrapper">
          <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
            <div className="row">
              <h4 className="contact__form--title">Envianos un mensaje!</h4>
              <div className="col-md-12 mb-4 form-group">
                <input
                  placeholder="Tu nombre"
                  className={`form-control contact__input ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  {...register("name", { required: true })}
                />
                <div className="invalid-feedback">Este valor es requerido.</div>
              </div>
              <div className="col-md-12 form-group mt-3 mt-md-0">
                <input
                  placeholder="Tu email"
                  type="email"
                  className={`form-control contact__input ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  {...register("email", { required: true })}
                />
                <div className="invalid-feedback">Este valor es requerido.</div>
              </div>
              <div className="col-md-12 form-group mt-3 mb-4">
                <textarea
                  rows="8"
                  placeholder="Tu mensaje"
                  className={`form-control contact__textarea ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  {...register("message", { required: true })}
                ></textarea>
                <div className="invalid-feedback">Este valor es requerido.</div>
              </div>

              <div>
                <button
                  type="submit"
                  className="contact__btn"
                  disabled={isLoading ? true : false}
                >
                  {isLoading && (
                    <>
                      <span
                        className="spinner-border spinner-border-sm mr-1"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Loading...</span>
                    </>
                  )}{" "}
                  Enviar
                </button>
              </div>
            </div>
          </form>
          <div className="contact__location">
            <div className="contact__info">
              <div className="contact__info--item">
                <span className="bi bi-geo-alt contact__icon"></span>
                <p className="contact__info--text">
                  Usina Cowroking, Castillo 1366,
                  <br /> Buenos Aires - Argentina
                </p>
              </div>
              <div className="contact__info--item">
                <span className="bi bi-phone contact__icon"></span>
                <p className="contact__info--text">+54 9 11 2854 4896</p>
              </div>
              <div className="contact__info--item">
                <span className="bi bi-envelope contact__icon"></span>
                <p className="contact__info--text">info@indigobalance.com</p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.578112841628!2d-58.44262579818009!3d-34.588443437333936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f346654215%3A0x275d46b3d4cba86f!2sUsina%20Coworking!5e0!3m2!1ses-419!2sar!4v1641346002096!5m2!1ses-419!2sar"
              className="contact__map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
