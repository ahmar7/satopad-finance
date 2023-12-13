import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import LogoIcon from '../../assets/img/logo-icon.png'
// import ConnectedWallet from "../../components/connected-wallet";

const Header = () => {
  const [mblFull, setmblFull] = useState(false);
  const [progressComing2, setprogressComing2] = useState(false);
  const [progressComing, setprogressComing] = useState(false);
  let toggleMbl = () => {
    if (mblFull === false) {
      setmblFull(true);
    } else {
      setmblFull(false);
    }
  };
  let progressToggle = () => {
    setprogressComing(true);
    setTimeout(() => {
      setprogressComing(false);
    }, 5000);

  };
  let progressToggle2 = () => {
    setprogressComing2(true);
    setTimeout(() => {
      // progressComing ? setprogressComing2(false) : setprogressComing2(true);
      setprogressComing2(false)
    }, 5000);
  };
  return (
    <div>
      <div className={mblFull ? "side-bar mbl-open pt-10" : "side-bar pt-10"}>
        <NavLink to="/" className="p20">
          <img src={LogoIcon} className="logo-icon" alt="" />
        </NavLink>
        <div className="side-links">
          <NavLink to="/launchpad" className="individual-link">
            <div className="link-ico">
              <svg
                class="w-6 h-6"
                width="30"
                height="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#spaceship-mask)" fill="currentColor">
                  <path d="M23.58.424a1 1 0 0 0-.761-.294C8.79.862 3.609 13.358 3.559 13.484a1 1 0 0 0 .22 1.08l5.657 5.657a1 1 0 0 0 1.085.218c.125-.051 12.554-5.291 13.348-19.253a1 1 0 0 0-.29-.762Zm-8.166 10.99a2 2 0 1 1-2.829-2.828 2 2 0 0 1 2.829 2.828ZM1.113 18.844a2.843 2.843 0 1 1 4.022 4.022C4.024 23.977 0 24 0 24s0-4.046 1.113-5.156ZM10.357 2.341a8.91 8.91 0 0 0-7.835 2.484c-.534.54-1 1.144-1.384 1.8a1 1 0 0 0 .155 1.215l1.99 1.99a26.623 26.623 0 0 1 7.074-7.489ZM21.659 13.643a8.91 8.91 0 0 1-2.484 7.835c-.54.535-1.145 1-1.8 1.384a1 1 0 0 1-1.215-.155l-1.99-1.989a26.621 26.621 0 0 0 7.489-7.075Z"></path>
                  <circle fill="currentColor"></circle>
                  <polygon
                    points="371.3,338.6 355.7,344.7 363.1,329.7"
                    fill="currentColor"
                  ></polygon>
                </g>
                <defs>
                  <clipPath>
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="link-title">Launchpad</p>
            <div className="absolute top-[-10px] right-0 abs-numer">
              <div className="relative w-4 h-4">
                <div className="w-full h-full custom-clr rounded-full absolute inset-0 animate-ping2" />
                <div className="w-full h-full custom-clr rounded-full absolute inset-0 inline-flex items-center justify-center text-gamefiDark-900 leading-none font-bold">
                  1
                </div>
              </div>
            </div>
          </NavLink>
        </div>
        <NavLink to="/staking" className="individual-link">
          <div className="link-ico">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4v4c0 1.657 2.686 3 6 3s6-1.343 6-3V4"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M1 8v4c0 1.657 2.686 3 6 3 1.537 0 2.938-.29 4-.765"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M1 12v4c0 1.657 2.686 3 6 3 1.537 0 2.939-.289 4-.764"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M7 7c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
              <path
                d="M11 12v4c0 1.657 2.686 3 6 3s6-1.343 6-3v-4"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M11 16v4c0 1.657 2.686 3 6 3s6-1.343 6-3v-4"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M17 15c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
              ></path>
            </svg>
          </div>
          <p className="link-title">Staking</p>
        </NavLink>
        <NavLink to="/swap" className="individual-link">
          <div className="link-ico">
            <i class="fa-solid fa-rotate icon-size"></i>
          </div>
          <p className="link-title">Swap</p>
        </NavLink>
        <button
          onClick={progressToggle2}
          disabled={progressComing2 ? true : false}
          className="individual-link"
        >
          <div className="link-ico">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 16h-3.3a8.82 8.82 0 0 1 .266 2.011 1 1 0 0 1-1 .989H7v-2h8a4 4 0 0 0-4-4H7c-1.2-1.711-3.695-2-4.9-2H0v8.5l8.192 3.763c1.008.503 2.171.6 3.248.268L24 19.667S23.208 16 20 16Z"
                fill="currentColor"
              ></path>
              <path
                d="M15 0a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm1 9h-2V3h2v6Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <p className="link-title">Earn</p>
        </button>
        <NavLink to="/governance" className="individual-link">
          <div className="link-ico">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6C10.343 6 9 4.657 9 3C9 1.343 10.343 0 12 0C13.657 0 15 1.343 15 3C15 4.657 13.657 6 12 6Z"
                fill="currentColor"
              ></path>
              <path
                d="M4 19V11C4 9.87 4.391 8.838 5.026 8H2C0.895 8 0 8.895 0 10V16H2V21C2 21.552 2.448 22 3 22H5C5.552 22 6 21.552 6 21V19H4Z"
                fill="currentColor"
              ></path>
              <path
                d="M14 24H10C9.448 24 9 23.552 9 23V17H6V11C6 9.343 7.343 8 9 8H15C16.657 8 18 9.343 18 11V17H15V23C15 23.552 14.552 24 14 24Z"
                fill="currentColor"
              ></path>
              <path
                d="M4 7C2.895 7 2 6.105 2 5C2 3.895 2.895 3 4 3C5.105 3 6 3.895 6 5C6 6.105 5.105 7 4 7Z"
                fill="currentColor"
              ></path>
              <path
                d="M20 19V11C20 9.87 19.609 8.838 18.974 8H22C23.105 8 24 8.895 24 10V16H22V21C22 21.552 21.552 22 21 22H19C18.448 22 18 21.552 18 21V19H20Z"
                fill="currentColor"
              ></path>
              <path
                d="M20 7C21.105 7 22 6.105 22 5C22 3.895 21.105 3 20 3C18.895 3 18 3.895 18 5C18 6.105 18.895 7 20 7Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <p className="link-title">Governance</p>
        </NavLink>
        <a href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/" target="_blank" className="individual-link">
          <div className="link-ico">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 0H5C3.346 0 2 1.346 2 3v17.5C2 22.43 3.57 24 5.5 24H21a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM11 2h6v9l-3-2-3 2V2Zm9 20H5.5c-.827 0-1.5-.673-1.5-1.5S4.673 19 5.5 19H20v3Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <p className="link-title">Docs</p>
        </a>
      </div>
      <div className="mobile-belowBar">
        <div className="flex-mbl">
          <NavLink to="/launchpad" className="mbl-individual mbl-active">
            <span class="active-underline"></span>
            <div className="mbl-icon">
              <svg
                class="w-6 h-6"
                width="30"
                height="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#spaceship-mask)" fill="currentColor">
                  <path d="M23.58.424a1 1 0 0 0-.761-.294C8.79.862 3.609 13.358 3.559 13.484a1 1 0 0 0 .22 1.08l5.657 5.657a1 1 0 0 0 1.085.218c.125-.051 12.554-5.291 13.348-19.253a1 1 0 0 0-.29-.762Zm-8.166 10.99a2 2 0 1 1-2.829-2.828 2 2 0 0 1 2.829 2.828ZM1.113 18.844a2.843 2.843 0 1 1 4.022 4.022C4.024 23.977 0 24 0 24s0-4.046 1.113-5.156ZM10.357 2.341a8.91 8.91 0 0 0-7.835 2.484c-.534.54-1 1.144-1.384 1.8a1 1 0 0 0 .155 1.215l1.99 1.99a26.623 26.623 0 0 1 7.074-7.489ZM21.659 13.643a8.91 8.91 0 0 1-2.484 7.835c-.54.535-1.145 1-1.8 1.384a1 1 0 0 1-1.215-.155l-1.99-1.989a26.621 26.621 0 0 0 7.489-7.075Z"></path>
                  <circle fill="currentColor"></circle>
                  <polygon
                    points="371.3,338.6 355.7,344.7 363.1,329.7"
                    fill="currentColor"
                  ></polygon>
                </g>
                <defs>
                  <clipPath>
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </NavLink>
          <NavLink to="/staking" className="mbl-individual ">
            <span class="active-underline"></span>
            <div className="mbl-icon">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 4v4c0 1.657 2.686 3 6 3s6-1.343 6-3V4"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M1 8v4c0 1.657 2.686 3 6 3 1.537 0 2.938-.29 4-.765"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M1 12v4c0 1.657 2.686 3 6 3 1.537 0 2.939-.289 4-.764"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M7 7c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                ></path>
                <path
                  d="M11 12v4c0 1.657 2.686 3 6 3s6-1.343 6-3v-4"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M11 16v4c0 1.657 2.686 3 6 3s6-1.343 6-3v-4"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                ></path>
                <path
                  d="M17 15c3.314 0 6-1.343 6-3s-2.686-3-6-3-6 1.343-6 3 2.686 3 6 3Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="square"
                ></path>
              </svg>
            </div>
          </NavLink>
          <NavLink to="/swap" className="mbl-individual ">
            <span class="active-underline"></span>
            <div className="mbl-icon">
              <i class="fa-solid fa-rotate icon-size icon-height"></i>
            </div>
          </NavLink>

          <NavLink to="/governance"
            className="mbl-individual "
          >
            <span class="active-underline"></span>
            <div className="mbl-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6C10.343 6 9 4.657 9 3C9 1.343 10.343 0 12 0C13.657 0 15 1.343 15 3C15 4.657 13.657 6 12 6Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M4 19V11C4 9.87 4.391 8.838 5.026 8H2C0.895 8 0 8.895 0 10V16H2V21C2 21.552 2.448 22 3 22H5C5.552 22 6 21.552 6 21V19H4Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M14 24H10C9.448 24 9 23.552 9 23V17H6V11C6 9.343 7.343 8 9 8H15C16.657 8 18 9.343 18 11V17H15V23C15 23.552 14.552 24 14 24Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M4 7C2.895 7 2 6.105 2 5C2 3.895 2.895 3 4 3C5.105 3 6 3.895 6 5C6 6.105 5.105 7 4 7Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M20 19V11C20 9.87 19.609 8.838 18.974 8H22C23.105 8 24 8.895 24 10V16H22V21C22 21.552 21.552 22 21 22H19C18.448 22 18 21.552 18 21V19H20Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M20 7C21.105 7 22 6.105 22 5C22 3.895 21.105 3 20 3C18.895 3 18 3.895 18 5C18 6.105 18.895 7 20 7Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </NavLink>
          <div onClick={toggleMbl} className="mbl-individual ">
            <span class="active-underline"></span>
            <div className="mbl-icon">
              <img
                src={
                  mblFull
                    ? "https://gamefi.org/_next/static/media/x.f956a27b.svg"
                    : "https://gamefi.org/_next/static/media/menuToggler.7ea29bb4.svg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* <button className="nav-link btn-wallet">
        <i className="fas fa-wallet"></i> Connect
      </button> */} 

      {/*  */}
      <div className="c-container">
        <div
          className={
            progressComing ? "popup-coming right-full" : "popup-coming  "
          }
        >
          <div className="toast-tba">
            <div onClick={() => setprogressComing(false)} className="cross-ico">
              <i class="fa-solid fa-x"></i>
            </div>
            <div className="toast-txt">
              <div className="toast-ico">
                <i
                  class="fa-solid fa-circle-info"
                  style={{ color: "white" }}
                ></i>
              </div>
              <div className="toast-written">Swap coming soon </div>
            </div>
          </div>
          <div className="progress-bar"></div>
        </div>
        <div
          className={
            progressComing2 ? "popup-coming right-full2 " : "popup-coming  "
          }
        >
          <div className="toast-tba">
            <div
              onClick={() => setprogressComing2(false)}
              className="cross-ico"
            >
              <i class="fa-solid fa-x"></i>
            </div>
            <div className="toast-txt">
              <div className="toast-ico">
                <i
                  class="fa-solid fa-circle-info"
                  style={{ color: "white" }}
                ></i>
              </div>
              <div className="toast-written">Farm under maintenance!</div>
            </div>
          </div>
          <div className="progress-bar"></div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Header;
