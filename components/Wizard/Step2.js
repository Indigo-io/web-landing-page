import { useForm } from "react-hook-form";

export default function Step2({ nextStep, previousStep, setProgress }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setProgress(12.5);
    reset();
    nextStep();
  };

  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">
          Necesitamos algunos datos para ponernos en contacto
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name">¿Cuál es tu nombre y apellido?</label>
            <input
              placeholder="Ej: Juan Gomez"
              name="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("name", { required: true })}
            />
            <div className="invalid-feedback">Este valor es requerido.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="name">Correo electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="Ej: juangomez@email.com"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("email", { required: true })}
            />
            <div className="invalid-feedback">Este valor es requerido.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="tel">¿Cuál es tu número de teléfono celular?</label>
            <input
              name="tel"
              type="text"
              placeholder="Ej: 1155555555"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("tel", { required: true })}
            />
            <div className="invalid-feedback">Este valor es requerido.</div>
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
            <input
              type="submit"
              className="btn btn-primary"
              value="Continuar"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
