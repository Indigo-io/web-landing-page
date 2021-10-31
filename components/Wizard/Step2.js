import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function Step2({
  nextStep,
  previousStep,
  setProgress,
  dispatch,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    const url =
      "https://script.google.com/macros/s/AKfycbwowDiLeL7tuiwWwcSG0Q3OW_G6qpeU03BfmglrjQ6USAdtuKKmbvS9pNOf92fkSdqw/exec";
    const formData = new FormData();
    const arrayData = Object.entries(data);

    arrayData.forEach((item) => {
      formData.append(item[0], item[1]);
    });
    axios
      .post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        dispatch({
          type: "update",
          payload: { ...data, fullName: `${data.name} ${data.lastName}` },
        });
        setProgress(12.5);
        reset();
        nextStep();
        setIsLoading(false);
      });
  };

  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">
          Necesitamos algunos datos para ponernos en contacto
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name">Nombre</label>
            <input
              placeholder="Ej: Juan"
              name="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("name", { required: true })}
            />
            <div className="invalid-feedback">Este valor es requerido.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Apellido</label>
            <input
              placeholder="Ej: Gomez"
              name="lastName"
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
              {...register("lastName", { required: true })}
            />
            <div className="invalid-feedback">Este valor es requerido.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="Ej: juangomez@email.com"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", { required: true })}
            />
            <div className="invalid-feedback">Este valor es requerido.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="tel">¿Cuál es tu número de teléfono celular?</label>
            <input
              name="tel"
              type="text"
              placeholder="Ej: 1155555555"
              className={`form-control ${errors.tel ? "is-invalid" : ""}`}
              {...register("tel", { required: true })}
            />
            <div className="invalid-feedback">Este valor es requerido.</div>
          </div>
          <div>
            <input
              type="hidden"
              name="createDate"
              value={new Date()}
              {...register("createDate")}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setProgress(0);
                previousStep();
              }}
            >
              Atrás
            </button>
            <button
              type="submit"
              className="btn btn-primary"
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
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
