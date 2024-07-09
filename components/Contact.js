import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

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
    fetch(
      "https://script.google.com/macros/s/AKfycbzx_yD46l5nAKJ3dXnKu2dHfF11nyMQ59IyBp8VjjrzZsf-veXh9Vs6HCjpNAXM0v6n/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
        console.log("Error en la solicitud");
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
              <div
                className="contact__form--input"
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    placeholder="Nombre"
                    className={`form-control contact__input ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    {...register("name", { required: true })}
                  />
                  <div className="invalid-feedback">Campo requerido.</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    placeholder="Apellido"
                    className={`form-control contact__input ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    {...register("lastName", { required: true })}
                  />
                  <div className="invalid-feedback">Campo requerido.</div>
                </div>
              </div>
              <div
                className="contact__form--input"
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    placeholder="Ciudad"
                    className={`form-control contact__input ${
                      errors.city ? "is-invalid" : ""
                    }`}
                    {...register("city", { required: false })}
                  />
                  <div className="invalid-feedback">Campo requerido.</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    placeholder="País"
                    className={`form-control contact__input ${
                      errors.country ? "is-invalid" : ""
                    }`}
                    {...register("country", { required: false })}
                  />
                  <div className="invalid-feedback">Campo requerido.</div>
                </div>
              </div>
              <div className="contact__form--input">
                <input
                  placeholder="Email"
                  type="email"
                  className={`form-control contact__input ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  {...register("email", { required: true })}
                />
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="contact__form--input">
                <input
                  placeholder="Telefono"
                  type="number"
                  className={`form-control contact__input ${
                    errors.phoneNumber ? "is-invalid" : ""
                  }`}
                  {...register("phoneNumber", { required: false })}
                />
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="contact__form--input cursor--pointer">
                <select
                  className={`form-control contact__input ${
                    errors.reason ? "is-invalid" : ""
                  }`}
                  {...register("reason", { required: false })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Consulta
                  </option>
                  <option value="Quiero Saber Mas">Quiero saber mas</option>
                  <option value="Precios">Precios</option>
                  <option value="Otros">Otros</option>
                </select>
                <div className="contact__form--input-icon">
                  <KeyboardArrowDownIcon />
                </div>
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="col-md-12 form-group mt-3 mb-4">
                <textarea
                  rows="8"
                  placeholder="Comentarios"
                  className={`form-control contact__textarea ${
                    errors.comments ? "is-invalid" : ""
                  }`}
                  {...register("comments", { required: true })}
                ></textarea>
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="contact__form--input cursor--pointer">
                <select
                  className={`form-control contact__input ${
                    errors.howKnow ? "is-invalid" : ""
                  }`}
                  {...register("howKnow", { required: true })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Como nos conociste?
                  </option>
                  <option value="Linkedin">Linkedin</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Referido">Referido</option>
                </select>
                <div className="contact__form--input-icon">
                  <KeyboardArrowDownIcon />
                </div>
                <div className="invalid-feedback">Campo requerido.</div>
              </div>
              <div className="contact__form--input">
                <input
                  placeholder="Empresa"
                  className={`form-control contact__input ${
                    errors.company ? "is-invalid" : ""
                  }`}
                  {...register("company", { required: false })}
                />
                <div className="invalid-feedback">Campo requerido.</div>
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.578112841628!2d-58.44262579818009!3d-34.588443437333936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f346654215%3A0x275d46b3d4cba86f!2sUsina%20Coworking!5e0!3m2!1ses-419!2sar!4v1641346002096!5m2!1ses-419!2sar"
              className="contact__map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="contact__info">
              <div className="contact__info--item">
                <Image
                  style={{ marginRight: "1rem" }}
                  src="/img/indigo2024/location2-icon.png"
                  width={52}
                  height={52}
                />
                <p className="contact__info--text">
                  Usina Coworking, Castillo 1366,
                  <br /> Buenos Aires - Argentina
                </p>
              </div>
              <div className="contact__info--item">
                <Image
                  style={{ marginRight: "1rem" }}
                  src="/img/indigo2024/phone-icon.png"
                  width={52}
                  height={52}
                />
                <p className="contact__info--text">+54 9 11 2854 4896</p>
              </div>
              <div className="contact__info--item">
                <Image
                  style={{ marginRight: "1rem" }}
                  src="/img/indigo2024/mail2-icon.png"
                  width={52}
                  height={52}
                />
                <p className="contact__info--text">info@indigobalance.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
