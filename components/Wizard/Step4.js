export default function Step4({ nextStep, previousStep, setProgress }) {
  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">Cuentanos sobre ti</h2>
        <div className="col-md-12 form-group mb-3">
          <label htmlFor="height">
            ¿Cuánto medís? Si no te acordás, aproximado.
          </label>
          <input
            id="height"
            name="height"
            type="text"
            placeholder=""
            className="form-control input-md"
          />
        </div>
        <div className="col-md-12 form-group mb-3">
          <label htmlFor="weight">
            ¿Cuánto pesas? Si no te acordás, aproximado.
          </label>
          <input
            id="weight"
            name="weight"
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
            setProgress(12.5);
            previousStep();
          }}
        >
          Atras
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setProgress(37.5);
            nextStep();
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
