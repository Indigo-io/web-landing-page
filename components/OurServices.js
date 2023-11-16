import React from "react";
import { BoxContainer } from "./uiComponents/BoxContainer";
import { B2bConstants } from "./constants/b2bConstants";

export default function ourServices() {
  return (
    <div className="container">
      <div className="ourServicesContainer" id="servicios">
        <p className="ourServicesTitle">¿Que incluyen nuestros servicios?</p>
        <div className="ourServicesBoxes">
          {B2bConstants.ourServicesInfo.map((item, i) => (
            <BoxContainer
              text={item.description}
              icon={item.icon}
              title={item.title}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
