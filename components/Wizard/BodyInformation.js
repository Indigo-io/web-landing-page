import { useForm } from "react-hook-form";

export default function BodyInformation({ nextStep, previousStep, dispatch }) {
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
              ¿Cuánto medís? Si no te acordás, aproximado.
            </h3>
            <div className="input-group">
              <input
                type="number"
                placeholder="Ej: 170"
                className={`form-control step__input--unit ${
                  errors.height ? "is-invalid" : ""
                }`}
                {...register("height", { required: true })}
              />
              <span className="input-group-text step__input--unit-right">
                cm
              </span>
              <div className="invalid-feedback">Este valor es requerido.</div>
            </div>
          </div>

          <div className="mb-3">
            <h3 className="start-now__label">
              ¿Cuánto pesas? Si no te acordás, aproximado.
            </h3>
            <div className="input-group">
              <input
                name="weight"
                type="number"
                step="0.1"
                placeholder="Ej: 85"
                className={`form-control step__input--unit ${
                  errors.weight ? "is-invalid" : ""
                }`}
                {...register("weight", { required: true })}
              />
              <span className="input-group-text step__input--unit-right">
                kg
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
            <input
              type="submit"
              className="step__btn--continue"
              value="Continuar"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
