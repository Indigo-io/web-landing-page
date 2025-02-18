import { PrincipalConstants } from "./constants/principalConstants";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import ShopIcon from "@mui/icons-material/Shop";
import AppleIcon from "@mui/icons-material/Apple";

export default function FooterHealth() {
  const mq1200 = useMediaQuery("(max-width:1200px)");

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <div
          className={`footer__sections-container ${mq1200 ? "responsive" : ""}`}
        >
          <div className="footer__section">
            <figure className="footer__logo" />
            <span className="footer__location">
              {PrincipalConstants.FOOTER__LOCATION_ARG}
            </span>
            <span className="footer__location">
              {PrincipalConstants.FOOTER__LOCATION_USA}
            </span>
            <span className="footer__location">
              {PrincipalConstants.FOOTER__EMAIL}
            </span>
          </div>

          <div className="footer__links-section">
            <div className="footer__section">
              <span className="footer__section-title">Páginas</span>
              <Link href="/" className="footer__section-link">
                Home
              </Link>
              <Link href="/health" className="footer__section-link">
                Nosotros
              </Link>
              <Link href="/health" className="footer__section-link">
                Salud
              </Link>
              <Link href="/tos-empresas" className="footer__section-link">
                Términos y condiciones
              </Link>
              <Link href="/privacy" className="footer__section-link">
                Políticas de privacidad
              </Link>
            </div>

            <div className="footer__section">
              <span className="footer__section-title">Secciones</span>
              <Link href="/health#description" className="footer__section-item">
                Indigo Salud
              </Link>
              <Link href="/health#managment" className="footer__section-item">
                Gestion
              </Link>
              <Link href="/health#ecosystem" className="footer__section-item">
                Ecosistema
              </Link>
              <Link href="/health#model" className="footer__section-item">
                Modelo
              </Link>
              <Link href="/health#AI" className="footer__section-item">
                Inteligencia Artificial
              </Link>
              <Link href="/health#contact" className="footer__section-item">
                Contacto
              </Link>
            </div>
          </div>

          <div>
            <div className="footer__section">
              <span className="footer__section-title">¡Seguinos!</span>
              <div className="footer__section_social-container">
                <a
                  href="https://www.instagram.com/indigo.balance/?hl=es-la"
                  className="footer__section-social"
                  style={{
                    backgroundImage: `url("/img/indigo2025/instagram.svg")`,
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <a
                  href="https://www.linkedin.com/company/indigo-balance/posts/?feedView=all"
                  className="footer__section-social"
                  style={{
                    backgroundImage: `url("/img/indigo2025/linkedin.svg")`,
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>
            </div>

            <div className="footer__section" style={{ paddingTop: "20px" }}>
              <span className="footer__section-title">Descarga la app</span>
              <div className="footer__section_social-container">
                <a
                  href="https://apps.apple.com/ar/app/indigo-balance/id1611795903"
                  className="footer__section-store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <AppleIcon className="footer__store-icon" />
                    App Store
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.indigobalance.app"
                  className="footer__section-store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <ShopIcon className="footer__store-icon" />
                    Google Play
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <span className="footer__copyright">
          {PrincipalConstants.FOOTER__COPYRIGHT}
        </span>
      </div>
    </footer>
  );
}
