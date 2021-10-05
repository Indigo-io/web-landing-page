import { useForm } from "react-hook-form";

export default function Step4({
  nextStep,
  previousStep,
  setProgress,
  dispatch,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    dispatch({ type: "update", payload: data });
    setProgress(37.5);
    reset();
    nextStep();
  };

  return (
    <div className="wizard-step">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <h3>¿Cuánto medís? Si no te acordás, aproximado.</h3>
            <div className="input-group">
              <input
                type="number"
                placeholder="Ej: 170"
                className={`form-control ${errors.height ? "is-invalid" : ""}`}
                {...register("height", { required: true })}
              />
              <span className="input-group-text">cm</span>
              <div className="invalid-feedback">Este valor es requerido.</div>
            </div>
          </div>

          <div className="mb-3">
            <h3>¿Cuánto pesas? Si no te acordás, aproximado.</h3>
            <div className="input-group">
              <input
                name="weight"
                type="number"
                step="0.1"
                placeholder="Ej: 85"
                className={`form-control ${errors.weight ? "is-invalid" : ""}`}
                {...register("weight", { required: true })}
              />
              <span className="input-group-text">kg</span>
              <div className="invalid-feedback">Este valor es requerido.</div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setProgress(12.5);
                previousStep();
              }}
            >
              Atras
            </button>
            <input
              type="submit"
              className="btn btn-primary"
              value="Continuar"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
