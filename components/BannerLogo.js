import React from "react";


export default function BannerLogo() {
    return (
    <div className="google-play">
      <div className="container">
        <div className="google-play__wrapper">
          <div className="google-play__wrapper--text">
          </div>
          <div className="google-play__wrapper-buttons">
            <div className="google-play__wrapper-download">
              <a
                target="_blank"
                    href="https://especialistas.indigobalance.com"
                className="google-play__button-ios"
                    rel="noreferrer">
                <img 
                src="/img/logoIndigo_coach_blanco.png"
                style={{ width: "450px", height: "200px" }} />
              </a>
                  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}