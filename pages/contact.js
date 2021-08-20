import Script from "next/script";
import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <meta name="description" content="Indigo Balance" />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <title>Indigo Balance</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />

        <link
          href="images/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="images/webclip.png" rel="apple-touch-icon" />

        <link href="/img/favicon.png" rel="icon" />
        <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" />
      </Head>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <a href="index.html">
              <img src="/img/logo.png" alt="" className="img-fluid" />
            </a>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link href={`/`}>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href={`/contact`}>
                  <a className="active" href="contact.html">
                    Contacto
                  </a>
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero-section inner-page">
          <div className="wave">
            <svg
              width="1920px"
              height="265px"
              viewBox="0 0 1920 265"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Apple-TV"
                  transform="translate(0.000000, -402.000000)"
                  fill="#FFFFFF"
                >
                  <path
                    d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,667 L1017.15166,667 L0,667 L0,439.134243 Z"
                    id="Path"
                  ></path>
                </g>
              </g>
            </svg>
          </div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-md-7 text-center hero-text">
                    <h1 data-aos="fade-up" data-aos-delay="">
                      Hablemos!
                    </h1>
                    <p
                      className="mb-5"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <p>
                    Usina Cowroking, Castillo 1366, Buenos Aires - Argentina
                  </p>
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

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <Script src="/vendor/aos/aos.js" strategy="beforeInteractive"></Script>
      <Script
        src="/vendor/bootstrap/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/vendor/php-email-form/validate.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="/vendor/swiper/swiper-bundle.min.js"
        strategy="beforeInteractive"
      ></Script>

      <Script src="/js/main.js" strategy="beforeInteractive"></Script>
      <Script
        src="https://code.jquery.com/jquery-3.3.1.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="jquery.serialize-object.min.js"
        strategy="beforeInteractive"
      ></Script>
      {/* <Script type="text/javascript">
          {function getDate() {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd < 10) {
              dd = "0" + dd;
            }
            if (mm < 10) {
              mm = "0" + mm;
            }
            today = yyyy + "" + mm + "" + dd;
    
            document.getElementById("timestamp").value = today;
          }
          //call getDate() when loading the page
          getDate()
          }
        </Script> */}
      {/* <Script type="text/javascript" language="javascript">
          var $form = $("form#contact-form"),
            url =
              "https://script.google.com/macros/s/AKfycbxDzDOLYk7jnZb6lnruI4wqytdjuIf-65O25-gUYhS3NciKZ1A8aJxfg2zZQQGqbBWu/exec";
    
          $("#submit-form").on("click", function (e) {
            e.preventDefault();
            var jqxhr = $.ajax({
              url: url,
              method: "GET",
              dataType: "json",
              data: $form.serializeObject(),
              success: function (data) {},
            });
          });
        </Script> */}
    </>
  );
}
