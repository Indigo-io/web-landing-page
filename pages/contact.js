import LayoutSimple from "components/LayoutSimple";
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
        toast.success("Tu mensaje ha sido enviado. Muchas gracias!");
        console.log(data);
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error("Ups algo paso, intenta nuevamente!");
      });
  };

  return (
    <LayoutSimple title="Hablemos!">
      <Toaster />
      <main id="main">
        <section className="section">
          <div className="container">
            <div className="row mb-5 align-items-end">
              <div className="col-md-6" data-aos="fade-up">
                <h2>Formulario de contacto</h2>
                <p className="mb-0">
                  Escribinos tu consulta y te contestaremos a la brevedad!
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 ms-auto order-2" data-aos="fade-up">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong className="d-block mb-1">Dirección</strong>
                    <span>
                      Usina Cowroking, Castillo 1366, Buenos Aires - Argentina
                    </span>
                  </li>
                  <li className="mb-3">
                    <strong className="d-block mb-1">Celular</strong>
                    <span>+54 9 11 2854 4896</span>
                  </li>
                  <li className="mb-3">
                    <strong className="d-block mb-1">Mail</strong>
                    <span>ipa@indigobalance.com</span>
                  </li>
                </ul>
              </div>

              <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="name">Nombre</label>
                      <input
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        {...register("name", { required: true })}
                      />
                      <div className="invalid-feedback">
                        Este valor es requerido.
                      </div>
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        {...register("email", { required: true })}
                      />
                      <div className="invalid-feedback">
                        Este valor es requerido.
                      </div>
                    </div>
                    <div className="col-md-12 form-group mt-3">
                      <label htmlFor="subject">Asunto</label>
                      <input
                        className={`form-control ${
                          errors.subject ? "is-invalid" : ""
                        }`}
                        {...register("subject", { required: true })}
                      />
                      <div className="invalid-feedback">
                        Este valor es requerido.
                      </div>
                    </div>
                    <div className="col-md-12 form-group mt-3 mb-4">
                      <label htmlFor="name">Mensaje</label>
                      <textarea
                        className={`form-control ${
                          errors.message ? "is-invalid" : ""
                        }`}
                        {...register("message", { required: true })}
                      ></textarea>
                      <div className="invalid-feedback">
                        Este valor es requerido.
                      </div>
                    </div>

                    <div className="d-grid gap-2">
                      <button
                        type="submit"
                        className="btn btn-primary "
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
        </section>
      </main>
    </LayoutSimple>
  );
}
