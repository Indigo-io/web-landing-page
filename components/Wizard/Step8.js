export default function Step2({ nextStep, previousStep, setProgress }) {
  return (
    <div className="wizard-step">
      <div>
        <h4 className="mb-3 text-center">
          ¿Cuál de estas actividades te gusta o te gustaría realizar?{" "}
        </h4>
        <div className="col-md-12 form-group mb-3">
          <div className="checkbox">
            <label htmlFor="activities-0">
              <input
                type="checkbox"
                name="activities"
                id="activities-0"
                value="1"
              />
              Entrenamiento Funcional
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="activities-1">
              <input
                type="checkbox"
                name="activities"
                id="activities-1"
                value="2"
              />
              Crossfit
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="activities-2">
              <input
                type="checkbox"
                name="activities"
                id="activities-2"
                value="3"
              />
              Yoga
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="activities-3">
              <input
                type="checkbox"
                name="activities"
                id="activities-3"
                value="4"
              />
              Pilates
            </label>
          </div>
          <div className="checkbox">
            <label htmlFor="activities-4">
              <input
                type="checkbox"
                name="activities"
                id="activities-4"
                value="5"
              />
              Running
            </label>
          </div>
        </div>
        <h4 className="mb-3 text-center">
          ¿Cuál es tu actividad de relajación favorita?{" "}
        </h4>
        <div className="col-md-12 form-group mb-3 mt-3">
          <textarea
            className="form-control"
            name="relaxActivities"
            required
          ></textarea>
        </div>
        <h4 className="mb-3 text-center">
          ¿Cuál es tu actividad de relajación favorita?{" "}
        </h4>
        <div className="col-md-12 form-group mb-3">
          <div className="col-md-12">
            <select id="investment" name="investment" className="form-control">
              <option value="1">Una hora o menos</option>
              <option value="2">Hasta dos horas</option>
              <option value="3">Hasta cinco horas</option>
              <option value="4">Hasta diez horas</option>
              <option value="5">¡Lo que haga falta!!!</option>
            </select>
          </div>
        </div>
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
        <button
          className="btn btn-primary"
          onClick={() => {
            setProgress(87.5);
            nextStep();
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
