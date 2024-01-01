import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__wrapper">
        <div className="footer__links">
          <h3 className="footer__links--title">Páginas</h3>
          <Link href="/about-us">
            <p className="footer__links--item">Nosotros</p>
          </Link>
          <Link href="/">
            <p className="footer__links--item">Indigo Empresas</p>
          </Link>
          <Link href="/coachs">
            <p className="footer__links--item">Indigo Coachs</p>
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
            ¿Quienes Somos?
          </a>
          <a href="#beneficios" className="footer__links--item">
            Beneficios
          </a>
          <a href="#servicios" className="footer__links--item">
            Nuestros Servicios
          </a>
          <a href="#testimonios" className="footer__links--item">
            Testimonios
          </a>
          <a href="#contacto" className="footer__links--item">
            Contacto
          </a>
        </div>
        <div className="footer__data">
          <h3 className="footer__links--title">Información Adicional</h3>
          <div className="footer__data--item">
            <span className="bi bi-geo-alt footer__icon"></span>
            <p className="footer__data--text">
              Castillo 1366, C1414, CABA , Argentina
              <br /> Te: + 54 (911) 2854 4896
            </p>
          </div>
          <div className="footer__data--item">
            <span className="bi bi-geo-alt footer__icon"></span>
            <p className="footer__data--text">
              2625 Weston Rd., Suite D, Weston, FL
              <br /> 33331, USA - Te: +1 (650) 276 3570
            </p>
          </div>
          <div className="footer__data--item">
            <span className="bi bi-at footer__icon"></span>
            <p className="footer__data--text">info@indigobalance.com</p>
          </div>
          <div className="footer__data--item">
            <a
              href="https://www.instagram.com/indigo.balance/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bi bi-instagram footer__icon"></span>
            </a>
            <a
              href="https://www.linkedin.com/company/indigo-balance/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bi bi-linkedin footer__icon"></span>
            </a>
          </div>
        </div>
      </div>
      <p className="footer__copyright">
        Copyright © {new Date().getFullYear()} Indigo Mind, Inc. Todos los
        derechos reservados.
      </p>
    </footer>
  );
}
