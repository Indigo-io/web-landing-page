import Image from "next/image";
import { B2CConstants } from "./constants/b2cConstants";

export default function UserBenefits() {
  return (
    <section className="userBenefits__mainContainer" id="beneficios">
      <div className="container">
        <h1 className="userBenefits__title">
          {B2CConstants.userBenefitsMainTitle}
        </h1>
        <div className="userBenefits__container">
          <div className="userBenefits__item">
            <div className="userBenefits__card-number--circle">
              <p className="userBenefits__card-number">01</p>
            </div>
            <div className="userBenefits__icon--container">
              <Image
                src={"/img/indigo2024/customPlans_hexagon-icon.png"}
                className="userBenefits__icon"
                alt="Imagen"
                width={100}
                height={100}
              />
            </div>
            <p className="userBenefits__card-title">
              {B2CConstants.userBenefitsTitle1}
            </p>
            <p className="userBenefits__card-text">
              {B2CConstants.userBenefitsText1}
            </p>
          </div>
          <div className="userBenefits__item">
            <div className="userBenefits__card-number--circle">
              <p className="userBenefits__card-number">02</p>
            </div>
            <div className="userBenefits__icon--container">
              <Image
                src={"/img/indigo2024/habitTracking_hexagon-icon.png"}
                className="userBenefits__icon"
                alt="Imagen"
                width={100}
                height={100}
              />
            </div>
            <p className="userBenefits__card-title">
              {B2CConstants.userBenefitsTitle2}
            </p>
            <p className="userBenefits__card-text">
              {B2CConstants.userBenefitsText2}
            </p>
          </div>
          <div className="userBenefits__item">
            <div className="userBenefits__card-number--circle">
              <p className="userBenefits__card-number">03</p>
            </div>
            <div className="userBenefits__icon--container">
              <Image
                src={"/img/indigo2024/supportCommunity_hexagon-icon.png"}
                className="userBenefits__icon"
                alt="Imagen"
                width={100}
                height={100}
              />
            </div>
            <p className="userBenefits__card-title">
              {B2CConstants.userBenefitsTitle3}
            </p>
            <p className="userBenefits__card-text">
              {B2CConstants.userBenefitsText3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
