import { useForm } from "react-hook-form";

export default function Diseases({ nextStep, previousStep, dispatch }) {
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
              ¿Tenés alguna lesión o dolor recurrente?
            </h3>
            <textarea
              placeholder="Lesión o dolor"
              className={`form-control step__textarea ${
                errors.diseases ? "is-invalid" : ""
              }`}
              {...register("diseases", { required: true })}
            ></textarea>
            <div className="invalid-feedback">Este valor es requerido.</div>
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
