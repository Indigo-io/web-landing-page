import { useForm } from "react-hook-form";

export default function Focus({
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
    setProgress(62.5);
    reset();
    nextStep();
  };

  return (
    <div className="wizard-step">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <h3 className="start-now__label">Si pensamos en la atención...</h3>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="focus-0"
                value="Te distraés fácilmente"
                {...register("focus")}
              />
              <label htmlFor="focus-0">Te distraés fácilmente</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="focus-1"
                value="Te cuesta mantener la concentración en una tarea"
                {...register("focus")}
              />
              <label htmlFor="focus-1">
                Te cuesta mantener la concentración en una tarea
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="focus-2"
                value="Tenés dificultad para concentrarte cuando hay otros estímulos a
                tu alrededor"
                {...register("focus")}
              />
              <label htmlFor="focus-2">
                Tenés dificultad para concentrarte cuando hay otros estímulos a
                tu alrededor
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="focus-3"
                value="Perdés el hilo de conversación cuando hablás con alguien"
              />
              <label htmlFor="focus-3">
                Perdés el hilo de conversación cuando hablás con alguien
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="focus-4"
                value="Te cuesta hacer más de una tarea a la vez de manera eficiente"
                {...register("focus")}
              />
              <label htmlFor="focus-4">
                Te cuesta hacer más de una tarea a la vez de manera eficiente
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="focus-5"
                value="Si te distraés... no podés volver a concentrarte en lo que
                estabas haciendo"
                {...register("focus")}
              />
              <label htmlFor="focus-5">
                Si te distraés... no podés volver a concentrarte en lo que
                estabas haciendo
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="focus-6"
                value='Sentís que tu cerebro funciona a un "ritmo más bajo"'
                {...register("focus")}
              />
              <label htmlFor="focus-6">
                Sentís que tu cerebro funciona a un &quot;ritmo más bajo&quot;
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="focus-7"
                value="Ninguna de las anteriores"
                {...register("focus")}
              />
              <label htmlFor="focus-7">Ninguna de las anteriores</label>
            </div>
          </div>

          <div className="mb-3">
            <h3 className="start-now__label">Y si pensamos en la memoria...</h3>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="memory-0"
                value="Repetís las preguntas una y otra vez porque no recordás haberlas
                hecho"
                {...register("memory")}
              />
              <label htmlFor="memory-0">
                Repetís las preguntas una y otra vez porque no recordás haberlas
                hecho
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="memory-1"
                value="No recordás con facilidad conversaciones que tuviste hace unos
                minutos"
                {...register("memory")}
              />
              <label htmlFor="memory-1">
                No recordás con facilidad conversaciones que tuviste hace unos
                minutos
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="memory-2"
                value="Sentís que en el último tiempo tuviste más dificultades para
                recordar información"
                {...register("memory")}
              />
              <label htmlFor="memory-2">
                Sentís que en el último tiempo tuviste más dificultades para
                recordar información
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="memory-3"
                value="Te cuesta recordar la ubicación y la posición de los objetos en
                tu casa, oficina, etc."
                {...register("memory")}
              />
              <label htmlFor="memory-3">
                Te cuesta recordar la ubicación y la posición de los objetos en
                tu casa, oficina, etc.
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="memory-4"
                value="Perdés y te olvidás las cosas"
                {...register("memory")}
              />
              <label htmlFor="memory-4">Perdés y te olvidás las cosas</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="memory-5"
                value="Ninguna de las anteriores"
                {...register("memory")}
              />
              <label htmlFor="memory-5">Ninguna de las anteriores</label>
            </div>
          </div>

          <div className="mb-3">
            <h3 className="start-now__label">
              ¿Qué tan estresado/a te sentís últimamente?
            </h3>
            <div className="col-md-12">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="stress"
                  id="stress-0"
                  value="1"
                  className={`form-check-input ${
                    errors.stress ? "is-invalid" : ""
                  }`}
                  {...register("stress", { required: true })}
                />
                1<label htmlFor="stress-0" className="form-check-label"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="stress"
                  id="stress-1"
                  value="2"
                  className={`form-check-input ${
                    errors.stress ? "is-invalid" : ""
                  }`}
                  {...register("stress", { required: true })}
                />
                2<label className="form-check-label" htmlFor="stress-1"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="stress"
                  id="stress-2"
                  value="3"
                  className={`form-check-input ${
                    errors.stress ? "is-invalid" : ""
                  }`}
                  {...register("stress", { required: true })}
                />
                3<label className="form-check-label" htmlFor="stress-2"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="stress"
                  id="stress-3"
                  value="4"
                  className={`form-check-input ${
                    errors.stress ? "is-invalid" : ""
                  }`}
                  {...register("stress", { required: true })}
                />
                4<label className="form-check-label" htmlFor="stress-3"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="stress"
                  id="stress-4"
                  value="5"
                  className={`form-check-input ${
                    errors.stress ? "is-invalid" : ""
                  }`}
                  {...register("stress", { required: true })}
                />
                5<label className="form-check-label" htmlFor="stress-4"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="stress"
                  id="stress-5"
                  value="6"
                  className={`form-check-input ${
                    errors.stress ? "is-invalid" : ""
                  }`}
                  {...register("stress", { required: true })}
                />
                6<label className="form-check-label" htmlFor="stress-5"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="stress"
                  id="stress-6"
                  value="7"
                  className={`form-check-input ${
                    errors.stress ? "is-invalid" : ""
                  }`}
                  {...register("stress", { required: true })}
                />
                7<label className="form-check-label" htmlFor="stress-6"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="stress"
                  id="stress-7"
                  value="8"
                  className={`form-check-input ${
                    errors.stress ? "is-invalid" : ""
                  }`}
                  {...register("stress", { required: true })}
                />
                8<label className="form-check-label" htmlFor="stress-7"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="stress"
                  id="stress-8"
                  value="9"
                  className={`form-check-input ${
                    errors.stress ? "is-invalid" : ""
                  }`}
                  {...register("stress", { required: true })}
                />
                9<label className="form-check-label" htmlFor="stress-8"></label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="stress"
                  id="stress-9"
                  value="10"
                  className={`form-check-input ${
                    errors.stress ? "is-invalid" : ""
                  }`}
                  {...register("stress", { required: true })}
                />
                <label className="form-check-label" htmlFor="stress-9">
                  10
                </label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="step__btn--back"
              onClick={() => {
                setProgress(37.5);
                previousStep();
              }}
            >
              Atrás
            </button>
            <input
              type="submit"
              className="step__btn--continue"
              value="Continuar"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
