export default function Step9({ nextStep, previousStep, setProgress }) {
  return (
    <div className="wizard-step">
      <div>
        <h4 className="mb-3 text-center">
          Por último ¿Tenés alguna enfermedad o condición clínica de base?
        </h4>
        <div className="col-md-12 form-group mb-3">
          <div className="col-md-12">
            <div className="checkbox">
              <label htmlFor="diseases-0">
                <input
                  type="checkbox"
                  name="diseases"
                  id="diseases-0"
                  value="1"
                />
                Problemas de presión arterial
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="diseases-1">
                <input
                  type="checkbox"
                  name="diseases"
                  id="diseases-1"
                  value="2"
                />
                Hipo/hiper tiroidismo
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="diseases-2">
                <input
                  type="checkbox"
                  name="diseases"
                  id="diseases-2"
                  value="3"
                />
                Afecciones cardíacas
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="diseases-3">
                <input
                  type="checkbox"
                  name="diseases"
                  id="diseases-3"
                  value="4"
                />
                Afecciones respiratorias
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="diseases-4">
                <input
                  type="checkbox"
                  name="diseases"
                  id="diseases-4"
                  value="5"
                />
                Alergias
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="diseases-5">
                <input
                  type="checkbox"
                  name="diseases"
                  id="diseases-5"
                  value="6"
                />
                Fracturas, luxaciones o lesiones ligamentarias
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="diseases-6">
                <input
                  type="checkbox"
                  name="diseases"
                  id="diseases-6"
                  value="7"
                />
                Problemas gastrointestinales
              </label>
            </div>
            <div clas s="checkbox">
              <label htmlFor="diseases-7">
                <input
                  type="checkbox"
                  name="diseases"
                  id="diseases-7"
                  value="8"
                />
                Anemia
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="diseases-8">
                <input
                  type="checkbox"
                  name="diseases"
                  id="diseases-8"
                  value=""
                />
                Otra
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            setProgress(75);
            previousStep();
          }}
        >
          Atras
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setProgress(100);
            nextStep();
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
