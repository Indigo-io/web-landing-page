import { healthConstants } from "./constants/healthConstants";

export default function HealthAI() {
  return (
    <section className="health-AI" id="AI">
      <article className="health-AI__container">
        <div className="health-AI__wrapper">
          <div className="health-AI__text">
            <h2 className="health-AI__title">{healthConstants.AI__TITLE}</h2>
            <p className="health-AI__paragraph">
              {healthConstants.AI__SUBTITLE}
            </p>
          </div>
          <figure className="health-AI__image" />
        </div>
      </article>
    </section>
  );
}
