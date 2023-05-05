import React from "react";

export default function GooglePlay() {
  return (
    <div className="google-play">
      <div className="container">
        <div className="google-play__wrapper">
          <div className="left-half">
            <h1 className="google-play__title">Empeza ya mismo</h1>
          </div>
          <div className="right-half">
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
                  <img
                    src="/img/download-google.svg"
                    style={{ width: "200px", height: "200px" }}
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
