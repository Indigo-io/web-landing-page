export default function Step1({ nextStep }) {
  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">Cuéntanos sobre ti</h2>
        <p className="text-center fs-5">
          Te vamos a hacer algunas preguntas sobre tu estilo de vida, tus
          rutinas, tus motivaciones, para que podamos armar un plan con
          recomendaciones apropiado para vos.
        </p>
        <p className="text-center fs-6">
          Vamos a pedirte que nos compartas algunos datos personales. No te
          preocupes, toda la información que nos brindes es confidencial y el
          objetivo es poder entablar un diálogo que nos permita trabajar juntos.
        </p>
      </div>
      <button className="btn btn-primary d-block w-100" onClick={nextStep}>
        Comenzar
      </button>
    </div>
  );
}
