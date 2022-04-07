import Link from "next/link";

export default function Final() {
  return (
    <div className="wizard-step">
      <div>
        <h2 className="mb-3 text-center final-step">
          ¡Gracias por contestar! Ahora ya te conocemos un poquito más.
        </h2>
        <p className="text-center fs-5">
          Te vamos a estar contactando por mail o whatsapp para continuar este
          cambio que ya empezó.
        </p>

        <Link
          href="/"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-offset="-500"
          className="text-center fs-5"
        >
          <a className="text-center fs-5 d-sm-block mt-sm-4 white-text">
            Volver a la pagina principal
          </a>
        </Link>
      </div>
    </div>
  );
}
