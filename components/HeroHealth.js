import { healthConstants } from "./constants/healthConstants";

export default function HeroHealth() {
  return (
    <section className="hero-health" id="description">
      <div className="hero-health__container">
        <div className="hero-health__background-top">
          <h1 className="hero-health__title">{healthConstants.HERO__TITLE}</h1>
          <div className="hero-health__bottom">
            <h2 className="hero-health__bottom-title">
              {healthConstants.HERO__BOTTOM_TITlE}
            </h2>
            <span className="hero-health__bottom-paragraph">
              {healthConstants.HERO__BOTTOM_PARAGRAPH}
            </span>
            <figure className="hero-health__image" />
          </div>
        </div>
        <div className="hero-health__background-bottom">
          <button
            className="hero-health__button"
            onClick={() =>
              window.open("https://specialists.indigobalance.com/")
            }
          >
            Descubre más
          </button>
        </div>
      </div>
    </section>
  );
}
