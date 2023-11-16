import React from "react";
import Link from "next/link";

export default function GooglePlay() {
  return (
    <div className="google-play" id="apps">
      <div className="container">
        <div className="google-play__wrapper">
          <div className="google-play__wrapper-left-half">
            <p className="google-play__title2">Empeza ya mismo!</p>
            <a
              href="https://especialistas.indigobalance.com/"
              rel="noreferrer"
              target="_blank"
            >
              <figure
                className="google-play__button-ios"
                style={{ maxWidth: "400px" }}
              >
                <img
                  className="google-play__image"
                  src="/img/logoIndigo_coach_blanco.png"
                />
              </figure>
            </a>
          </div>
          <div
            className="google-play__wrapper-right-half"
            style={{ justifyContent: "flex-start" }}
          >
            <p className="google-play__title2">La plataforma de tus usuarios</p>
            <div className="google-play__wrapper-buttons right-half">
              <div className="google-play__wrapper-download">
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/indigo-balance/id1611795903"
                  className="google-play__button-ios"
                  rel="noreferrer"
                >
                  <img
                    className="google-play__button-ios"
                    src="/img/download-ios.svg"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.indigobalance.app"
                  className="google-play__button"
                  rel="noreferrer"
                >
                  <img
                    className="google-play__image"
                    src="/img/download-google.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
