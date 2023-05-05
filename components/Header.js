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
              <a>
                <img src="/img/logo.png" alt="" className="img-fluid" />
              </a>
            </Link>
          </div>

          <nav
            id="navbar"
            className={`navbar ${showNavModal ? "navbar-mobile" : ""}`}
          >
            <ul>
              <li>
                <a className="header__item" href="#camino">
                  Como funciona?
                </a>
              </li>
              <li>
              <Link href="/coachs">
                <a className="header__item">
                  Sos coach?
                </a>
              </Link>
              </li>
              <li>
                <a className="header__item" href="#contacto">
                  Contacto
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
