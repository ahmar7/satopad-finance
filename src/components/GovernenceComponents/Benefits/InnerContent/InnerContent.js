import React from "react";
import "./InnerContent.css";
import Planet from "../../../../assets/img/plannet.png";
import { Link, NavLink } from "react-router-dom";
const InnnerContent = () => {
  return (
    <div className="css-112i1sb">
      <div className="governance-landing-benefits-header">
        <div className="css-y2ztui">
          <img
            src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-benefits-m.png"
            className="css-19vob4g"
          />
          <img
            src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-benefits.png"
            className="css-9yla5v"
          />
          <div data-bn-type="text" className="css-n3nj1z">
            Lock up SATO for advantages
          </div>
          <div className="css-rf76ov">
            <Link to="/staking"
              data-bn-type="link"
              className="css-9wj43q"
            >
              <button data-bn-type="button" className="btn-one">
                <i class="fas fa-lock icon-distance"></i> Lock SATO
              </button>
            </Link>
            <a href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/token-overview/what-is-usdsera" target="_blank" className="btn-two btn-equal">
              Learn More
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
            </a>  
          </div>
        </div>
        <div className="Planet  governance-landing-benefits-logo">
          <img src={Planet} alt="" />
        </div>
      </div>
      <div className="governance-landing-benefits-list">
        <img
          src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-01.png"
          className="css-7p4pfa"
        />
        <div className="css-1ry22wm">
          <div className="css-10pdk1q">
            <img
              src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-01-mobile.png"
              className="css-fx9tn0"
            />
            <div className="css-18owyug">
              <div data-bn-type="text" className="css-1wa4c70">
                DAO Rewards
              </div>
              <div className="css-3hdxq3">
                <div data-bn-type="text" className="css-1v7bny7 secondary-glow">
                  UP to 50.00% APY
                </div>
                <div className="css-m5gimw">
                  <div
                    className="bn-tooltip-box css-1fwham2"
                    style={{
                      position: "absolute",
                      left: "-148px",
                      top: "-72px",
                      transition:
                        "opacity 120ms ease-in-out 0s, transform 120ms ease-in-out 0s",
                      opacity: 0,
                      transform: "translate3d(0px, -6px, 0px)",
                      visibility: "hidden",
                    }}
                    data-popper-reference-hidden="false"
                    data-popper-escaped="false"
                    data-popper-placement="top"
                  >
                    The system APY is dynamic. The formula is calculated based
                    on the average lock-up time of all users. The longer the
                    lock-up time, the greater the APY value.
                    <i className="gap-fill" />
                  </div>
                </div>
              </div>
            </div>
            <div data-bn-type="text" className="css-p6bfns">
              Get governance voting rights, participate in important
              decision-making for SatoPAD, and receive rewards.
            </div>
          </div>
          <div className="css-ggvcnp">
            <div className="css-1j8ayyd">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="css-xgau1d"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.00019 6C5.00019 5.62123 5.21419 5.27497 5.55298 5.10557L11.553 2.10557C11.8345 1.96481 12.1659 1.96481 12.4474 2.10557L18.4474 5.10557C18.7862 5.27496 19.0002 5.62123 19.0002 6C19.0002 6.37877 18.7862 6.72504 18.4474 6.89443L12.4474 9.89443C12.1659 10.0352 11.8345 10.0352 11.553 9.89443L5.55298 6.89443C5.21419 6.72504 5.00019 6.37877 5.00019 6ZM8.23626 6L12.0002 7.88197L15.7641 6L12.0002 4.11803L8.23626 6Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.47427 5.14935C5.76909 4.96714 6.13723 4.95058 6.44721 5.10557L12.4472 8.10557C12.786 8.27497 13 8.62123 13 9V17C13 17.3466 12.8205 17.6684 12.5257 17.8507C12.2309 18.0329 11.8628 18.0494 11.5528 17.8944L5.55279 14.8944C5.214 14.725 5 14.3788 5 14V6C5 5.65342 5.17945 5.33156 5.47427 5.14935ZM7 7.61804V13.382L11 15.382V9.61804L7 7.61804Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.5257 5.14935C18.2309 4.96714 17.8628 4.95058 17.5528 5.10557L11.5528 8.10557C11.214 8.27497 11 8.62123 11 9V17C11 17.3466 11.1795 17.6684 11.4743 17.8507C11.7691 18.0329 12.1372 18.0494 12.4472 17.8944L18.4472 14.8944C18.786 14.725 19 14.3788 19 14V6C19 5.65342 18.8205 5.33156 18.5257 5.14935ZM17 7.61804V13.382L13 15.382V9.61804L17 7.61804Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.10579 17.553C5.35278 17.059 5.95345 16.8588 6.44743 17.1058L12.0002 19.8822L17.553 17.1058C18.047 16.8588 18.6477 17.059 18.8946 17.553C19.1416 18.047 18.9414 18.6477 18.4474 18.8946L12.8946 21.671C12.3316 21.9526 11.6688 21.9526 11.1058 21.671L5.55301 18.8946C5.05903 18.6477 4.8588 18.047 5.10579 17.553Z"
                  fill="white"
                />
              </svg>
              <div className="css-uliqdc">
                <div className="css-130o8im">
                  <div data-bn-type="text" className="css-16opcdy">
                    Governance
                  </div>
                </div>
                <div data-bn-type="text" className="css-p6bfns">
                  Any aspect of SatoPAD's operations such as insurance, staking, marketing, or launchpad can be subjected to proposal voting. This means that decisions will be made through a democratic process.
                </div>
              </div>
            </div>
            <div className="css-883xeg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="css-xgau1d"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.07114 6.34315C8.59945 4.81484 9.88191 4 12 4C16.0803 4 19.4471 7.05471 19.9383 11.002C20.0065 11.55 20.4477 12 21 12C21.5523 12 22.0052 11.551 21.9507 11.0014C21.4497 5.94741 17.1858 2 12 2C9.14747 2 7.38599 3.19988 5.65693 4.92893L4 6.58586V5.5C4 4.94772 3.55228 4.5 3 4.5C2.44772 4.5 2 4.94772 2 5.5V9C2 9.55228 2.44772 10 3 10H6.5C7.05228 10 7.5 9.55228 7.5 9C7.5 8.44772 7.05229 8 6.5 8L5.41429 8L7.07114 6.34315Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.9289 17.6569C15.4006 19.1852 14.1181 20 12 20C7.91973 20 4.55289 16.9453 4.06168 12.998C3.99347 12.45 3.55231 12 3.00003 12C2.44774 12 1.99478 12.449 2.04926 12.9986C2.55034 18.0526 6.8142 22 12 22C14.8525 22 16.614 20.8001 18.3431 19.0711L20 17.4141V18.5C20 19.0523 20.4477 19.5 21 19.5C21.5523 19.5 22 19.0523 22 18.5V15C22 14.4477 21.5523 14 21 14H17.5C16.9477 14 16.5 14.4477 16.5 15C16.5 15.5523 16.9477 16 17.5 16H18.5857L16.9289 17.6569Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.50015 13.4142C7.7191 12.6332 7.7191 11.3668 8.50015 10.5858L10.5859 8.5C11.367 7.71895 12.6333 7.71895 13.4144 8.5L15.5002 10.5858C16.2812 11.3668 16.2812 12.6332 15.5002 13.4142L13.4144 15.5C12.6333 16.2811 11.367 16.281 10.5859 15.5L8.50015 13.4142ZM12.0001 9.91422L9.91436 12L12.0002 14.0858L14.0859 12L12.0001 9.91422Z"
                  fill="white"
                />
              </svg>
              <div className="css-uliqdc">
                <div className="css-1hzvpag">
                  <div className="css-4cffwv">
                    <div data-bn-type="text" className="css-nxqonr">
                      Staking Rewards
                    </div>
                  </div>
                </div>
                <div data-bn-type="text" className="css-p6bfns">
                  Every seven days, SatoPAD will add a specific amount to the DAO reward pool to compensate our tiered stakers. Your annual percentage yield (APY) will be determined by your tier level.  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="governance-landing-benefits-list css-egt1ma">
        <img
          src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-02.png"
          className="css-7p4pfa"
        />
        <div className="css-1v6yiiv">
          <div className="css-10pdk1q">
            <img
              src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-02-mobile.png"
              className="css-3fwdku"
            />
            <div className="css-18owyug">
              <div data-bn-type="text" className="css-1wa4c70">
                IDO Participation
              </div>
            </div>
            <div data-bn-type="text" className="css-p6bfns">
              Built on Bitcoin, we enable our stakers a fair chance to participate in the hottest presales of a growing ecosystem.
            </div>
          </div>
          <div className="css-ggvcnp">
            <div className="css-1j8ayyd">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="css-1anr90r"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3a1 1 0 011-1h10a1 1 0 011 1v2h3a1 1 0 011 1v4a1 1 0 01-.288.703l-5.47 5.54A5.988 5.988 0 0113 17.917V20h4a1 1 0 110 2H7a1 1 0 110-2h4v-2.083a5.984 5.984 0 01-3.247-1.68l-5.465-5.534A1 1 0 012 10V6a1 1 0 011-1h3V3zm6 13a3.984 3.984 0 002.829-1.172A3.984 3.984 0 0016 12V4H8v8a4 4 0 004 4zm6-4.366l1.857-1.899a.5.5 0 00.143-.35V7h-2v4.634zM6 7v4.635l-1.857-1.9A.5.5 0 014 9.385V7h2z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="css-uliqdc">
                <div className="css-130o8im">
                  <div data-bn-type="text" className="css-nxqonr">
                    Fair and Equitable Fundraising
                  </div>
                  <div data-bn-type="text" className="css-p6bfns mt-3">
                    Our objective is to create a fair and consistent system that encourages users to obtain and retain SATO tokens. We regularly evaluate our method of distributing tokens to ensure that it works effectively, competitively, and benefits all community members. Our DAO demonstrates our commitment to promoting a decentralized ecosystem.
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnnerContent;
