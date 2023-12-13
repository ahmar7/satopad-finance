import React from "react";
import "./Features.css";
import SyncSwapIcon from "../../../assets/img/iZi_token.png";
import { Link } from "react-router-dom";

const Features = () => {
return(
     <section className="features-section">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="features-item features-item--buy">
            <div className="features-item__content">
              <h4 className="features-item__title">Buy SATO</h4>
              <a
                href="https://twitter.com/izumi_Finance/status/1657716417637273601"
                target="_blank"
                rel="noreferrer noopener"
                className="round-button dark btn btn-main"
              >
                <img
                  src={SyncSwapIcon}
                  className="rounded-circle"
                />
                <span>TBA</span>
              </a>
              <a
                href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/private-sale"
                target="_blank"
                rel="noreferrer noopener"
                className="round-button dark btn btn-main"
              >
              <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAADeUExURUdwTCOtjySvjyOvkiOvkSKvkSCvjyOvkSCvjyKvkSKvkiKtjyKujyOujyOvjyOvkiKtjyOvkiKxkySvjyKvkyKvkCOujySvjyKvjyOukSKvkCCrjyOvkCSrjyOujyOvkCStjyKxkyCvjyOsjyCsjyOvkCOvjyCvjyG1lCOvkf///5HXyK3h1j65n0y+peP18uT18vL6+PH6+FrDrDC0mD65nnXNuq3h1dbw61rDrbrm3Ey+pnbNuoPSwcjr45/cz57cz2jIs+P18TG0mMjr5Kzh1j+5nmjItOT18brm3bFIgwEAAAApdFJOUwBgcJ/fzxDvIN+PgJCQYK9wv2+Af9+gQICgz0CvQLC/gH9AUFCfUFAfb6gjEQAAAoNJREFUWMOtl2d7mzAQgMHGRuDVNMNpkjbdrWzcEg8aO3t1/P8/VDMlne4kSHvf4OF90TydHIcI5oajTsC3EXRGvY/MaRTHYYbK4bWP69LdPZ+j4bnsX/A0/NCqeGnA81YYcbbDreGx5/++6McLig95zdjD+TavHW2M7/AG0Wn4//Wvla0N7wz47PtkMpmClyEYfxuvG5S5YL6V1wy+vB7E1rnabC5xXjPsCN6tXp6nH/7Aec1QdYJVDbjMP1zgPDT4XW0FRuA7wENDTxtBINB4YCiaIEYACAR/doMbemAKVIHEf+PTyiAPsZ/y7zkuUHhOGF6DTSAJAC8bbgTQV3sgCTReNixFetrOAccECC8ZxDrhX50PmADlheFCvHKdHiKIcL40/ObyIIwQwYTgc8OjnFzeqJkswvnZNCq36HLxE+S2gBaU/N18+3C/xE8Jh5OCkn/AM1IRtKDq/zp/vm8qmJeCu/z5vKmgMjycZY9PhMAwiKUhyRqwIgbRNI2lYXYbXRWTsFxfgGk0LqQ5tpA26kLqI4KnmDDkS/layUkuuplwA7KZvlDbGTNg25mRCUU3iISykhOKMghySoOGKZaYP20FYyqpqgaUz5Kq41NpXTbgvJedC4fkwSIMEX6wDPPalD7aYsvRVpQIh/ThGhsP10FZHldNSLTjPTbwomZtVe+u089u5QIjpguMoShRRImcPP5J1BInpnivbpEV1yiypE6QBphUW2qhOLAZIP8WlqqvTKXuIoGnwsH/L7YtbbD+P43duvyAurK06l15WoZLV2DnT803v2Hw/N8XjRiYLp673Rp3V0a1oh6exfhAc+z3x80u8Oxz7+RoP0OPTvr0tfsvqm4F7TgnytkAAAAASUVORK5CYII="
                  className="rounded-circle"
                />
                <span>TBA</span>  
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="features-item features-item--lock">
            <div className="features-item__content">
              <h4 className="features-item__title">Stake SERA</h4>
              <p className="features-item__text">
                Lock SERA <span className="secondary-glow fw-bold">
                  to participate in our upcoming IDOs
                </span> on Syncera!
              </p>
               <Link
                to="/staking"
                type="button"
                className="btn-two"
              >
                TO STAKE
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#F7931A"
                className="css-aw5qf7"
              >
                <path
                  d="M7.33324 3.33343C6.96505 3.33343 6.66658 3.63191 6.66658 4.00009C6.66658 4.36829 6.96506 4.66677 7.33326 4.66676L10.3906 4.66671L4.80915 10.1953C4.54669 10.4553 4.54568 10.8791 4.8069 11.1404C5.06637 11.3998 5.48675 11.4008 5.74745 11.1426L11.3335 5.60945L11.334 8.66676C11.334 9.03492 11.6325 9.33334 12.0007 9.33334C12.3689 9.33334 12.6674 9.03482 12.6673 8.66659L12.6669 4.33329C12.6669 3.78104 12.2192 3.33338 11.6669 3.33338L7.33324 3.33343Z"
                  fill="#F7931A"
                />
              </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="features-item features-item--earn">
            <div className="features-item__content">
              <h4 className="features-item__title">Earn Passively</h4>
              <p className="features-item__text">
                Explore different <span className="secondary-glow fw-bold"> highly lucrative </span> methods for making a daily income in our farm.
              </p>

              <button
                type="button"
                className="btn-two btn-disabled"
              >
                TO FARM 
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#F7931A"
                className="css-aw5qf7"
              >
                <path
                  d="M7.33324 3.33343C6.96505 3.33343 6.66658 3.63191 6.66658 4.00009C6.66658 4.36829 6.96506 4.66677 7.33326 4.66676L10.3906 4.66671L4.80915 10.1953C4.54669 10.4553 4.54568 10.8791 4.8069 11.1404C5.06637 11.3998 5.48675 11.4008 5.74745 11.1426L11.3335 5.60945L11.334 8.66676C11.334 9.03492 11.6325 9.33334 12.0007 9.33334C12.3689 9.33334 12.6674 9.03482 12.6673 8.66659L12.6669 4.33329C12.6669 3.78104 12.2192 3.33338 11.6669 3.33338L7.33324 3.33343Z"
                  fill="#F7931A"
                />
              </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export default Features;
