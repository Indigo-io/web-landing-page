import { B2CConstants } from "./constants/b2cConstants";

export default function BannerB2C() {
  return (
    <section className="bannerB2C" id="app">
      <div className="bannerB2C__mainContainer">
        <span
          style={{
            fontSize: "244px",
            color: "#FFDD45",
            height: "180px",
          }}
        >
          “
        </span>
        <h1 className="bannerB2C__title">{B2CConstants.bannerText1}</h1>
        <h3 className="bannerB2C__subtitle">{B2CConstants.bannerText2}</h3>
        <div className="bannerB2C__appsContainer">
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/indigo-balance/id1611795903"
            className="bannerB2C__appImage"
            rel="noreferrer"
          >
            <img className="bannerB2C__appImage" src="/img/download-ios.svg" />
          </a>
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.indigobalance.app"
            className="bannerB2C__appImage"
            rel="noreferrer"
          >
            <img
              className="bannerB2C__appImage"
              src="/img/download-google.svg"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
