import { useForm } from "react-hook-form";

export default function Step5({ nextStep, previousStep, setProgress }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setProgress(50);
    reset();
    nextStep();
  };

  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">Cuentanos sobre ti </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="motivation">
              Cuál de estos tópicos te gustaría que trabajemos juntos.
            </label>
            <div className="form-check">
              <input
                type="checkbox"
                id="motivation-0"
                value="1"
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
                value="2"
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
                value="3"
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
                value="4"
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
                value="5"
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
                value="6"
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
                value="7"
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
                value="8"
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
                value="9"
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
                value="10"
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
                value="11"
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
                value="12"
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
                value="13"
                className="form-check-input"
                {...register("motivation")}
              />
              <label htmlFor="motivation-12" className="form-check-label">
                Otro
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="top_motivation">
              De las opciones que elegiste ¿Cuál es la más importante?
            </label>
            <select
              className={`form-select ${
                errors.top_motivation ? "is-invalid" : ""
              }`}
              {...register("top_motivation", { required: true })}
            >
              <option value="1">Manejar mejor tus niveles de ansiedad</option>
              <option value="2">Descubrir nuevos entrenamientos</option>
              <option value="3">Tener más energía</option>
              <option value="4">Subir de peso</option>
              <option value="5">Mejorar tu desarrollo profesional</option>
              <option value="6">Fortalecer tus relaciones personales</option>
              <option value="7">Mejorar tu alimentación</option>
              <option value="8">Sentirte mejor con tu cuerpo</option>
              <option value="9">Bajar de peso</option>
              <option value="10">Mejorar tus hábitos de sueño</option>
              <option value="11">Aprender a desconectar tu cerebro</option>
              <option value="12">Organizar mejor tu rutina diaria</option>
              <option value="13">Otro</option>
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
