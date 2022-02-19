export default function Presentation({ nextStep }) {
  return (
    <div className="wizard-step">
      <div>
        <h2 className="step__title mb-3 text-center">Cuéntanos sobre ti</h2>
        <p className="step__text text-center">
          Te vamos a hacer algunas preguntas sobre tu estilo de vida, tus
          rutinas, tus motivaciones, para que podamos armar un plan con
          recomendaciones apropiado para vos.
        </p>
        <p className="step__text text-center">
          Vamos a pedirte que nos compartas algunos datos personales. No te
          preocupes, toda la información que nos brindes es confidencial y el
          objetivo es poder entablar un diálogo que nos permita trabajar juntos.
        </p>
      </div>
      <button className="step__btn--start" onClick={nextStep}>
        Empezar ahora
      </button>
    </div>
  );
}
