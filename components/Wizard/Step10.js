import { InlineWidget } from "react-calendly";

export default function Step10() {
  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center">
          ¡Gracias por contestar! Ahora ya te conocemos un poquito más.
        </h2>
        <p className="text-center fs-5">
          Agendá tu cita con expertos para continuar este cambio que ya empezó.
        </p>

        <p className="text-center" style={{ fontSize: "16px" }}>
          En caso de que ahora no puedas te enviamos un mail.
        </p>

        <InlineWidget
          url="https://calendly.com/indigoexperts/30min"
          styles={{
            height: "1070px",
          }}
        />
      </div>
    </div>
  );
}
