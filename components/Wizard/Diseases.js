import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Diseases({
  previousStep,
  setProgress,
  dispatch,
  state,
  nextStep,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true);
    dispatch({ type: "update", payload: data });
    setProgress(100);

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
          <div className="mb-3">
            <h3 className="start-now__label">
              Por último ¿Tenés alguna enfermedad o condición clínica de base?
            </h3>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-0"
                value="Problemas de presión arterial"
                {...register("diseases")}
              />
              <label htmlFor="diseases-0">Problemas de presión arterial</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-1"
                value="Hipo/hiper tiroidismo"
                {...register("diseases")}
              />
              <label htmlFor="diseases-1">Hipo/hiper tiroidismo</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-2"
                value="Afecciones cardíacas"
                {...register("diseases")}
              />
              <label htmlFor="diseases-2">Afecciones cardíacas</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-3"
                value="Afecciones respiratorias"
                {...register("diseases")}
              />
              <label htmlFor="diseases-3">Afecciones respiratorias</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-4"
                value="Alergias"
                {...register("diseases")}
              />
              <label htmlFor="diseases-4">Alergias</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-5"
                value="Fracturas, luxaciones o lesiones ligamentarias"
                {...register("diseases")}
              />
              <label htmlFor="diseases-5">
                Fracturas, luxaciones o lesiones ligamentarias
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-6"
                value="Problemas gastrointestinales"
                {...register("diseases")}
              />
              <label htmlFor="diseases-6">Problemas gastrointestinales</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-7"
                value="Anemia"
                {...register("diseases")}
              />
              <label htmlFor="diseases-7">Anemia</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-8"
                value="Otra"
                {...register("diseases")}
              />
              <label htmlFor="diseases-8">Otra</label>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="step__btn--back"
              onClick={() => {
                setProgress(75);
                previousStep();
              }}
            >
              Atrás
            </button>
            <button
              type="submit"
              className="step__btn--continue"
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
        </form>
      </div>
    </div>
  );
}
