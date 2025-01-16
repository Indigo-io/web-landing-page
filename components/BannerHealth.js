import { healthConstants } from "./constants/healthConstants";

export default function BannerHealth() {
  return (
    <section className="banner-health" id="model">
      <div className="banner-health__container">
        <h2 className="banner-health__title">
          {healthConstants.BANNER__TITLE}
        </h2>
        <h3 className="banner-health__subtitle">
          {healthConstants.BANNER__SUBTITLE}
        </h3>
        <p className="banner-health__paragraph">
          {healthConstants.BANNER__PARAGRAPH}
        </p>
        <button
          className="banner-health__button"
          onClick={() => window.open("https://especialista.indigo.com")}
        >
          Registrate ahora
        </button>
      </div>
    </section>
  );
}
