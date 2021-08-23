import { useForm } from "react-hook-form";

export default function Step9({ nextStep, previousStep, setProgress }) {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setProgress(100);
    reset();
  };

  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">Cuentanos sobre ti </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="diseases">
              Por último ¿Tenés alguna enfermedad o condición clínica de base?
            </label>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-0"
                value="1"
                {...register("diseases")}
              />
              <label htmlFor="diseases-0">Problemas de presión arterial</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-1"
                value="2"
                {...register("diseases")}
              />
              <label htmlFor="diseases-1">Hipo/hiper tiroidismo</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-2"
                value="3"
                {...register("diseases")}
              />
              <label htmlFor="diseases-2">Afecciones cardíacas</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-3"
                value="4"
                {...register("diseases")}
              />
              <label htmlFor="diseases-3">Afecciones respiratorias</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-4"
                value="5"
                {...register("diseases")}
              />
              <label htmlFor="diseases-4">Alergias</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-5"
                value="6"
                {...register("diseases")}
              />
              <label htmlFor="diseases-5">
                Fracturas, luxaciones o lesiones ligamentarias
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-6"
                value="7"
                {...register("diseases")}
              />
              <label htmlFor="diseases-6">Problemas gastrointestinales</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-7"
                value="8"
                {...register("diseases")}
              />
              <label htmlFor="diseases-7">Anemia</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-8"
                value="9"
                {...register("diseases")}
              />
              <label htmlFor="diseases-8">Otra</label>
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
            <input type="submit" className="btn btn-primary" value="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
}
