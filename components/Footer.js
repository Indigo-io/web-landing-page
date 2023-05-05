import Link from "next/link";

<<<<<<< HEAD

=======
>>>>>>> aee4788c2ecff0effaa5b499c346670d148f8fe9
export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__links">
            <h3 className="footer__links--title">Páginas</h3>
            <a href="#contacto" className="footer__links--item">
              Contacto
            </a>
<<<<<<< HEAD
            <Link href="/coachs">
              <a className="footer__links--item">Indigo Coachs</a>
            </Link>
=======
            <a href="#" className="footer__links--item">
              Indigo Empresas
            </a>
>>>>>>> aee4788c2ecff0effaa5b499c346670d148f8fe9
            <Link href="/tos">
              <a className="footer__links--item">Términos y condiciones</a>
            </Link>
            <Link href="/privacy">
              <a className="footer__links--item">Políticas de privacidad</a>
            </Link>
          </div>
          <div className="footer__data">
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
        <span className="footer__copyright">
<<<<<<< HEAD
          Copyright © 2023 Indigo Mind, Inc. Todos los derechos reservados.
=======
          Copyright © 2022 Indigo Mind, Inc. Todos los derechos reservados.
>>>>>>> aee4788c2ecff0effaa5b499c346670d148f8fe9
        </span>
      </div>
    </footer>
  );
}
