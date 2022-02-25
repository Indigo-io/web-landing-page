import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Investment({ previousStep, dispatch, nextStep }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch({ type: "update", payload: data });
    reset();
    nextStep();
  };

  return (
    <div className="wizard-step">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <h3 className="start-now__label">
              ¿Cuánto tiempo podés invertir por semana?
            </h3>
            <div className="input-group">
              <input
                type="number"
                placeholder="Tiempo a invertir"
                className={`form-control step__input--unit ${
                  errors.investment ? "is-invalid" : ""
                }`}
                {...register("investment", { required: true })}
              />
              <span className="input-group-text step__input--unit-right">
                hr
              </span>
              <div className="invalid-feedback">Este valor es requerido.</div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="step__btn--back"
              onClick={() => {
                previousStep();
              }}
            >
              Atrás
            </button>
            <button type="submit" className="step__btn--continue">
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
