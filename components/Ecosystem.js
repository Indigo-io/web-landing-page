import { healthConstants } from "./constants/healthConstants";

export default function Ecosystem() {
  return (
    <section className="ecosystem" id="ecosystem">
      <div className="ecosystem__container">
        <article className="ecosystem__wrapper">
          <h2 className="ecosystem__title">
            {healthConstants.ECOSYSTEM__TITLE}
          </h2>
          <p className="ecosystem__paragraph">
            {healthConstants.ECOSYSTEM__PARAGRAPH}
          </p>
          <figure className="ecosystem__image" />
        </article>
      </div>
    </section>
  );
}
