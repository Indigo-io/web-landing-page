import Image from "next/image";
import { B2BConstants } from "./constants/b2bConstants";

export function HeroB2B() {
  return (
    <div className="heroB2B__main-container" id="hero">
      <div className="container">
        <div className="heroB2B__wrapper">
          <div className="heroB2B__text">
            <h1 className="heroB2B__title">{B2BConstants.heroTitle}</h1>
            <p className="heroB2B__description">
              <span>{B2BConstants.heroText}</span>
            </p>
          </div>
          <figure className="heroB2B__image-container">
            <Image
              className="heroB2B__image"
              src="/img/indigo2024/b2b_illustration.png"
              layout="fill"
              alt="Image"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
