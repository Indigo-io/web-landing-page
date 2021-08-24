import { useForm } from "react-hook-form";

export default function Step3({
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
    setProgress(25);
    reset();
    nextStep();
  };

  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">Cuentanos sobre ti</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="age">¿Cuál es tu edad?</label>
            <input
              type="number"
              placeholder="Ej: 30"
              className={`form-control ${errors.age ? "is-invalid" : ""}`}
              {...register("age", { required: true })}
            />
            <div className="invalid-feedback">Este valor es requerido.</div>
          </div>

          <div className="mb-1">
            <label htmlFor="gender">
              ¿Con qué género te sentís identificado?
            </label>
            <div className="mb-2 form-check">
              <input
                type="radio"
                id="gender-0"
                value="Mujer"
                className={`form-check-input ${errors.age ? "is-invalid" : ""}`}
                {...register("gender", { required: true })}
              />
              <label className="form-check-label" htmlFor="genero-0">
                Mujer
              </label>
            </div>
            <div className="mb-2 form-check">
              <input
                type="radio"
                id="gender-1"
                value="Hombre"
                className={`form-check-input ${errors.age ? "is-invalid" : ""}`}
                {...register("gender", { required: true })}
              />
              <label className="form-check-label" htmlFor="genero-1">
                Hombre
              </label>
            </div>
            <div className="mb-2 form-check">
              <input
                type="radio"
                id="gender-4"
                value="Otro"
                className={`form-check-input ${errors.age ? "is-invalid" : ""}`}
                {...register("gender", { required: true })}
              />
              <label className="form-check-label" htmlFor="genero-4">
                Otro
              </label>
            </div>
            <div className="mb-2 form-check">
              <input
                type="radio"
                id="gender-2"
                value="Prefiero no decirlo"
                className={`form-check-input ${errors.age ? "is-invalid" : ""}`}
                {...register("gender", { required: true })}
              />
              <label className="form-check-label" htmlFor="genero-2">
                Prefiero no decirlo
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="profession">¿Cuál es tu profesión? </label>
            <input
              placeholder="Ej: Abogado"
              className={`form-control ${
                errors.profession ? "is-invalid" : ""
              }`}
              {...register("profession", { required: true })}
            />
            <div className="invalid-feedback">Este valor es requerido.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="household">¿Con quién(es) vivís? </label>
            <input
              placeholder="Ej: Familia"
              className={`form-control ${errors.household ? "is-invalid" : ""}`}
              {...register("household", { required: true })}
            />
            <div className="invalid-feedback">Este valor es requerido.</div>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setProgress(0);
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
