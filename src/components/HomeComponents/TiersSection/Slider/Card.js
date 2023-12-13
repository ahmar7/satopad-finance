import React ,{useState}from "react";
import { Carousel } from "3d-react-carousal";
import Card1 from "../../../../assets/img/tier-1-minnow.svg"; 
import Card2 from "../../../../assets/img/tier-2-goldfish.svg"; 
import Card3 from "../../../../assets/img/tier-3-barracuda.svg"; 
import Card4 from "../../../../assets/img/tier-4-swordfish.svg"; 
import Card5 from "../../../../assets/img/tier-5-whale.svg"; 
import "./Card.css";
const Card = () => {
    
    const [slideChange, setslideChange] = useState(1);
  let slides = [
    <div data-v-18811a9f className="carousel-3d-slide current" data-v-07917306>
      <div data-v-18811a9f className="gods">
        <div data-v-18811a9f className="tier num">
          TIER 1
        </div>
        <img data-v-18811a9f src={Card1} />
        <div className="card-tier-info">
          <div data-v-18811a9f className="name">
            MINNOW
          </div>
          <div data-v-18811a9f className="sub">
            The Petite Predator
          </div>
          <div data-v-18811a9f className="amount">
            <span data-v-18811a9f className="num">
              100
            </span>
            <span data-v-18811a9f className="ticker ml-1">
              xSATO
            </span>
          </div>
          <div data-v-18811a9f className="extra">
            1 Lottery Ticket
          </div>
        </div>  
      </div>
    </div>,
    <div data-v-18811a9f className="carousel-3d-slide current" data-v-07917306>
      <div data-v-18811a9f className="gods">
        <div data-v-18811a9f className="tier num">
          TIER 2
        </div>
        <img data-v-18811a9f src={ Card2 } />
        <div className="card-tier-info">
          <div data-v-18811a9f className="name">
            GOLDFISH
          </div>
          <div data-v-18811a9f className="sub">
            The Gilded Puppy
          </div>
          <div data-v-18811a9f className="amount">
            <span data-v-18811a9f className="num">
              1000
            </span>
            <span data-v-18811a9f className="ticker ml-1">
              xSATO
            </span>
          </div>
          <div data-v-18811a9f className="extra">
            12 Lottery Tickets
          </div>
        </div>  
      </div>
    </div>,
    <div data-v-18811a9f className="carousel-3d-slide current" data-v-07917306>
      <div data-v-18811a9f className="gods">
        <div data-v-18811a9f className="tier num">
          TIER 3
        </div>
        <img data-v-18811a9f src={Card3} />
        <div className="card-tier-info">
          <div data-v-18811a9f className="name">
            BARRACUDA
          </div>
          <div data-v-18811a9f className="sub">
            The Jaws of Death
          </div>
          <div data-v-18811a9f className="amount">
            <span data-v-18811a9f className="num">
              5000
            </span>
            <span data-v-18811a9f className="ticker ml-1">
              xSATO
            </span>
          </div>
          <div data-v-18811a9f className="extra">
            100 Lottery Tickets
          </div>
        </div>
       </div>  
    </div>,
    <div data-v-18811a9f className="carousel-3d-slide current" data-v-07917306>
      <div data-v-18811a9f className="gods">
        <div data-v-18811a9f className="tier num">
          TIER 4
        </div>
        <img data-v-18811a9f src={Card4} />
        <div className="card-tier-info">
          <div data-v-18811a9f className="name">
            SWORDFISH
          </div>
          <div data-v-18811a9f className="sub">
            The Finned Fury
          </div>
          <div data-v-18811a9f className="amount">
            <span data-v-18811a9f className="num">
              10000
            </span>
            <span data-v-18811a9f className="ticker ml-1">
              xSATO
            </span>
          </div>
          <div data-v-18811a9f className="extra">
            Guaranteed Allocation
          </div>
        </div>
       </div> 
    </div>,
    <div data-v-18811a9f className="carousel-3d-slide current" data-v-07917306>
      <div data-v-18811a9f className="gods">
        <div data-v-18811a9f className="tier num">
          TIER 5
        </div>
        <img data-v-18811a9f src={Card5} />
        <div className="card-tier-info">
          <div data-v-18811a9f className="name">
            BLUE WHALE
          </div>
          <div data-v-18811a9f className="sub">
            The Ocean Titan
          </div>
          <div data-v-18811a9f className="amount">
            <span data-v-18811a9f className="num">
              50000
            </span>
            <span data-v-18811a9f className="ticker ml-1">
              xSATO
            </span>
          </div>
          <div data-v-18811a9f className="extra">
            Guaranteed Allocation
          </div>
        </div>
       </div>  
    </div>
  ];
 
  let callback = (index)=> {
    console.log("callback", index);
  };
  let callback2 = (index)=> {
    console.log("callback", index);
  };
  return (
    <div>
      <Carousel
        slides={slides}
        autoplay={false}
        slideToShow={callback2}
        onSlideChange={callback} 
      />
    </div>
  );
};

export default Card;
