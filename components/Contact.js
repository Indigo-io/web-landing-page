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
    <div className="contact">
      <div className="container">
        <h2 className="contact__title">Contacto</h2>
        <p className="contact__text">¿En qué podemos ayudarte?</p>
        <div className="contact__wrapper">
          <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
            <div className="row">
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
                  placeholder="Tu mensaje"
                  className={`form-control ${
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
        </div>
      </div>
    </div>
  );
}
