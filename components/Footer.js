export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h3>Redes Sociales</h3>
            <p>
              Seguinos en nuestras redes para conocer un poco más de lo que
              estamos haciendo.
            </p>
            <p className="social">
              <a
                href="https://www.instagram.com/indigo.balance/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bi bi-instagram"></span>
              </a>
              <a
                href="https://www.linkedin.com/company/indigo-balance/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bi bi-linkedin"></span>
              </a>
            </p>
          </div>
          <div className="col-md-7 ms-auto">
            <div className="row site-section pt-0">
              <div className="col-md-4 mb-4 mb-md-0">
                <h3>Teléfono</h3>
                <ul className="list-unstyled">
                  <p>+54 9 11 2854 4896</p>
                </ul>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <h3>Mail</h3>
                <ul className="list-unstyled">
                  <p>ipa@indigobalance.com</p>
                </ul>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <h3>Dirección</h3>
                <p>Usina Coworking, Castillo 1366, Buenos Aires - Argentina</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-md-7">
            <p className="copyright">
              &copy;Indigo Balance 2021.Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
