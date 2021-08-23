import Link from "next/link";
import Layout from "components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="hero-section" id="hero">
        <div className="wave">
          <svg
            width="100%"
            height="355px"
            viewBox="0 0 1920 355"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
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
                  d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z"
                  id="Path"
                ></path>
              </g>
            </g>
          </svg>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 hero-text-image">
              <div className="row">
                <div className="col-lg-8 text-center text-lg-start">
                  <h1 data-aos="fade-right">
                    Mente y cuerpo conscientemente balanceados
                  </h1>
                  <p
                    className="mb-5"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    width="80%"
                  >
                    Creemos que el bienestar consiste en la armonía de mente y
                    cuerpo. Indigo te ayuda a crear hábitos saludables
                    trabajando en tu nutrición, tu entrenamiento físico y
                    mental. Sé tu mejor versión.
                  </p>
                  <p
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-offset="-500"
                  >
                    <a href="#como_hacemos" className="btn btn-outline-white">
                      conocer más
                    </a>
                  </p>
                </div>
                <div className="col-lg-4 iphone-wrap">
                  <img
                    src="/img/site_ilus.png"
                    alt="Image"
                    style={{ width: "30em" }}
                    data-aos="fade-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section className="section">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-md-5" data-aos="fade-up">
                <h2 className="section-heading">Entrenamiento integral</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="">
                <div className="feature-1 text-center">
                  <div className="wrap-icon icon-1">
                    <i>
                      <img
                        src="/img/nutrition.png"
                        alt=""
                        height="50px"
                        width="50px"
                        className="img-fluid"
                      />
                    </i>
                  </div>
                  <h3 className="mb-3">Nutrición</h3>
                  <p>
                    Incorporar hábitos alimentarios saludables te permitirá
                    sentirte mejor con tu cuerpo, clarificar tus pensamientos y
                    tener más energía para encarar los desafíos del día a día.
                  </p>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-1 text-center">
                  <div className="wrap-icon icon-1">
                    <i>
                      <img
                        src="/img/mente.png"
                        alt=""
                        height="50px"
                        width="50px"
                        className="img-fluid"
                      />
                    </i>
                  </div>
                  <h3 className="mb-3">Mente</h3>
                  <p>
                    Te ayudaremos a trabajar en tus capacidades cognitivas,
                    mejorar tu gestión emocional, y aprender a calmar tu mente.
                    Una mente en paz toma mejores decisiones.
                  </p>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-1 text-center">
                  <div className="wrap-icon icon-1">
                    <i>
                      <img
                        src="/img/fitness.png"
                        alt=""
                        height="50px"
                        width="50px"
                        className="img-fluid"
                      />
                    </i>
                  </div>
                  <h3 className="mb-3">Fitness</h3>
                  <p>
                    Entrena tu cuerpo, mantente saludable, vive más y mejor.
                    Buscaremos que ganes fuerza y movilidad. Tu cuerpo es tu
                    templo, queremos ayudarte a cuidarlo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-7 mb-5">
                <h2 id="como_hacemos" className="section-heading">
                  Cómo lo hacemos?
                </h2>
                <p>
                  Trabajamos día a día combinando tecnología con expertos en
                  fitness, nutrición, neurociencia y mindfulness, con el
                  objetivo de generar conciencia y mejorar la calidad de vida de
                  nuestros usuarios.
                </p>
              </div>
            </div>

            <div
              className="row justify-content-center text-center mb-5"
              data-aos="fade"
            >
              <div className="row">
                <div className="col-md-4">
                  <div className="step" style={{ height: "300px !important" }}>
                    <span className="number">01</span>
                    <h3>Conocer tus motivaciones</h3>
                    <p>
                      Basándonos en una evaluación continua a través de
                      encuestas y entrevistas, identificaremos tus motivaciones
                      para crear lo que nosotros llamamos un programa.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="step" style={{ height: "300px !important" }}>
                    <span className="number">02</span>
                    <h3>Crear programa</h3>
                    <p>
                      El mismo estará compuesto por una lista de actividades las
                      cuales pueden variar desde un entrenamiento físico, hasta
                      un tipo de meditación o un plan alimentario siempre
                      poniendo el foco en tus objetivos, los cuales plantearemos
                      en conjunto con los profesionales.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="step" style={{ height: "300px !important" }}>
                    <span className="number">03</span>
                    <h3>Fundamentos y seguimiento</h3>
                    <p>
                      Te explicaremos la ciencia y el por qué creemos que esos
                      hábitos van a impactar de manera positiva en tu vida.Te
                      acompañaremos en el proceso actualizando tu programa a
                      medida que vayas cumpliendo tus objetivos y haciendo un
                      seguimiento de los mismos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 me-auto text-center text-md-start">
                <h1 style={{ color: "white" }}>Descubrí tu mejor versión</h1>
                <span style={{ color: "white" }}>
                  Se parte de los primeros en probar nuestro producto,{" "}
                  <strong>GRATIS!</strong>
                </span>
              </div>
              <div className="col-md-4 text-left text-md-end">
                <p>
                  <Link href="/start-now">
                    <a className="btn btn-outline-white">Empezar ahora!</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
