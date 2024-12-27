import { PrincipalConstants } from "./constants/principalConstants";

const OurServicesCard = ({ title, description, image, onClick }) => {
  return (
    <div className="ourServices__card">
      <figure
        className="ourServices__card-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="ourServices__card-information">
        <div>
          <p className="ourServices__card-title">{title}</p>
          <span className="ourServices__card-description">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default function OurServices() {
  return (
    <section className="ourServices" id="ourServices">
      <div className="ourServices__container">
        <h2 className="ourServices__title">
          {PrincipalConstants.OUR_SERVICES__TITLE}
        </h2>
        <div className="ourServices__cards-container">
          <div>
            <OurServicesCard
              title={PrincipalConstants.OUR_SERVICES__MINDFULNESS}
              description={PrincipalConstants.OUR_SERVICES__MINDFULNESS_TEXT}
              image={"/img/indigo2025/mindfulness.png"}
            />
            <OurServicesCard
              title={PrincipalConstants.OUR_SERVICES__FITNESS}
              description={PrincipalConstants.OUR_SERVICES__FITNESS_TEXT}
              image={"/img/indigo2025/fitness.png"}
            />
          </div>
          <div>
            <OurServicesCard
              title={PrincipalConstants.OUR_SERVICES__ALIMENTATION}
              description={PrincipalConstants.OUR_SERVICES__ALIMENTATION_TEXT}
              image={"/img/indigo2025/alimentation.png"}
            />
            <OurServicesCard
              title={PrincipalConstants.OUR_SERVICES__ON_DEMAND_PLANS}
              description={
                PrincipalConstants.OUR_SERVICES__ON_DEMAND_PLANS_TEXT
              }
              image={"/img/indigo2025/innovation.jpeg"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
