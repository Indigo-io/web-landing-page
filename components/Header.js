import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header({ paths }) {
  const route = useRouter();
  const [showNavModal, setShowNavModal] = useState(false);

  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link href="/">
              <img src="/img/logo.png" alt="" className="img-fluid" />
            </Link>
          </div>

          <nav
            id="navbar"
            className={`navbar ${showNavModal ? "navbar-mobile" : ""}`}
          >
            <ul className="navbar-mobile__container">
              <li>
                <Link href="/about-us">
                  <span className="header__item">Nosotros</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="header__item">Soy empresa</span>
                </Link>
              </li>
              <li>
                <Link href="/coachs">
                  <span className="header__item">Soy coach</span>
                </Link>
              </li>
              <li>
                <a href="#camino">
                  <span className="header__item">Como funciona?</span>
                </a>
              </li>
              <li>
                <a href="#contacto">
                  <span className="header__item">Contacto</span>
                </a>
              </li>
            </ul>
            <i
              className={`bi mobile-nav-toggle ${
                showNavModal ? "bi-x" : "bi-list"
              }`}
              onClick={() => setShowNavModal(!showNavModal)}
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
}
