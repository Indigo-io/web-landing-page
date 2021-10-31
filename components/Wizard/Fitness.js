import { useForm } from "react-hook-form";

export default function Fitness({
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
    dispatch({
      type: "update",
      payload: {
        ...data,
        doFitness: data.doFitness === "true" ? true : false,
        fitnessActivity: data.doFitness === "true" ? data.fitnessActivity : "",
        fitnessFrequency:
          data.doFitness === "true" ? data.fitnessFrequency : "",
      },
    });
    setProgress(80);
    reset();
    nextStep();
  };

  return (
    <div className="wizard-step">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <h3>Realizas actividad física?</h3>
            <div className="mb-2 form-check">
              <input
                type="radio"
                id="response-0"
                value={true}
                className={`form-check-input ${
                  errors.fitness ? "is-invalid" : ""
                }`}
                {...register("doFitness", { required: true })}
              />
              <label className="form-check-label" htmlFor="response-0">
                Si
              </label>
            </div>
            <div className="mb-2 form-check">
              <input
                type="radio"
                id="response-1"
                value={false}
                className={`form-check-input ${
                  errors.fitness ? "is-invalid" : ""
                }`}
                {...register("doFitness", { required: true })}
              />
              <label className="form-check-label" htmlFor="response-1">
                No
              </label>
            </div>
          </div>
          <div className="mb-3">
            <h3>¿Qué actividad realizas?</h3>
            <input
              placeholder="Ej: Crossfit"
              name="fitnessActivity"
              className={`form-control`}
              {...register("fitnessActivity")}
            />
            <div className="invalid-feedback">Este valor es requerido.</div>
          </div>
          <div className="mb-3">
            <h3>¿Con qué frecuencia?</h3>
            <select className={`form-select`} {...register("fitnessFrequency")}>
              <option value="Hasta 1 hora semanal">Hasta 1 hora semanal</option>
              <option value="Hasta 3 horas semanales">
                Hasta 3 horas semanales
              </option>
              <option value="Más de 3 horas semanales">
                Más de 3 horas semanales
              </option>
            </select>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setProgress(75);
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
