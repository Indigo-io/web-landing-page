import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Step9({
  previousStep,
  setProgress,
  dispatch,
  state,
  firstStep,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true);
    dispatch({ type: "update", payload: data });
    setProgress(100);
    const url =
      "https://script.google.com/macros/s/AKfycbwowDiLeL7tuiwWwcSG0Q3OW_G6qpeU03BfmglrjQ6USAdtuKKmbvS9pNOf92fkSdqw/exec";
    const formData = new FormData();
    const arrayData = Object.entries(state);

    arrayData.forEach((item) => {
      formData.append(item[0], item[1]);
    });
    axios
      .post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((result) => {
        toast.success("Tu mensaje ha sido enviado. Muchas gracias!");
        reset();
        firstStep();
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Ups algo paso, intenta nuevamente!");
        setIsLoading(false);
      });
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
                value="Problemas de presión arterial"
                {...register("diseases")}
              />
              <label htmlFor="diseases-0">Problemas de presión arterial</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-1"
                value="Hipo/hiper tiroidismo"
                {...register("diseases")}
              />
              <label htmlFor="diseases-1">Hipo/hiper tiroidismo</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-2"
                value="Afecciones cardíacas"
                {...register("diseases")}
              />
              <label htmlFor="diseases-2">Afecciones cardíacas</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-3"
                value="Afecciones respiratorias"
                {...register("diseases")}
              />
              <label htmlFor="diseases-3">Afecciones respiratorias</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-4"
                value="Alergias"
                {...register("diseases")}
              />
              <label htmlFor="diseases-4">Alergias</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-5"
                value="Fracturas, luxaciones o lesiones ligamentarias"
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
                value="Problemas gastrointestinales"
                {...register("diseases")}
              />
              <label htmlFor="diseases-6">Problemas gastrointestinales</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-7"
                value="Anemia"
                {...register("diseases")}
              />
              <label htmlFor="diseases-7">Anemia</label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="diseases-8"
                value="Otra"
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
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading ? true : false}
            >
              {isLoading && (
                <>
                  <span
                    className="spinner-border spinner-border-sm mr-1"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Loading...</span>
                </>
              )}{" "}
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
