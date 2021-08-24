import { useForm } from "react-hook-form";

export default function Step2({
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
    setProgress(87.5);
    reset();
    nextStep();
  };

  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">Cuentanos sobre ti </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="activities">
              ¿Cuál de estas actividades te gusta o te gustaría realizar?
            </label>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="activities-0"
                value="Entrenamiento Funcional"
                {...register("activities")}
              />
              <label htmlFor="activities-0">Entrenamiento Funcional</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="activities-1"
                value="Crossfit"
                {...register("activities")}
              />
              <label htmlFor="activities-1">Crossfit</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="activities-2"
                value="Yoga"
                {...register("activities")}
              />
              <label htmlFor="activities-2">Yoga</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="activities-3"
                value="Pilates"
                {...register("activities")}
              />
              <label htmlFor="activities-3">Pilates</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="activities-4"
                value="Running"
                {...register("activities")}
              />
              <label htmlFor="activities-4">Running</label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="relaxActivities">
              ¿Cuál es tu actividad de relajación favorita?
            </label>
            <textarea
              className={`form-control ${
                errors.relaxActivities ? "is-invalid" : ""
              }`}
              {...register("relaxActivities", { required: true })}
            ></textarea>
            <div className="invalid-feedback">Este valor es requerido.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="investment">
              ¿Cuánto tiempo semanal estás dispuesto a invertir? Mente y cuerpo,
              no te olvides!
            </label>
            <select
              className={`form-select ${errors.investment ? "is-invalid" : ""}`}
              {...register("investment", { required: true })}
            >
              <option value="1">Una hora o menos</option>
              <option value="2">Hasta dos horas</option>
              <option value="3">Hasta cinco horas</option>
              <option value="4">Hasta diez horas</option>
              <option value="5">¡Lo que haga falta!!!</option>
            </select>
            <div className="invalid-feedback">Este valor es requerido.</div>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setProgress(62.5);
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
