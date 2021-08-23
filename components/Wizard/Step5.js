export default function Step5({ nextStep, previousStep, setProgress }) {
  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">
          Cuál de estos tópicos te gustaría que trabajemos juntos.
        </h2>

        <div className="col-md-12 form-group mb-3">
          <div className="col-md-12">
            <div className="checkbox">
              <label htmlFor="motivation-0">
                <input
                  type="checkbox"
                  name="motivation"
                  id="motivation-0"
                  value="1"
                />
                Manejar mejor tus niveles de ansiedad
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="motivation-1">
                <input
                  type="checkbox"
                  name="motivation"
                  id="motivation-1"
                  value="2"
                />
                Descubrir nuevos entrenamientos
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="motivation-2">
                <input
                  type="checkbox"
                  name="motivation"
                  id="motivation-2"
                  value="3"
                />
                Tener más energía
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="motivation-3">
                <input
                  type="checkbox"
                  name="motivation"
                  id="motivation-3"
                  value="4"
                />
                Subir de peso
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="motivation-4">
                <input
                  type="checkbox"
                  name="motivation"
                  id="motivation-4"
                  value="5"
                />
                Mejorar tu desarrollo profesional
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="motivation-5">
                <input
                  type="checkbox"
                  name="motivation"
                  id="motivation-5"
                  value="6"
                />
                Fortalecer tus relaciones personales
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="motivation-6">
                <input
                  type="checkbox"
                  name="motivation"
                  id="motivation-6"
                  value="7"
                />
                Mejorar tu alimentación
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="motivation-7">
                <input
                  type="checkbox"
                  name="motivation"
                  id="motivation-7"
                  value="8"
                />
                Sentirte mejor con tu cuerpo
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="motivation-8">
                <input
                  type="checkbox"
                  name="motivation"
                  id="motivation-8"
                  value="9"
                />
                Bajar de peso
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="motivation-9">
                <input
                  type="checkbox"
                  name="motivation"
                  id="motivation-9"
                  value="10"
                />
                Mejorar tus hábitos de sueño
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="motivation-10">
                <input
                  type="checkbox"
                  name="motivation"
                  id="motivation-10"
                  value="11"
                />
                Aprender a desconectar tu cerebro
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="motivation-11">
                <input
                  type="checkbox"
                  name="motivation"
                  id="motivation-11"
                  value="12"
                />
                Organizar mejor tu rutina diaria
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="motivation-12">
                <input
                  type="checkbox"
                  name="motivation"
                  id="motivation-12"
                  value="13"
                />
                Otro
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-12 form-group mb-3 mt-3 mt-md-0">
          <label htmlFor="name">
            De las opciones que elegiste ¿Cuál es la más importante?
          </label>
          <div className="col-md-12">
            <select
              id="top_motivation"
              name="top_motivation"
              className="form-control"
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
        </div>
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
        <button
          className="btn btn-primary"
          onClick={() => {
            setProgress(50);
            nextStep();
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
