import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header({ paths }) {
  const route = useRouter();
  const [showNavModal, setShowNavModal] = useState(false);

  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="header-container d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link href="/">
              <span className="header__item">Home</span>
            </Link>
          </div>

          <nav
            id="navbar"
            className={`navbar ${showNavModal ? "navbar-mobile" : ""}`}
          >
            <ul className="navbar-mobile__container">
              <li>
                <Link href="/b2b">
                  <span className="header__item">B2B</span>
                </Link>
              </li>
              <li>
                <Link href="/b2c">
                  <span className="header__item">B2C</span>
                </Link>
              </li>
              <li>
                <Link href="/white-label">
                  <span className="header__item">Marca Blanca</span>
                </Link>
              </li>
              <li>
                <Link href="/coachs">
                  <span className="header__item">Coach</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <span className="header__item">Nosotros</span>
                </Link>
              </li>
            </ul>
            {/*             <i
              className={`bi mobile-nav-toggle ${
                showNavModal ? "bi-x" : "bi-list"
              }`}
            ></i> */}
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
                  <Link href="/b2b">
                    <span className="header__item header__item-mobile">
                      B2B
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/b2c">
                    <span className="header__item header__item-mobile">
                      B2C
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/white-label">
                    <span className="header__item header__item-mobile">
                      Marca Blanca
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/coachs">
                    <span className="header__item header__item-mobile">
                      Coach
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us">
                    <span className="header__item header__item-mobile">
                      Nosotros
                    </span>
                  </Link>
                </li>
              </ul>
            </Menu>
          </nav>
        </div>
      </header>
    </>
  );
}
