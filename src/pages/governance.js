import React from 'react';
import Header from '../layout/UniversalHeader/header';
import Footer from '../layout/Footer/Footer';
import Banner from '../components/GovernenceComponents/Banner/Banner';
import NftSupply from '../components/GovernenceComponents/NftSupply/NftSupply'; 
import Rewards from '../components/GovernenceComponents/Benefits/Benefits';
import Explore from '../components/GovernenceComponents/Explore/Explore';
import Community from '../components/GovernenceComponents/Community/Community';
import Background from '../components/GovernenceComponents/BodyBackground/Background';

const Governance = () => {
    return ( 
        <div className="governance">
          <Header />
          <Banner />
          <Background />
          <NftSupply />
          <Rewards />
          <Explore />
          <Community />
          <div className="max-width">
            <Footer />
          </div>
        </div> 
    );
}

export default Governance;
