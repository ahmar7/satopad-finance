import React  from "react"; 

import Card from "./Slider/Card";
import Calculator from "./Calculator/Calculator";

const Tiers = () => {
   
  return (
    <section className="tiers-section tiers text-center">
      <div className="container">
        <h2 className="title secondary-glow">SatoPAD Tiers &amp; Access to IDOs</h2>
        <div data-v-18811a9f className="calc-carousel-container">
          <Calculator   />
          <div className="max-3d">
            <div className="abs-card">
              <Card />
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default Tiers;
