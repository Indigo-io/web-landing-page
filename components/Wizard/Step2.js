export default function Step2({ nextStep, previousStep, setProgress }) {
  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">
          Necesitamos algunos datos para ponernos en contacto
        </h2>
        <div className="col-md-12 form-group mb-3">
          <label htmlFor="name">¿Cuál es tu nombre y apellido?</label>
          <input type="text" className="form-control" name="name" required />
        </div>
        <div className="col-md-12 form-group mb-3">
          <label htmlFor="name">Correo electrónico</label>
          <input type="email" name="email" className="form-control" required />
        </div>
        <div className="col-md-12 form-group mb-3">
          <label htmlFor="tel">¿Cuál es tu número de teléfono celular?</label>
          <input
            name="tel"
            type="text"
            placeholder="11-22222222"
            className="form-control input-md"
            required
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
            setProgress(12.5);
            nextStep();
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
