import Image from "next/image";
import { B2CConstants } from "./constants/b2cConstants";

export default function HeroB2C() {
  return (
    <div className="heroB2C__main-container" id="hero">
      <div className="container">
        <div className="heroB2C__wrapper">
          <div className="heroB2C__text">
            <h1 className="heroB2C__title">{B2CConstants.heroTitle}</h1>
            <p className="heroB2C__description">
              <span>{B2CConstants.heroDescription}</span>
            </p>
          </div>
          <figure className="heroB2C__image-container">
            <Image
              className="heroB2C__image"
              src="/img/indigo2024/b2c_illustration.png"
              width={459}
              height={463}
              alt="Image"
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
