import Image from "next/image";
import { B2BConstants } from "./constants/b2bConstants";

export default function OurFocus() {
  return (
    <section className="ourFocus__mainContainer" id="ourFocus">
      <div className="container">
        <h1 className="ourFocus__mainTitle">Nuestro Enfoque</h1>
        <div className="ourFocus__cardsContainer">
          <div className="ourFocus__card ourFocus__card1">
            <figure className="ourFocus__card--icon">
              <Image src="/img/indigo2024/meditation-icon.png" layout="fill" />
            </figure>
            <p className="ourFocus__title">{B2BConstants.ourFocus1Title}</p>
            <div className="ourFocus__descriptionContainer ourFocus__card1--descriptionContainer">
              <p className="ourFocus__description">
                {B2BConstants.ourFocus1Subtitle}
              </p>
            </div>
          </div>
          <div className="ourFocus__card ourFocus__card2">
            <figure className="ourFocus__card--icon">
              <Image src="/img/indigo2024/fitness-icon.png" layout="fill" />
            </figure>
            <p className="ourFocus__title">{B2BConstants.ourFocus2Title}</p>
            <div className="ourFocus__descriptionContainer ourFocus__card1--descriptionContainer">
              <p className="ourFocus__description">
                {B2BConstants.ourFocus2Subtitle}
              </p>
            </div>
          </div>
          <div className="ourFocus__card ourFocus__card3">
            <figure className="ourFocus__card--icon">
              <Image
                src="/img/indigo2024/alimentation-icon.png"
                layout="fill"
              />
            </figure>
            <p className="ourFocus__title">{B2BConstants.ourFocus3Title}</p>
            <div className="ourFocus__descriptionContainer ourFocus__card1--descriptionContainer">
              <p className="ourFocus__description">
                {B2BConstants.ourFocus3Subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
