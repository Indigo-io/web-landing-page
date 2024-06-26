import Image from "next/image";
import { WhiteLabelConstants } from "./constants/whiteLabelConstants";

export default function HeroWhiteLabel() {
  return (
    <div className="heroWhiteLabel__mainContainer" id="hero">
      <div className="container">
        <div className="heroWhiteLabel__upperSide">
          <div className="heroWhiteLabel__upperSide--textContainer">
            <h1 className="heroWhiteLabel__upperSide--title ">
              {WhiteLabelConstants.title1}
            </h1>
            <p className="heroWhiteLabel__upperSide--description">
              {WhiteLabelConstants.description1}
            </p>
          </div>
          <figure className="heroWhiteLabel__imageContainer">
            <Image
              className="heroWhiteLabel_image"
              src="/img/indigo2024/api-illustration.png"
              width={433}
              height={358}
              alt="white label image"
            />
          </figure>
        </div>
        <div className="heroWhiteLabel__upperSide--mobile">
          <h1 className="heroWhiteLabel__upperSide--title ">
            {WhiteLabelConstants.title1}
          </h1>
          <figure className="heroWhiteLabel__imageContainer">
            <Image
              className="heroWhiteLabel_image"
              src="/img/indigo2024/api-illustration.png"
              width={433}
              height={358}
              alt="white label image"
            />
          </figure>
          <p className="heroWhiteLabel__upperSide--description">
            {WhiteLabelConstants.description1}
          </p>
        </div>
        <div className="heroWhiteLabel__bottomSide">
          <h3 className="heroWhiteLabel__bottomSide--title">
            {WhiteLabelConstants.title2}
          </h3>
          <div className="heroWhiteLabel__qualification">
            <figure>
              <Image
                src="/img/indigo2024/rating.png"
                width={130}
                height={185}
              />
            </figure>
            <p className="heroWhiteLabel__qualification--text">
              {WhiteLabelConstants.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
