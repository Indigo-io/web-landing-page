import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Referred({ nextStep, previousStep, state, dispatch }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    dispatch({ type: "update", payload: data });

    fetch("/api/firebase", {
      method: "POST",
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("/api/calendar", {
          method: "POST",
          body: JSON.stringify(state),
        }).then((response) => {
          toast.success("Tu mensaje ha sido enviado. ¡Muchas gracias!");
          reset();
          nextStep();
          setIsLoading(false);
        });
      })
      .catch((err) => {
        toast.error("Ups algo pasó, intenta nuevamente!");
        setIsLoading(false);
      });
  };

  return (
    <div className="wizard-step">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="start-now__label">¿Tenés un código de referido?</h3>
          <div className="mb-3">
            <input
              placeholder="Código de referido"
              name="referredCode"
              className={`form-control step__input ${
                errors.name ? "is-invalid" : ""
              }`}
              {...register("referredCode", { required: false })}
            />
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
            <button
              type="submit"
              className="step__btn--continue"
              disabled={isLoading}
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
        </form>
      </div>
    </div>
  );
}
