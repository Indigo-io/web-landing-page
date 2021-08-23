import { useForm } from "react-hook-form";

export default function Step7({ nextStep, previousStep, setProgress }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setProgress(75);
    reset();
    nextStep();
  };

  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">Cuentanos sobre ti</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="focus">
              ¿Cómo describirías tu alimentación actual?
            </label>
            <div className="col-md-12">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="food"
                  id="food-0"
                  value="1"
                  className={`form-check-input ${
                    errors.food ? "is-invalid" : ""
                  }`}
                  {...register("food", { required: true })}
                />
                1<label className="form-check-label" htmlFor="food-0"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="food"
                  id="food-1"
                  value="2"
                  className={`form-check-input ${
                    errors.food ? "is-invalid" : ""
                  }`}
                  {...register("food", { required: true })}
                />
                2<label className="form-check-label" htmlFor="food-1"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="food"
                  id="food-2"
                  value="3"
                  className={`form-check-input ${
                    errors.food ? "is-invalid" : ""
                  }`}
                  {...register("food", { required: true })}
                />
                3<label className="form-check-label" htmlFor="food-2"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="food"
                  id="food-3"
                  value="4"
                  className={`form-check-input ${
                    errors.food ? "is-invalid" : ""
                  }`}
                  {...register("food", { required: true })}
                />
                4<label className="form-check-label" htmlFor="food-3"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="food"
                  id="food-4"
                  value="5"
                  className={`form-check-input ${
                    errors.food ? "is-invalid" : ""
                  }`}
                  {...register("food", { required: true })}
                />
                5<label className="form-check-label" htmlFor="food-4"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="food"
                  id="food-5"
                  value="6"
                  className={`form-check-input ${
                    errors.food ? "is-invalid" : ""
                  }`}
                  {...register("food", { required: true })}
                />
                6<label className="form-check-label" htmlFor="food-5"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="food"
                  id="food-6"
                  value="7"
                  className={`form-check-input ${
                    errors.food ? "is-invalid" : ""
                  }`}
                  {...register("food", { required: true })}
                />
                7<label className="form-check-label" htmlFor="food-6"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="food"
                  id="food-7"
                  value="8"
                  className={`form-check-input ${
                    errors.food ? "is-invalid" : ""
                  }`}
                  {...register("food", { required: true })}
                />
                8<label className="form-check-label" htmlFor="food-7"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="food"
                  id="food-8"
                  value="9"
                  className={`form-check-input ${
                    errors.food ? "is-invalid" : ""
                  }`}
                  {...register("food", { required: true })}
                />
                9<label className="form-check-label" htmlFor="food-8"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="food"
                  id="food-9"
                  value="10"
                  className={`form-check-input ${
                    errors.food ? "is-invalid" : ""
                  }`}
                  {...register("food", { required: true })}
                />
                <label className="form-check-label" htmlFor="food-9">
                  10
                </label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="foodChanges">
              ¿Qué tan estresado/a te sentís últimamente?
            </label>
            <div className="form-check">
              <input
                type="checkbox"
                name="foodChanges"
                id="foodChanges-0"
                value="1"
                className="form-check-input"
                {...register("foodChanges")}
              />
              <label htmlFor="foodChanges-0">Incluir más alimentos</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="foodChanges"
                id="foodChanges-1"
                value="2"
                className="form-check-input"
                {...register("foodChanges")}
              />
              <label htmlFor="foodChanges-1">
                Dejar de comer algún alimento (ej carne, procesados, lácteos)
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="foodChanges"
                id="foodChanges-2"
                value="3"
                className="form-check-input"
                {...register("foodChanges")}
              />
              <label htmlFor="foodChanges-2">Organizar mejor las comidas</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="foodChanges"
                id="foodChanges-3"
                value="4"
                className="form-check-input"
                {...register("foodChanges")}
              />
              <label htmlFor="foodChanges-3">
                Hacer preparaciones diferentes
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                name="foodChanges"
                id="foodChanges-4"
                value="5"
                className="form-check-input"
                {...register("foodChanges")}
              />
              <label htmlFor="foodChanges-4">Mejorar la hidratación</label>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setProgress(50);
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
