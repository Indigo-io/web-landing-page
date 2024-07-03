import { WhiteLabelConstants } from "./constants/whiteLabelConstants";
import { RoundedButton } from "./uiComponents/RoundedButton";

export default function WhiteLabelBanner() {
  return (
    <section className="whiteLabelBanner" id="api">
      <div className="whiteLabelBanner__mainContainer">
        <h1 className="whiteLabelBanner__title">
          {WhiteLabelConstants.bannerTitle}
        </h1>
        <p className="whiteLabelBanner__description">
          {WhiteLabelConstants.bannerDescription}
        </p>
        <p className="whiteLabelBanner__description">
          {WhiteLabelConstants.bannerCallToActionPhrase}
        </p>
        <RoundedButton
          text={"Visita la API"}
          sx={{
            width: "250px",
            backgroundColor: "#3D5EF3",
            letterSpacing: "1.5px",
            fontWeight: "bold",
            border: "none",
          }}
          onClick={() =>
            window.open(
              "https://us-central1-indigo-backoffice-test.cloudfunctions.net/api/doc",
              "_blank"
            )
          }
        />
      </div>
    </section>
  );
}
