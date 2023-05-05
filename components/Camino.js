import React from "react";

export default function Camino() {
  return (
    <div className="camino" id="camino">
      <div className="camino__background" />
      <div className="container">
        <h1 className="camino__title">¿Como funciona?</h1>
        <div className="camino__section">
          <img className="camino__img" src="img/web-step1.png" />
          <div className="camino__texts">
            <div className="camino__number">1</div>
            <h3 className="camino__texts--title">Bajate la app y elegí un entrenador. </h3>
            <p className="camino__texts--description">
              Crea una cuenta, y elegí el entrenador que más te guste. 
              Ya tenes un entrenador personal? decile que use indigo y entrena cuando y donde quieras!
              No estas listo para entrenar? No te preocupes, elegi uno de nuestros “planes indigo”,
              una manera alternativa de contribuir tu bienestar.
            </p>
          </div>
        </div>
        <div className="camino__section reverse">
          <img className="camino__img" src="img/web-step2.png" />
          <div className="camino__texts">
            <div className="camino__number">2</div>
            <h3 className="camino__texts--title white">
                Comenza tu semana de prueba GRATIS
            </h3>
            <p className="camino__texts--description white">
                Al elegir un entrenador tendrás de manera inmediata una rutina para empezar a entrenar. 
                Luego podrás contactar al entrenador para discutir temas específicos y personalizar tu entrenamiento. 
                En caso de querer avanzar con ese entrenador, acordas directamente con él o ella precio y seguimiento.

            </p>
          </div>
        </div>
        <div className="camino__section">
          <img className="camino__img" src="img/web-step3.png" />
          <div className="camino__texts">
            <div className="camino__number">3</div>
            <h3 className="camino__texts--title">Sentite increiblemente bien</h3>
            <p className="camino__texts--description">
                Genera el hábito de entrenar y por qué no, otros hábitos saludables también. 
                
                Tenes de todo en nuestra app para sentirte pleno!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
