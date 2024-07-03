import Image from "next/image";
import Link from "next/link";

export default function FooterB2C() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__wrapper">
        <div className="footer__data">
          <figure className="footer__links--logo-container">
            <Image
              src="/img/indigo2024/logoIndigoBlanco.png"
              layout="fill"
              alt="Logo Indigo"
            />
          </figure>
          <div className="footer__data--item">
            <Image
              style={{ marginRight: "1rem" }}
              src="/img/indigo2024/location-icon.png"
              width={18}
              height={22}
            />
            <p className="footer__data--text">
              Castillo 1366, C1414, CABA , Argentina
              <br /> Tel: + 54 (911) 2854 4896
            </p>
          </div>
          <div className="footer__data--item">
            <Image
              style={{ marginRight: "1rem" }}
              src="/img/indigo2024/location-icon.png"
              width={18}
              height={22}
            />
            <p className="footer__data--text">
              2625 Weston Rd., Suite D, Weston
              <br /> FL 33331, USA
              <br /> Tel: +1 (650) 276 3570
            </p>
          </div>
          <div className="footer__data--item">
            <Image
              style={{ marginRight: "1rem" }}
              src="/img/indigo2024/mail-icon.png"
              width={22}
              height={16}
            />
            <p className="footer__data--text">info@indigobalance.com</p>
          </div>
        </div>
        <div className="footer__links-sections-container">
          <div className="footer__links">
            <h3 className="footer__links--title">Páginas</h3>
            <Link href="/">
              <p className="footer__links--item">Home</p>
            </Link>
            <Link href="/tos-empresas">
              <p className="footer__links--item">Términos y condiciones</p>
            </Link>
            <Link href="/privacy">
              <p className="footer__links--item">Políticas de privacidad</p>
            </Link>
          </div>
          <div className="footer__sections">
            <h3 className="footer__links--title">Secciones</h3>
            <a href="#hero" className="footer__links--item">
              ¿Qué hacemos?
            </a>
            <a href="#beneficios" className="footer__links--item">
              Beneficios
            </a>
            <a href="#app" className="footer__links--item">
              Descarga la App
            </a>
          </div>
        </div>
        <div className="footer__rightIcons-container">
          <div className="footer__rightIcons">
            <h3 className="footer__rightIcons--title">¡Seguinos!</h3>
            <div className="footer__rightIcons-itemContainer">
              <a
                href="https://www.instagram.com/indigo.balance/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  style={{ marginRight: "1rem" }}
                  src="/img/indigo2024/instagram-icon.png"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/indigo-balance/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  style={{ marginRight: "1rem" }}
                  src="/img/indigo2024/linkedin-icon.png"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
          <div className="footer__rightIcons">
            <h3 className="footer__rightIcons--title">Descarga la app</h3>
            <div className="footer__rightIcons-itemContainer">
              <a
                href="https://play.google.com/store/apps/details?id=com.indigobalance.app"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  style={{ marginRight: "1rem" }}
                  src="/img/indigo2024/google-play.png"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/indigo-balance/id1611795903"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  style={{ marginRight: "1rem" }}
                  src="/img/indigo2024/apple-store.png"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="footer__copyright">
        Copyright © 2023 Indigo Mind, Inc. Todos los derechos reservados.
      </p>
    </footer>
  );
}
