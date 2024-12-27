import Link from "next/link";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";

export default function Header() {
  const [showNavModal, setShowNavModal] = useState(false);

  const isMobile = useMediaQuery("(max-width:991px)");

  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="header-container d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link href="/">
              <figure className="header__logo"></figure>
            </Link>
          </div>

          <nav
            id="navbar"
            className={`navbar ${showNavModal ? "navbar-mobile" : ""}`}
          >
            <ul className="navbar-mobile__container">
              <li>
                <Link href="/">
                  <span className="header__item">Inicio</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <span className="header__item">Nosotros</span>
                </Link>
              </li>
              <li>
                <Link href="/#contacto">
                  <span className="header__item">Contacto</span>
                </Link>
              </li>
            </ul>
            {/*             <i
              className={`bi mobile-nav-toggle ${
                showNavModal ? "bi-x" : "bi-list"
              }`}
            ></i> */}
            {isMobile && (
              <Menu
                right
                customBurgerIcon={
                  <MenuIcon color="primary" className="header_hamburguerIcon" />
                }
                customCrossIcon={<CloseIcon color="secondary" className="" />}
                className={"header__burguerMenu"}
              >
                <ul className={"header_burguerMenu--item"}>
                  <li>
                    <Link href="/">
                      <span className="header__item">Inicio</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <span className="header__item">Nosotros</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contacto">
                      <span className="header__item">Contacto</span>
                    </Link>
                  </li>
                </ul>
              </Menu>
            )}
          </nav>
          <div className="header__filler"></div>
        </div>
      </header>
    </>
  );
}
