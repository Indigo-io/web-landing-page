import React from "react";
import Link from "next/link";

export default function KnowMore() {
  return (
    <div className="google-play">
      <div className="container">
        <div className="google-play__wrapper">
          <div className="google-play__wrapper--text">
            <Link href="/coachs">
              <h1 className="google-play__title">¡Enterate mas!</h1>
            </Link>
          </div>
          <div className="google-play__wrapper-buttons">
            <div className="google-play__wrapper-download">
              <Link href="/coachs">
                <a
                  target="_blank"
                  href="https://especialistas.indigobalance.com"
                  className="google-play__button-ios"
                  rel="noreferrer"
                >
                  <img
                    src="/img/logoIndigo_coach_blanco.png"
                    style={{ width: "450px", height: "200px" }}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
