import React from 'react';
import SocialIcons from './SocialIcons/SocialIcons';
import Roadmap from './Roadmap/Roadmap';
import PriceBox from './PriceBox/PriceBox';
import './sidebar.css'
const ProjectSidebar = () => {
    return (
        <div className="lg:col-start-3 picelar lg:pr-5 xl:pr-0">
            <SocialIcons/>
            <Roadmap/>
            <PriceBox/>
        </div>
    );
}

export default ProjectSidebar;
