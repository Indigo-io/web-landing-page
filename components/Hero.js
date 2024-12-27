import { PrincipalConstants } from "./constants/principalConstants";

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero__container">
        <div className="hero__text-container">
          <h1 className="hero__title">{PrincipalConstants.HERO_TITLE}</h1>
          <span className="hero__subtitle">
            {PrincipalConstants.HERO_SUBTITLE}
          </span>
        </div>
        <figure className="hero__image" />
      </div>
    </main>
  );
}
