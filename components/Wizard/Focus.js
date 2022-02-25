import { useForm } from "react-hook-form";

export default function Focus({ nextStep, previousStep, dispatch }) {
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
              ¿Sobre qué te gustaría trabajar?
            </h3>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="mindActivities-0"
                value="Aprender a meditar"
                {...register("mindActivities")}
              />
              <label htmlFor="mindActivities-0">Aprender a meditar</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="mindActivities-1"
                value="Mejorar mi memoria"
                {...register("mindActivities")}
              />
              <label htmlFor="mindActivities-1">Mejorar mi memoria</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="mindActivities-2"
                value="Disminuir mi ansiedad"
                {...register("mindActivities")}
              />
              <label htmlFor="mindActivities-2">Disminuir mi ansiedad</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="mindActivities-3"
                value="Dormir mejor"
              />
              <label htmlFor="mindActivities-3">Dormir mejor </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="mindActivities-4"
                value="Organizar mi rutina diaria"
                {...register("mindActivities")}
              />
              <label htmlFor="mindActivities-4">
                Organizar mi rutina diaria
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
