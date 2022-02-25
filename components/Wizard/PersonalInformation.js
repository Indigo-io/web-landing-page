import { useForm } from "react-hook-form";

export default function PersonalInformation({
  nextStep,
  previousStep,
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
    reset();
    nextStep();
  };

  return (
    <div className="wizard-step">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <h3 className="start-now__label">
              ¿Cuál es tu fecha de nacimiento?
            </h3>
            <input
              type="date"
              placeholder="¿Cuál es tu fecha de nacimiento?"
              className={`form-control step__input ${
                errors.birthDate ? "is-invalid" : ""
              }`}
              {...register("birthDate", { required: true })}
            />
            <div className="invalid-feedback">Este valor es requerido.</div>
          </div>

          <div className="mb-1">
            <h3 className="start-now__label">
              ¿Con qué género te sentís identificado?
            </h3>
            <div className="mb-2 form-check">
              <input
                type="radio"
                id="gender-0"
                value="FEMALE"
                className={`form-check-input ${
                  errors.gender ? "is-invalid" : ""
                }`}
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
                value="MALE"
                className={`form-check-input ${
                  errors.gender ? "is-invalid" : ""
                }`}
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
                value="OTHER"
                className={`form-check-input ${
                  errors.gender ? "is-invalid" : ""
                }`}
                {...register("gender", { required: true })}
              />
              <label className="form-check-label" htmlFor="genero-4">
                Otro
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
