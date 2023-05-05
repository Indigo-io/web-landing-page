import React from "react";
<<<<<<< HEAD

=======
import Link from "next/link";
>>>>>>> aee4788c2ecff0effaa5b499c346670d148f8fe9

export default function GooglePlay() {
  return (
    <div className="google-play">
      <div className="container">
        <div className="google-play__wrapper">
<<<<<<< HEAD


        <div class="left-half">
            <h1 className="google-play__title">
                Empeza ya mismo
            </h1>
         </div>
         <div class="right-half">
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
                    style={{ width: "200px", height: "200px" }} 
                  />
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.indigobalance.app"
                  className="google-play__button"
                  rel="noreferrer"
                >
                  <img src="/img/download-google.svg" 
                  style={{ width: "200px", height: "200px" }} />
                </a>
              </div>
            </div>
          
          </div>

=======
          <div className="google-play__wrapper--text">
            <h3 className="google-play__title">
              Comienza a incorporar tu primer hábito. Pon tu inconsciente a tu
              favor.
            </h3>
            <p className="google-play__text">
              {/*Prueba la APP. */}Prueba la APP y comienza ahora a cuidar y
              entrenar tu cuerpo y tu mente
            </p>
          </div>
          <div className="google-play__wrapper-buttons">
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
                <img src="/img/download-google.svg" />
              </a>
            </div>
          </div>
>>>>>>> aee4788c2ecff0effaa5b499c346670d148f8fe9
        </div>
      </div>
    </div>
  );
}
