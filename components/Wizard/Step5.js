import { useForm } from "react-hook-form";

export default function Step5({
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
    setProgress(50);
    reset();
    nextStep();
  };

  return (
    <div className="wizard-step">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <h3>Cuál de estos tópicos te gustaría que trabajemos juntos.</h3>
            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-0"
                value="Manejar mejor tus niveles de ansiedad"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-0" className="form-check-label">
                Manejar mejor tus niveles de ansiedad
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-1"
                value="Descubrir nuevos entrenamientos"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-1" className="form-check-label">
                Descubrir nuevos entrenamientos
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-2"
                value="Tener más energía"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-2" className="form-check-label">
                Tener más energía
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-3"
                value="Subir de peso"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-3" className="form-check-label">
                Subir de peso
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-4"
                value="Mejorar tu desarrollo profesional"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-4" className="form-check-label">
                Mejorar tu desarrollo profesional
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-5"
                value="Fortalecer tus relaciones personales"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-5" className="form-check-label">
                Fortalecer tus relaciones personales
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-6"
                value="Mejorar tu alimentación"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-6" className="form-check-label">
                Mejorar tu alimentación
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-7"
                value="Sentirte mejor con tu cuerpo"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-7" className="form-check-label">
                Sentirte mejor con tu cuerpo
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-8"
                value="Bajar de peso"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-8" className="form-check-label">
                Bajar de peso
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-9"
                value="Mejorar tus hábitos de sueño"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-9" className="form-check-label">
                Mejorar tus hábitos de sueño
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-10"
                value="Aprender a desconectar tu cerebro"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-10" className="form-check-label">
                Aprender a desconectar tu cerebro
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-11"
                value="Organizar mejor tu rutina diaria"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-11" className="form-check-label">
                Organizar mejor tu rutina diaria
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-12"
                value="Otro"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-12" className="form-check-label">
                Otro
              </label>
            </div>
          </div>

          <div className="mb-3">
            <h3>De las opciones que elegiste ¿Cuál es la más importante?</h3>
            <select
              className={`form-select ${
                errors.top_motivation ? "is-invalid" : ""
              }`}
              {...register("top_motivation", { required: true })}
            >
              <option value="Manejar mejor tus niveles de ansiedad">
                Manejar mejor tus niveles de ansiedad
              </option>
              <option value="Descubrir nuevos entrenamientos">
                Descubrir nuevos entrenamientos
              </option>
              <option value="Tener más energía">Tener más energía</option>
              <option value="Subir de peso">Subir de peso</option>
              <option value="Mejorar tu desarrollo profesional">
                Mejorar tu desarrollo profesional
              </option>
              <option value="Fortalecer tus relaciones personales">
                Fortalecer tus relaciones personales
              </option>
              <option value="Mejorar tu alimentación">
                Mejorar tu alimentación
              </option>
              <option value="Sentirte mejor con tu cuerpo">
                Sentirte mejor con tu cuerpo
              </option>
              <option value="Bajar de peso">Bajar de peso</option>
              <option value="Mejorar tus hábitos de sueño">
                Mejorar tus hábitos de sueño
              </option>
              <option value="Aprender a desconectar tu cerebro">
                Aprender a desconectar tu cerebro
              </option>
              <option value="Organizar mejor tu rutina diaria">
                Organizar mejor tu rutina diaria
              </option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setProgress(25);
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
