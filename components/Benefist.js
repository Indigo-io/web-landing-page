import React from "react";

export default function Benefist() {
    return (
    <div className="camino" id="camino">
      <div className="camino__background" />
      <div className="container">
        <div className="camino__section">
          <img className="camino__img-b" src="img/webcoach-step1.png" />
          <div className="camino__texts">
            <h3 className="camino__texts--title">Beneficios para vos </h3>
            <ul className="camino__texts--description">
                <li class="list-item">Centralización de los datos de cada cliente.</li>
                <li class="list-item">Armado de actividades y planificaciones. </li>
                <li class="list-item">Carga y gestión de abonos por cliente.</li>
                <li class="list-item">Menú de notificaciones con vencimientos de abonos y planificaciones.</li>
                <li class="list-item">Carga anticipada de planificaciones.</li>
                <li class="list-item">Carga de recordatorios a sus clientes.</li>
                <li class="list-item">Visualización del feedback de tus clientes.</li>
              </ul>
          </div>
        </div>
        <div style={{height: "200px" }}> </div>
        <div className="camino__section reverse">
          <img className="camino__img-b" src="img/webcoach-step2.png" />
          <div className="camino__texts">
            <h3 className="camino__texts--title white">
                Beneficios para tu usaurio
            </h3>
            <ul className="camino__texts--description">
                <li class="list-item-c">Actividades y planificaciones en la App de Indigo.</li>
                <li class="list-item-c">Recordatorios que llegan en forma de Notificación Push.</li>
                <li class="list-item-c">Trackeo y visualización de sus progresos.</li>
                <li class="list-item-c">Feedback directo para el coach.</li>
                <li class="list-item-c">Descarga de archivos multimedia.</li>
                <li class="list-item-c">Rápida navegación.</li>
              </ul>
          </div>
        </div>
    
      </div>
    </div>
    );
}