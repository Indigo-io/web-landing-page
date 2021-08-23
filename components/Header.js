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
              {paths.map((path) => (
                <li key={`${path.path}-${path.label}`}>
                  <Link href={path.path}>
                    <a className={route.pathname === path.path ? "active" : ""}>
                      {path.label}
                    </a>
                  </Link>
                </li>
              ))}
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
