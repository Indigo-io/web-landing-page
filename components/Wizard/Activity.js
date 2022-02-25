import { useForm } from "react-hook-form";

export default function Step2({ nextStep, previousStep, dispatch }) {
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
              ¿Qué actividades te gustaría incorporar en tu rutina diaria?
            </h3>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="fitnessActivities-0"
                value="Entrenamiento funcional"
                {...register("fitnessActivities")}
              />
              <label htmlFor="fitnessActivities-0">
                Entrenamiento funcional
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="fitnessActivities-2"
                value="Yoga"
                {...register("fitnessActivities")}
              />
              <label htmlFor="fitnessActivities-2">Yoga</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="fitnessActivities-3"
                value="Ejercicios aeróbicos"
                {...register("fitnessActivities")}
              />
              <label htmlFor="fitnessActivities-3">Ejercicios aeróbicos</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="fitnessActivities-4"
                value="Crossfit"
                {...register("fitnessActivities")}
              />
              <label htmlFor="fitnessActivities-4">Crossfit</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="fitnessActivities-3"
                value="Correr"
                {...register("fitnessActivities")}
              />
              <label htmlFor="fitnessActivities-3">Correr</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="fitnessActivities-4"
                value="Pausas activas"
                {...register("fitnessActivities")}
              />
              <label htmlFor="fitnessActivities-4">Pausas activas</label>
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
