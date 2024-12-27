import { PrincipalConstants } from "./constants/principalConstants";

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits__container">
        <div className="benefits__card">
          <figure
            className="benefits__card-image"
            style={{ backgroundImage: `url("/img/indigo2025/meditation.png")` }}
          />
          <div className="benefits__card-text">
            <h2 className="benefits__card-title">
              {PrincipalConstants.BENEFITS__TITLE_1}
            </h2>
            <span className="benefits__card-description">
              {PrincipalConstants.BENEFITS__TEXT_1}
            </span>
          </div>
        </div>
        <div className="benefits__card benefits__card-inverted">
          <figure
            className="benefits__card-image"
            style={{ backgroundImage: `url("/img/indigo2025/analytic.png")` }}
          />
          <div className="benefits__card-text">
            <h2 className="benefits__card-title">
              {PrincipalConstants.BENEFITS__TITLE_2}
            </h2>
            <span className="benefits__card-description">
              {PrincipalConstants.BENEFITS__TEXT_2}
            </span>
          </div>
        </div>
        <div className="benefits__card">
          <figure
            className="benefits__card-image benefits__card-image2"
            style={{ backgroundImage: `url("/img/indigo2025/presenting.png")` }}
          />
          <div className="benefits__card-text">
            <h2 className="benefits__card-title">
              {PrincipalConstants.BENEFITS__TITLE_3}
            </h2>
            <span className="benefits__card-description">
              {PrincipalConstants.BENEFITS__TEXT_3}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
