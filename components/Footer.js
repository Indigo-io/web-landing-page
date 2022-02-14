export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__links">
            <h3 className="footer__links--title">Páginas</h3>
            <p className="footer__links--item">Home</p>
            <p className="footer__links--item">Por qué</p>
            <p className="footer__links--item">El Camino</p>
            <p className="footer__links--item">Testimonios</p>
            <p className="footer__links--item">Contacto</p>
          </div>
          <div className="footer__data">
            <div className="footer__data--item">
              <span className="bi bi-geo-alt footer__icon"></span>
              <p className="footer__data--text">
                Usina Cowroking, Castillo 1366,
                <br /> Buenos Aires - Argentina
              </p>
            </div>
            <div className="footer__data--item">
              <span className="bi bi-phone footer__icon"></span>
              <p className="footer__data--text">+54 9 11 2854 4896</p>
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
      </div>
    </footer>
  );
}
