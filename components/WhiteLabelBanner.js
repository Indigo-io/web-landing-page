import Image from "next/image";
import { WhiteLabelConstants } from "./constants/whiteLabelConstants";
import { RoundedButton } from "./uiComponents/RoundedButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
        <a href="https://wa.me/+12056153558" target="_blank">
          <div className="whiteLabelBanner__whatsapp-buttonContainer">
            <WhatsAppIcon sx={{ color: "white", fontSize: "32px" }} />
          </div>
        </a>
      </div>
    </section>
  );
}
