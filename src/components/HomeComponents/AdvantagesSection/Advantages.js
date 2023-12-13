import React, { useState } from "react";
import "./Advantages.css";
import InvesterIcon from "../../../assets/img/invester.svg";
import TeamIcon from "../../../assets/img/team-icon.svg";
const Advantages = () => {
  const [drop, setDrop] = useState(false);
  let toggleDrop = () => {
    if (drop === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };
  return (
    <section className="advantages-section">
      <div className="containerer">
        <div className="justify-content-between row">
          <div className="col-lg-6">
            <h2 className="title gradient-text gradient-text--purple">
              If you're seeking a safe and adaptable platform that simplifies
              the process of investing and earning from the zkSync ecosystem,
              Syncera is the solution that fits your needs.
            </h2>
          </div>
        </div>
        {/* New */}
        <div className="DoubleText-Container">
          <div className="DoubleText  justify-content-between row">
            <div className="DoubleText-Item col-lg-6">
              <div className="DoubleText-Item--Top">
                <h4 className="DoubleText-Item--Top--TitleUpper">
                  <i class="fa-solid fa-rocket icon-distance"></i>
                  For Investors
                </h4>
              </div>
              <div className="DoubleText-Item--Top">
                <h4 className="DoubleText-Item--Top--Title">
                  Invest with Peace of Mind
                </h4>
              </div>
              <p className="DoubleText-Item--Top--Para">
                  Syncera's IDO launchpad is a fundraising platform that operates on the zkSync Era blockchain, providing SERA holders with an equitable opportunity to engage in the most sought-after presales in a rapidly expanding ecosystem. You can stake your tokens, trade on our DEX, participate in our governance, and become part of our dynamic and thriving community.
              </p>
              <p className="DoubleText-Item--Top--Para">    
                  <i>We will provide all the necessary tools to make investing in the zkSync ecosystem more accessible, user-friendly, and inclusive while keeping security intact.</i>
              </p>    
              <p className="DoubleText-Item--Top--ParaInvestors">
                Invest like a pro, designed for investors.
              </p>
            </div>
            <div className="DoubleText-Item col-lg-5">
              <div className="DoubleText-Item--Top">
                <h4 className="DoubleText-Item--Top--TitleUpper">
                  <i class="fas fa-chart-line icon-distance"></i>
                  For Teams
                  </h4>
              </div>
              <div className="DoubleText-Item--Top">
                <h4 className="DoubleText-Item--Top--Title">
                  Setting the Stage for Success
                </h4>
              </div>
              <p className="DoubleText-Item--Top--Para">
                As a launchpad platform for zkSync Era, the team's unique requirements should be prioritized during the fundraising process, rather than being an afterthought. This is a crucial aspect of a project's journey as it sets the tone for their relationship with the community.
              </p>
              <p className="DoubleText-Item--Top--ParaBold">
                Syncera is committed to ensuring that teams receive the necessary support, creating a positive and fair environment that fosters strong momentum for the project.
              </p>
            </div>
          </div>
        </div>
        <div
          className="PageProtocol-Container"
          style={{ position: "relative" }}
        >
          <div className="PageProtocol">
            <div className="PageProtocol-Item">
              <div className="PageProtocol-Item--Top">
                <h2 className="PageProtocol-Item--Top--Title">
                  <i class="fas fa-users icon-distance"></i>
                  Community-Driven
                </h2>
              </div>
              <p className="PageProtocol-Item--Top--Para">
                Our goal is to build a strong community where all participants have a voice and can benefit from the growth of the zkSync ecosystem. 
              </p>
            </div>
            <div className="PageProtocol-Item">
              <div className="PageProtocol-Item--Top">
                <h2 className="PageProtocol-Item--Top--Title">
                  <i class="fa-sharp fa-solid fa-money-bills icon-distance"></i>
                  Equal Opportunities
                </h2>
              </div>
              <p className="PageProtocol-Item--Top--Para">
                Our staking mechanism is designed to ensure fairness for everyone, whereby a smaller holder with a more extended lock-up period can receive the same rewards as a larger holder with a shorter lock-up period.
              </p>
            </div>
            <div className="PageProtocol-Item">
              <div className="PageProtocol-Item--Top">
                <h2 className="PageProtocol-Item--Top--Title">
                  <i class="fa-sharp fa-solid fa-shield-halved icon-distance"></i>
                  Investor Protection
                </h2>
              </div>
              <p className="PageProtocol-Item--Top--Para">
                The community is given the freedom to vote on the projects that should be launched on Syncera, and the funds are allocated according to the performance of the project token.
              </p>
            </div>
          </div>
        </div>

        {/* New */}
      </div>
    </section>
  );
};

export default Advantages;
