import { RoundedButton } from "./uiComponents/RoundedButton";
import { B2BConstants } from "./constants/b2bConstants";

export function Demo() {
  const demoLink = "https://www.youtube.com/watch?v=3Wv_AoTx4gs";
  return (
    <section className="demo" id="demo">
      <div className="demo__mainContainer">
        <span
          style={{
            fontSize: "244px",
            color: "#FFDD45",
            height: "180px",
          }}
        >
          “
        </span>
        <h1 className="demo__title">{B2BConstants.demoText}</h1>
        <RoundedButton
          text={"Solicitar Demo"}
          sx={{
            width: "250px",
            backgroundColor: "#3D5EF3",
          }}
          onClick={() => window.open(demoLink, "_blank")}
        />
      </div>
    </section>
  );
}
