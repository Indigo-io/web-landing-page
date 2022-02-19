import React from "react";

export default function Video() {
  return (
    <div className="video" id="porque">
      <div className="container">
        <h1 className="video__title">¿Por qué Indigo?</h1>
        <p className="video__text">
          Nuestros founders nos cuentan, por qué <br />
          decidieron crear Indigo
        </p>
        <video controls className="video__video">
          <source src="video/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
