import React from 'react';
import SectionBackground from './SectionBackground/SectionBackground';
import './Explore.css'
import Info from './ExploreInfo/Info';
import Intro from './ExploreIntro/Intro';
const Explore = () => {
    return (
      
      <div className="max-width">
        <div className="css-1qrh3dn">
          <div className="css-17lvh9k">
            <img
              src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-explore-m.png"
              className="css-1bkwc2o"
            />
            <img
              src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-explore.png"
              className="css-6djoym"
            />
            <div data-bn-type="text" className="css-ml9h15">
              Explore SatoPAD DAO
            </div>
          </div>
          <div className="css-ifrbtp">
            <Info/>
            <div className="governance-landing-explore-intro">
              <SectionBackground />
              <Intro/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Explore;
