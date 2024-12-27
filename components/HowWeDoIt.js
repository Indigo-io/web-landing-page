import { PrincipalConstants } from "./constants/principalConstants";

export default function HowWeDoIt() {
  return (
    <section className="how-we-do-it" id="howWeDoIt">
      <div className="how-we-do-it__container">
        <div className="how-we-do-it__text">
          <h2 className="how-we-do-it__title">
            {PrincipalConstants.HOW_WE_DO_IT__TITLE}
          </h2>
          <span className="how-we-do-it__description">
            {PrincipalConstants.HOW_WE_DO_IT__DESCRIPTION}
          </span>
        </div>
      </div>
    </section>
  );
}
