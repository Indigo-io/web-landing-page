import { healthConstants } from "./constants/healthConstants";

export default function Managment() {
  return (
    <section className="managment" id="managment">
      <article className="managment__container">
        <div className="managment__wrapper">
          <div className="managment__information">
            <h2 className="managment__title">
              {healthConstants.MANAGMENT__TITLE}
            </h2>
            <p className="managment__paragraph">
              {healthConstants.MANAGMENT__PARAGRAPH}
            </p>
          </div>
          <figure className="managment__image"></figure>
        </div>
      </article>
    </section>
  );
}
