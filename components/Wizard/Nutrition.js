import { useForm } from "react-hook-form";

export default function Nutrition({ nextStep, previousStep, dispatch }) {
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
              ¿Te gustaría cambiar algo de tu alimentación?
            </h3>
            <div className="form-check">
              <input
                type="checkbox"
                id="nutritionActivities-0"
                value="Tomar más agua"
                className="form-check-input"
                {...register("nutritionActivities")}
              />
              <label htmlFor="nutritionActivities-0">Tomar más agua</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="nutritionActivities-1"
                value="Comer más variado"
                className="form-check-input"
                {...register("nutritionActivities")}
              />
              <label htmlFor="nutritionActivities-1">Comer más variado</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="nutritionActivities-2"
                value="Organizar mejor mis comidas"
                className="form-check-input"
                {...register("nutritionActivities")}
              />
              <label htmlFor="nutritionActivities-2">
                Organizar mejor mis comidas
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="nutritionActivities-3"
                value="Hacer distintas recetas"
                className="form-check-input"
                {...register("nutritionActivities")}
              />
              <label htmlFor="nutritionActivities-3">
                Hacer distintas recetas
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="nutritionActivities-4"
                value="Cambiar mi manera de comer"
                className="form-check-input"
                {...register("nutritionActivities")}
              />
              <label htmlFor="nutritionActivities-4">
                Cambiar mi manera de comer
              </label>
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
