export default function Step3({ nextStep, previousStep, setProgress }) {
  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">Cuentanos sobre ti</h2>

        <div className="col-md-12 form-group mb-3">
          <label htmlFor="age">¿Cuál es tu edad?</label>
          <input
            id="age"
            name="age"
            type="text"
            placeholder=""
            className="form-control input-md"
            required
          />
        </div>

        <div className="col-md-12 form-group mb-3">
          <label htmlFor="gender">
            ¿Con qué género te sentís identificado?
          </label>
          <div className="col-md-12">
            <div className="checkbox">
              <label htmlFor="genero-0">
                <input type="checkbox" name="gender" id="gender-0" value="1" />
                Mujer
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="gender-1">
                <input type="checkbox" name="gender" id="gender-1" value="2" />
                Hombre
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="gender-2">
                <input type="checkbox" name="gender" id="gender-2" value="3" />
                Prefiero no decirlo
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="gender-3">
                <input type="checkbox" name="gender" id="gender-3" value="4" />
                Otro
              </label>
            </div>
          </div>
        </div>

        <div className="col-md-12 form-group mb-3">
          <label htmlFor="profession">¿Cuál es tu profesión? </label>
          <input
            name="profession"
            type="text"
            placeholder=""
            className="form-control input-md"
          />
        </div>
        <div className="col-md-12 form-group mb-3">
          <label htmlFor="household">¿Con quién(es) vivís? </label>
          <input
            id="household"
            name="household"
            type="text"
            placeholder=""
            className="form-control input-md"
          />
        </div>
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
        <button
          className="btn btn-primary"
          onClick={() => {
            setProgress(25);
            nextStep();
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
