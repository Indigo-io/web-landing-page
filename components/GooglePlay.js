import React from "react";
import Link from "next/link";

export default function GooglePlay() {
  return (
    <div className="google-play">
      <div className="container">
        <div className="google-play__wrapper">
          <div className="google-play__wrapper--text">
            <h3 className="google-play__title">
              Disfruta de tu vida con total plenitud y conciencia.
            </h3>
            <p className="google-play__text">
              {/*Prueba la APP. */}Comienza ahora a cuidar y entrenar tu cuerpo
              y tu mente.
            </p>
          </div>
          <div className="google-play__wrapper-buttons">
            <Link href="/start-now">
              <a className="google-play__button-register">Regístrate</a>
            </Link>
            {/*<div className="google-play__wrapper-download">*/}
            {/*<a*/}
            {/*  target="_blank"*/}
            {/*  href="https://play.google.com/store/apps/details?id=com.facebook.lite"*/}
            {/*  className="google-play__button-ios"*/}
            {/*  rel="noreferrer"*/}
            {/*>*/}
            {/*  <img className="google-play__button-ios" src="/img/download-ios.svg" />*/}
            {/*</a>*/}
            {/*<a*/}
            {/*  target="_blank"*/}
            {/*  href="https://play.google.com/store/apps/details?id=com.facebook.lite"*/}
            {/*  className="google-play__button"*/}
            {/*  rel="noreferrer"*/}
            {/*>*/}
            {/*  <img src="/img/download-google.svg" />*/}
            {/*</a>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
