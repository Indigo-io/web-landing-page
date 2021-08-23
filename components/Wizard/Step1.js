export default function Step1({ nextStep }) {
  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">Cuentanos sobre ti</h2>
        <p>
          Te vamos a hacer preguntas sobre tu estilo de vida, tus rutinas y tus
          ambiciones, para que podamos elegir nuestras recomendaciones.
        </p>
      </div>
      <button className="btn btn-primary d-block w-100" onClick={nextStep}>
        Comenzar
      </button>
    </div>
  );
}
