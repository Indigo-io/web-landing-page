export default function Step7({ nextStep, previousStep, setProgress }) {
  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">
          ¿Cómo describirías tu alimentación actual?
        </h2>
        <div className="col-md-12 form-group mb-3">
          <div className="col-md-12">
            <label className="radio-inline" htmlFor="food-0">
              <input
                type="radio"
                name="food"
                id="food-0"
                value="1"
                checked="checked"
              />
              1
            </label>
            <label className="radio-inline" htmlFor="food-1">
              <input type="radio" name="food" id="food-1" value="2" />2
            </label>
            <label className="radio-inline" htmlFor="food-2">
              <input type="radio" name="food" id="food-2" value="3" />3
            </label>
            <label className="radio-inline" htmlFor="food-3">
              <input type="radio" name="food" id="food-3" value="4" />4
            </label>
            <label className="radio-inline" htmlFor="food-4">
              <input type="radio" name="food" id="food-4" value="5" />5
            </label>
            <label className="radio-inline" htmlFor="food-5">
              <input type="radio" name="food" id="food-5" value="6" />6
            </label>
            <label className="radio-inline" htmlFor="food-6">
              <input type="radio" name="food" id="food-6" value="7" />7
            </label>
            <label className="radio-inline" htmlFor="food-7">
              <input type="radio" name="food" id="food-7" value="8" />8
            </label>
            <label className="radio-inline" htmlFor="food-8">
              <input type="radio" name="food" id="food-8" value="9" />9
            </label>
            <label className="radio-inline" htmlFor="food-9">
              <input type="radio" name="food" id="food-9" value="10" />
              10
            </label>
          </div>
        </div>
        <h2 className="mb-3 text-center">
          ¿Te gustaría cambiar algo de tu alimentación?
        </h2>
        <div className="col-md-12 form-group mb-3">
          <div className="col-md-12">
            <div className="checkbox">
              <label htmlFor="foodChanges-0">
                <input
                  type="checkbox"
                  name="foodChanges"
                  id="foodChanges-0"
                  value="1"
                />
                Incluir más alimentos
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="foodChanges-1">
                <input
                  type="checkbox"
                  name="foodChanges"
                  id="foodChanges-1"
                  value="2"
                />
                Dejar de comer algún alimento (ej carne, procesados, lácteos)
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="foodChanges-2">
                <input
                  type="checkbox"
                  name="foodChanges"
                  id="foodChanges-2"
                  value="3"
                />
                Organizar mejor las comidas
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="foodChanges-3">
                <input
                  type="checkbox"
                  name="foodChanges"
                  id="foodChanges-3"
                  value="4"
                />
                Hacer preparaciones diferentes
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="foodChanges-4">
                <input
                  type="checkbox"
                  name="foodChanges"
                  id="foodChanges-4"
                  value="5"
                />
                Mejorar la hidratación
              </label>
            </div>
          </div>
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
        <button
          className="btn btn-primary"
          onClick={() => {
            setProgress(75);
            nextStep();
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
