export default function Step6({ nextStep, previousStep, setProgress }) {
  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">Si pensamos en la atención... </h2>
        <div className="col-md-12 form-group mb-3">
          <div className="col-md-12">
            <div className="checkbox">
              <label htmlFor="focus-0">
                <input type="checkbox" name="focus" id="focus-0" value="1" />
                Te distraes facilmente
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="focus-1">
                <input type="checkbox" name="focus" id="focus-1" value="2" />
                Te cuesta mantener la concentración en una tarea
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="focus-2">
                <input type="checkbox" name="focus" id="focus-2" value="3" />
                Tenés dificultad para concentrarte cuando hay otros estímulos a
                tu alrededor
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="focus-3">
                <input type="checkbox" name="focus" id="focus-3" value="4" />
                Perdes el hilo de conversación cuando hablas con alguien
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="focus-4">
                <input type="checkbox" name="focus" id="focus-4" value="5" />
                Te cuesta hacer mas de una tarea a la vez de manera eficiente
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="focus-5">
                <input type="checkbox" name="focus" id="focus-5" value="6" />
                Si te distraes... no podes volver a concentrarte en lo que
                estabas haciendo
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="focus-6">
                <input type="checkbox" name="focus" id="focus-6" value="7" />
                Sentís que tu cerebro funciona a un &quot;ritmo mas bajo&quot;
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="focus-7">
                <input type="checkbox" name="focus" id="focus-7" value="8" />
                Ninguna de las anteriores
              </label>
            </div>
          </div>
        </div>
        <h2 className="mb-3 text-center">Y si pensamos en la memoria... </h2>
        <div className="col-md-12 form-group mb-3">
          <label htmlFor="memory"></label>
          <div className="col-md-12">
            <div className="checkbox">
              <label htmlFor="memory-0">
                <input type="checkbox" name="memory" id="memory-0" value="1" />
                Repetís las preguntas una y otra vez porque no recordás haberlas
                hecho
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="memory-1">
                <input type="checkbox" name="memory" id="memory-1" value="2" />
                No recordás con facilidad conversaciones que tuviste hace unos
                minutos
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="memory-2">
                <input type="checkbox" name="memory" id="memory-2" value="3" />
                Sentís que en el último tiempo tuviste más dificultades para
                recordar información
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="memory-3">
                <input type="checkbox" name="memory" id="memory-3" value="4" />
                Te cuesta recordar la ubicación y la posición de los objetos en
                tu casa, oficina, etc.
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="memory-4">
                <input type="checkbox" name="memory" id="memory-4" value="5" />
                Perdés y te olvidas las cosas
              </label>
            </div>
            <div className="checkbox">
              <label htmlFor="memory-5">
                <input type="checkbox" name="memory" id="memory-5" value="6" />
                Ninguna de las anteriores
              </label>
            </div>
          </div>
        </div>
        <h2 className="mb-3 text-center">
          ¿Qué tan estresado/a te sentís últimamente?{" "}
        </h2>
        <div className="col-md-12 form-group mb-3">
          <div className="col-md-12">
            <label className="radio-inline" htmlFor="stress-0">
              <input
                type="radio"
                name="stress"
                id="stress-0"
                value="1"
                checked="checked"
              />
              1
            </label>
            <label className="radio-inline" htmlFor="stress-1">
              <input type="radio" name="stress" id="stress-1" value="2" />2
            </label>
            <label className="radio-inline" htmlFor="stress-2">
              <input type="radio" name="stress" id="stress-2" value="3" />3
            </label>
            <label className="radio-inline" htmlFor="stress-3">
              <input type="radio" name="stress" id="stress-3" value="4" />4
            </label>
            <label className="radio-inline" htmlFor="stress-4">
              <input type="radio" name="stress" id="stress-4" value="5" />5
            </label>
            <label className="radio-inline" htmlFor="stress-5">
              <input type="radio" name="stress" id="stress-5" value="6" />6
            </label>
            <label className="radio-inline" htmlFor="stress-6">
              <input type="radio" name="stress" id="stress-6" value="7" />7
            </label>
            <label className="radio-inline" htmlFor="stress-7">
              <input type="radio" name="stress" id="stress-7" value="8" />8
            </label>
            <label className="radio-inline" htmlFor="stress-8">
              <input type="radio" name="stress" id="stress-8" value="9" />9
            </label>
            <label className="radio-inline" htmlFor="stress-9">
              <input type="radio" name="stress" id="stress-9" value="10" />
              10
            </label>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            setProgress(37.5);
            previousStep();
          }}
        >
          Atras
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setProgress(62.5);
            nextStep();
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
