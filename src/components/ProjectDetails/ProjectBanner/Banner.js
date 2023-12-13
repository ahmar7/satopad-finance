import React from 'react';
import './Banner.css'
import PrivateBanner from "../../../assets/img/syncera-ido-large.png";
const Banner = () => {
    return (
      <div className="w-full max-w-[1200px] banner-position">
        <div className="relative h-[200px] overflow-hidden">
          <img
            src={ PrivateBanner }
            className="object-cover object-center w-full banner-private h-full"
            alt=""
          />
        </div>
      </div>
    );
}

export default Banner;
