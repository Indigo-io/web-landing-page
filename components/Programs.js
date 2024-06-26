import { B2BConstants } from "./constants/b2bConstants";
import Image from "next/image";

export default function Programs() {
  return (
    <section className="programs__mainContainer" id="plans">
      <div className="container">
        <h1 className="programs__title">Nuestros Planes</h1>
        <div className="programs__container">
          <div className="programs__item">
            <div className="program__number--circle">
              <p className="program__number">01</p>
            </div>
            <div className="programs__icon--container">
              <Image
                src={"/img/indigo2024/plans_hexagon-icon1.png"}
                className="programs__icon"
                alt="Imagen"
                width={100}
                height={100}
              />
            </div>
            <p className="program__title">{B2BConstants.program1Title}</p>
            <p className="program__subtitle">{B2BConstants.program1Subtitle}</p>
          </div>
          <div className="programs__item">
            <div className="program__number--circle">
              <p className="program__number">02</p>
            </div>
            <div className="programs__icon--container">
              <Image
                src={"/img/indigo2024/plans_hexagon-icon2.png"}
                className="programs__icon"
                alt="Imagen"
                width={100}
                height={100}
              />
            </div>
            <p className="program__title">{B2BConstants.program2Title}</p>
            <p className="program__subtitle">{B2BConstants.program2Subtitle}</p>
          </div>
          <div className="programs__item">
            <div className="program__number--circle">
              <p className="program__number">03</p>
            </div>
            <div className="programs__icon--container">
              <Image
                src={"/img/indigo2024/plans_hexagon-icon3.png"}
                className="programs__icon"
                alt="Imagen"
                width={100}
                height={100}
              />
            </div>
            <p className="program__title">{B2BConstants.program2Title}</p>
            <p className="program__subtitle">{B2BConstants.program2Subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
