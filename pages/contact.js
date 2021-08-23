import LayoutSimple from "components/LayoutSimple";

export default function Contact() {
  return (
    <LayoutSimple title="Hablemos!">
      <main id="main">
        <section className="section">
          <div className="container">
            <div className="row mb-5 align-items-end">
              <div className="col-md-6" data-aos="fade-up">
                <h2>Formulario de contacto</h2>
                <p className="mb-0">
                  Escribinos tu consulta y te contestaremos a la brevedad!
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 ms-auto order-2" data-aos="fade-up">
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong className="d-block mb-1">Dirección</strong>
                    <span>
                      Usina Cowroking, Castillo 1366, Buenos Aires - Argentina
                    </span>
                  </li>
                  <li className="mb-3">
                    <strong className="d-block mb-1">Celular</strong>
                    <span>+54 9 11 2854 4896</span>
                  </li>
                  <li className="mb-3">
                    <strong className="d-block mb-1">Mail</strong>
                    <span>ipa@indigobalance.com</span>
                  </li>
                </ul>
              </div>

              <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-up">
                <form className="php-email-form" id="contact-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="name">Nombre</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group mt-3">
                      <label htmlFor="subject">Asunto</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        required
                      />
                    </div>
                    <div className="col-md-12 form-group mt-3">
                      <label htmlFor="name">Mensaje</label>
                      <textarea
                        className="form-control"
                        name="message"
                        required
                      ></textarea>
                    </div>
                    <input id="timestamp" type="hidden" name="timestamp" />
                    <div className="col-md-12 mb-3">
                      <div className="loading">Cargando</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Tu mensaje ha sido enviado. Muchas gracias!
                      </div>
                    </div>

                    <div className="col-md-6 form-group">
                      <input
                        type="submit"
                        className="btn btn-primary d-block w-100"
                        value="Enviar"
                        id="submit-form"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </LayoutSimple>
  );
}
