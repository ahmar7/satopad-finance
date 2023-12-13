import React from "react";
import Nok from "../../../assets/img/nok.svg";
import "./Projects.css";
import zkSyncIcon from "../../../assets/img/zkSync-icon.png";
import SynceraLogo from "../../../assets/img/syncera-logo.png";
import { Link } from "react-router-dom";
import UpComingProjects from "./UpcomingProjects/Upcoming";
import CompletedProjects from "./CompletedProjects/CompletedProjects";
const Projects = () => {
  return (
    <div className="main-projects">
      <div className="dark-bg pb-5">
        <div className="max-width">
          <div className="relative w-64 md:w-64 lg:w-1/3 xl:w-96 mx-auto text-center font-bold md:text-lg lg:text-xl">
            <div className="inline-block top-0 left-0 right-0 uppercase bg-gamefiDark w-full mx-auto text-center clipped-b p-3 font-bold md:text-lg lg:text-xl xl:text-3xl">
              All Projects
            </div>
            <div className="absolute -bottom-5 left-0 right-0">
              <span className="firstspan">
                <span className="secondspan">
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27118%27%20height=%2718%27/%3e"
                    className="thirdImg"
                  />
                </span>
                <img
                  alt=""
                  src={Nok}
                  decoding="async"
                  data-nimg="intrinsic"
                  className="o-img"
                />
              </span>
            </div>
          </div>
          <UpComingProjects />
          <CompletedProjects />
        </div>
      </div>
      <footer className="footer">
      <div className="container">
        <div className="justify-content-between left-align row">
          <div className="col-xl-3 col-12">
            <div className="footer__logo">
              <Link to="/">
                <img src={SynceraLogo} alt="Logo" />
              </Link>
            </div>
            <div className="footer__token-address token-address mt-4">
              <img
                width={32}
                height={32}
                src={zkSyncIcon}
                className="token-address__network"
              />
              <span className="copiable">
                <span className="token-address__address">TBA</span>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="token-address__copy"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0568 1.33203H3.89034L3.88818 1.33203C3.21118 1.33404 2.56249 1.60386 2.08378 2.08256C1.60508 2.56127 1.33525 3.20996 1.33325 3.88695V10.0535L1.33325 10.0556C1.33501 10.6721 1.58071 11.2629 2.01666 11.6988C2.44263 12.1248 3.0164 12.3691 3.61758 12.3817C3.65645 13.6496 4.69647 14.6655 5.97376 14.6655H12.3094C13.6113 14.6655 14.6667 13.6101 14.6667 12.3082V5.97254C14.6667 4.69527 13.6508 3.65527 12.383 3.61637C12.3704 3.01518 12.1261 2.44141 11.7001 2.01544C11.2641 1.57948 10.6734 1.33379 10.0568 1.33203ZM10.9209 3.61523C10.9086 3.40217 10.8186 3.20034 10.6669 3.04866C10.5041 2.88591 10.2837 2.7941 10.0535 2.79322H3.89156C3.60094 2.79432 3.32252 2.91026 3.117 3.11577C2.91148 3.32129 2.79555 3.59971 2.79444 3.89032V10.0523C2.79533 10.2824 2.88714 10.5029 3.04988 10.6656C3.20157 10.8173 3.4034 10.9074 3.61646 10.9196V5.97254C3.61646 4.67064 4.67186 3.61523 5.97376 3.61523H10.9209ZM5.07764 5.97254C5.07764 5.47763 5.47885 5.07642 5.97376 5.07642H12.3094C12.8043 5.07642 13.2055 5.47763 13.2055 5.97254V12.3082C13.2055 12.8031 12.8043 13.2043 12.3094 13.2043H5.97376C5.47885 13.2043 5.07764 12.8031 5.07764 12.3082V5.97254Z"
                    fill="white"
                  />
                </svg>
              </span>
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="token-address__metamask"
              >
                <path
                  d="M27.5303 3.56641L17.5366 10.9889L19.3847 6.60972L27.5303 3.56641Z"
                  fill="#E2761B"
                  stroke="#E2761B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.45935 3.56641L14.3727 11.0592L12.615 6.60972L4.45935 3.56641Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.9346 20.7715L21.2729 24.8493L26.9679 26.4162L28.605 20.8619L23.9346 20.7715Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.40479 20.8619L5.0319 26.4162L10.7268 24.8493L8.06517 20.7715L3.40479 20.8619Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.4053 13.882L8.81836 16.2825L14.4731 16.5336L14.2722 10.457L10.4053 13.882Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.5843 13.882L17.6672 10.3867L17.5366 16.5336L23.1813 16.2825L21.5843 13.882Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.7271 24.8496L14.1219 23.1924L11.1891 20.9023L10.7271 24.8496Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.8682 23.1924L21.2731 24.8496L20.801 20.9023L17.8682 23.1924Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.2731 24.8487L17.8682 23.1914L18.1394 25.4111L18.1092 26.3452L21.2731 24.8487Z"
                  fill="#D7C1B3"
                  stroke="#D7C1B3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.7271 24.8487L13.8909 26.3452L13.8708 25.4111L14.1219 23.1914L10.7271 24.8487Z"
                  fill="#D7C1B3"
                  stroke="#D7C1B3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.9408 19.4351L11.1084 18.6015L13.1071 17.6875L13.9408 19.4351Z"
                  fill="#233447"
                  stroke="#233447"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.0488 19.4351L18.8825 17.6875L20.8913 18.6015L18.0488 19.4351Z"
                  fill="#233447"
                  stroke="#233447"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.7271 24.8474L11.2092 20.7695L8.06543 20.8599L10.7271 24.8474Z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.791 20.7695L21.2731 24.8474L23.9348 20.8599L20.791 20.7695Z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.1818 16.2812L17.5371 16.5323L18.0594 19.435L18.893 17.6874L20.9018 18.6014L23.1818 16.2812Z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.1089 18.6014L13.1177 17.6874L13.9413 19.435L14.4736 16.5323L8.81885 16.2812L11.1089 18.6014Z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.81836 16.2812L11.1887 20.9015L11.1084 18.6014L8.81836 16.2812Z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.9012 18.6014L20.8008 20.9015L23.1812 16.2812L20.9012 18.6014Z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.4732 16.5312L13.9409 19.4339L14.6038 22.8589L14.7545 18.3492L14.4732 16.5312Z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5363 16.5312L17.2651 18.3392L17.3857 22.8589L18.0586 19.4339L17.5363 16.5312Z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.0592 19.4352L17.3862 22.8602L17.8683 23.1917L20.8012 20.9016L20.9016 18.6016L18.0592 19.4352Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.1084 18.6016L11.1888 20.9016L14.1216 23.1917L14.6037 22.8602L13.9408 19.4352L11.1084 18.6016Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.1093 26.3442L18.1395 25.4101L17.8884 25.1892H14.1018L13.8708 25.4101L13.8909 26.3442L10.7271 24.8477L11.8319 25.7516L14.0717 27.3084H17.9185L20.1684 25.7516L21.2732 24.8477L18.1093 26.3442Z"
                  fill="#C0AD9E"
                  stroke="#C0AD9E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.8681 23.1908L17.386 22.8594H14.6038L14.1217 23.1908L13.8706 25.4105L14.1016 25.1896H17.8882L18.1393 25.4105L17.8681 23.1908Z"
                  fill="#161616"
                  stroke="#161616"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.9523 11.471L28.806 7.37306L27.5304 3.56641L17.8682 10.7378L21.5844 13.8815L26.8374 15.4183L28.0025 14.0623L27.5003 13.7007L28.3038 12.9675L27.6811 12.4854L28.4846 11.8727L27.9523 11.471Z"
                  fill="#763D16"
                  stroke="#763D16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.19385 7.37306L4.04758 11.471L3.50521 11.8727L4.30873 12.4854L3.69605 12.9675L4.49956 13.7007L3.99736 14.0623L5.15242 15.4183L10.4054 13.8815L14.1217 10.7378L4.45939 3.56641L3.19385 7.37306Z"
                  fill="#763D16"
                  stroke="#763D16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.8372 15.4176L21.5842 13.8809L23.1812 16.2814L20.8008 20.9016L23.9345 20.8614H28.6049L26.8372 15.4176Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.4054 13.8809L5.15243 15.4176L3.40479 20.8614H8.06517L11.1888 20.9016L8.81847 16.2814L10.4054 13.8809Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5368 16.5328L17.8682 10.7374L19.3949 6.60938H12.6152L14.1218 10.7374L14.4734 16.5328L14.5939 18.3608L14.6039 22.8605H17.3861L17.4062 18.3608L17.5368 16.5328Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="col-xl-2 col-4">
            <div className="footer__col">
              <h4 className="footer__list-title">Company</h4>
              <ul className="footer__list">
                {/*
                <li className="footer__list-item">
                  <a href="#">About Us</a>
                </li>
                */}
                <li className="footer__list-item">
                  <a
                    href="https://1jn712lieeo.typeform.com/to/hypE5Z7h"
                    target="_blank"
                  >
                    Apply for IDO
                  </a>
                </li>
                <li className="footer__list-item">
                  <a
                    href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/"
                    target="_blank"
                  >
                    Whitepaper
                  </a>
                </li>
                {/*
                <li className="footer__list-item">
                  <a
                    href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/"
                    target="_blank"
                  >
                    Pitch Deck
                  </a>
                </li>
                */}
                <li className="footer__list-item">
                  <a href="https://linktr.ee/syncera" target="_blank">
                    Linktree
                  </a>
                </li>
                {/*
                <li className="footer__list-item">
                  <a href="#">Join Our Network</a>
                </li>
                */}
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-4">
            <div className="footer__col">
              <h4 className="footer__list-title">Developers</h4>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="#">Press Kit</a>
                </li>
              </ul>
              <h4 className="footer__list-title">Governance</h4>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="#">Terms</a>
                </li>
                <li className="footer__list-item">
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-4">
            <div className="footer__col">
              <h4 className="footer__list-title">Help</h4>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Support
                  </a>
                </li>
                <li className="footer__list-item">
                  <Link
                    to="/faqs"
                  >
                    FAQs
                  </Link>
                </li>
                {/*
                <li className="footer__list-item">
                  <a href="#">KYC Process</a>
                </li>
                */}

                <li className="footer__list-item">
                  <a
                    href="https://coincu.com/188907-unisat-wallet/"
                    target="_blank"
                  >
                    Add BRC-20 to UniSat
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-12">
            <div className="footer__col footer__col--socials">
              <h4 className="footer__list-title">Socials</h4>
              <div className="footer__col-content">
                <ul className="footer__socials">
                  <li className="footer__socials-item">
                    <a
                      href="https://twitter.com/Syncera_io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span
                        path="socials/twitter.svg"
                        className="dynamic-image"
                      >
                        <svg
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M27.9993 8.97651C27.1147 9.36688 26.1656 9.6319 25.17 9.75009C26.1871 9.14125 26.9679 8.17427 27.3332 7.02464C26.3805 7.59051 25.3276 7.99879 24.2066 8.22083C23.3077 7.2646 22.0291 6.6665 20.6109 6.6665C17.8926 6.6665 15.6864 8.87265 15.6864 11.5909C15.6864 11.9777 15.7294 12.3538 15.8154 12.7119C11.7218 12.5078 8.09387 10.5452 5.66568 7.56544C5.24307 8.29246 4.99954 9.13767 4.99954 10.0402C4.99954 11.7485 5.86982 13.2563 7.19136 14.1373C6.38554 14.1122 5.62628 13.8902 4.96014 13.5213C4.96014 13.5428 4.96014 13.5607 4.96014 13.5822C4.96014 15.9674 6.65773 17.9587 8.91043 18.4099C8.49857 18.5209 8.06164 18.5818 7.61396 18.5818C7.29522 18.5818 6.98722 18.5496 6.68638 18.4923C7.31312 20.4477 9.13247 21.8731 11.2849 21.9125C9.59806 23.2341 7.47787 24.022 5.16786 24.022C4.77033 24.022 4.37996 23.9969 3.99316 23.9539C6.17066 25.3507 8.76001 26.1672 11.5428 26.1672C20.6001 26.1672 25.5532 18.6642 25.5532 12.1568C25.5532 11.9419 25.5496 11.7306 25.5389 11.5193C26.5023 10.8245 27.3367 9.95781 27.9957 8.96934L27.9993 8.97651Z"
                            fill="white"
                          />
                        </svg>{" "}
                      </span>
                    </a>
                  </li>
                  <li className="footer__socials-item">
                    <a href="https://discord.com/invite/e2XcjF5zX8" target="_blank" rel="noopener noreferrer">
                      <span
                        path="socials/discord.svg"
                        className="dynamic-image"
                      >
                        <svg
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.9913 8.4921C22.4861 7.80147 20.8721 7.29265 19.1845 7.00122C19.1538 6.9956 19.1231 7.00965 19.1072 7.03777C18.8996 7.40697 18.6697 7.88862 18.5087 8.26719C16.6936 7.99545 14.8878 7.99545 13.1099 8.26719C12.9488 7.8802 12.7106 7.40697 12.502 7.03777C12.4862 7.01059 12.4555 6.99654 12.4248 7.00122C10.7381 7.29172 9.12407 7.80054 7.61799 8.4921C7.60495 8.49772 7.59377 8.5071 7.58635 8.51928C4.52484 13.0931 3.68616 17.5545 4.09759 21.9606C4.09945 21.9822 4.11155 22.0028 4.12831 22.0159C6.14821 23.4993 8.10483 24.3998 10.0251 24.9967C10.0558 25.0061 10.0884 24.9949 10.108 24.9695C10.5622 24.3492 10.9671 23.6952 11.3143 23.0073C11.3348 22.967 11.3152 22.9192 11.2734 22.9033C10.6311 22.6597 10.0195 22.3626 9.43124 22.0253C9.3847 21.9981 9.38098 21.9316 9.42379 21.8997C9.54758 21.8069 9.67141 21.7104 9.78962 21.613C9.81101 21.5952 9.84081 21.5914 9.86596 21.6026C13.7307 23.3672 17.9148 23.3672 21.734 21.6026C21.7592 21.5905 21.789 21.5942 21.8113 21.612C21.9295 21.7095 22.0533 21.8069 22.178 21.8997C22.2208 21.9316 22.2181 21.9981 22.1715 22.0253C21.5832 22.3692 20.9717 22.6597 20.3285 22.9024C20.2866 22.9183 20.268 22.967 20.2885 23.0073C20.6431 23.6942 21.048 24.3483 21.4939 24.9686C21.5125 24.9949 21.546 25.0061 21.5767 24.9967C23.5063 24.3998 25.4629 23.4993 27.4828 22.0159C27.5005 22.0028 27.5117 21.9831 27.5135 21.9616C28.0059 16.8676 26.6888 12.4428 24.022 8.52021C24.0155 8.5071 24.0043 8.49772 23.9913 8.4921ZM11.8914 19.2778C10.7279 19.2778 9.76913 18.2095 9.76913 16.8976C9.76913 15.5857 10.7093 14.5175 11.8914 14.5175C13.0829 14.5175 14.0323 15.5951 14.0137 16.8976C14.0137 18.2095 13.0736 19.2778 11.8914 19.2778ZM19.7383 19.2778C18.5748 19.2778 17.616 18.2095 17.616 16.8976C17.616 15.5857 18.5562 14.5175 19.7383 14.5175C20.9298 14.5175 21.8792 15.5951 21.8606 16.8976C21.8606 18.2095 20.9298 19.2778 19.7383 19.2778Z"
                            fill="white"
                          />
                        </svg>{" "}
                      </span>
                    </a>
                  </li>
                  <li className="footer__socials-item">
                    <a
                      href="https://medium.com/@synceraio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span path="socials/medium.svg" className="dynamic-image">
                        <svg
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.846 9.887C6.876 9.592 6.763 9.301 6.543 9.103L4.303 6.403V6H11.261L16.639 17.795L21.367 6H28V6.403L26.084 8.24C25.919 8.366 25.837 8.573 25.871 8.778V22.276C25.837 22.48 25.919 22.687 26.084 22.813L27.955 24.65V25.053H18.543V24.65L20.482 22.768C20.672 22.578 20.672 22.522 20.672 22.231V11.321L15.283 25.009H14.555L8.28 11.321V20.495C8.228 20.88 8.356 21.269 8.627 21.547L11.148 24.605V25.009H4V24.605L6.521 21.547C6.791 21.268 6.911 20.877 6.846 20.495V9.887Z"
                            fill="white"
                          />
                        </svg>{" "}
                      </span>
                    </a>
                  </li>
                  <li className="footer__socials-item">
                    <a href="https://t.me/syncera_io" target="_blank" rel="noopener noreferrer">
                      <span
                        path="socials/telegram.svg"
                        className="dynamic-image"
                      >
                        <svg
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.98289 15.2287L15.8708 9.67739C22.0081 7.12469 23.2833 6.68129 24.1145 6.66666C24.2973 6.66343 24.7061 6.70874 24.9708 6.92359C25.1945 7.10498 25.2559 7.35011 25.2854 7.52204C25.3149 7.69397 25.3515 8.08588 25.3223 8.39205C24.9897 11.8864 23.5507 20.3665 22.8186 24.2803C22.5087 25.9365 21.8992 26.4917 21.3083 26.5461C20.0249 26.6642 19.0504 25.6979 17.8074 24.8831L12.8755 21.5703C10.6936 20.1325 12.1081 19.3422 13.3516 18.0508C13.6769 17.7126 19.3314 12.5695 19.4408 12.1029C19.4541 12.0446 19.4672 11.8271 19.338 11.7122C19.2088 11.5973 19.018 11.6371 18.8804 11.6679C18.6854 11.7122 15.5782 13.7659 9.55882 17.8292C8.67683 18.4348 7.87794 18.73 7.16223 18.7145C6.37315 18.6974 4.85532 18.2683 3.72697 17.9015C2.34298 17.4517 1.243 17.2138 1.33883 16.4498C1.38868 16.0519 1.9367 15.6449 2.98284 15.2288L2.98289 15.2287Z"
                            fill="white"
                          />
                        </svg>{" "}
                      </span>
                    </a>
                  </li>
                  <li className="footer__socials-item">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <span
                        path="socials/youtube.svg"
                        className="dynamic-image"
                      >
                        {/*?xml version="1.0" encoding="iso-8859-1"?*/}
                        {/* Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools */}
                        <svg
                          height={32}
                          width={32}
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 461.001 461.001"
                          xmlSpace="preserve"
                        >
                          <g>
                            <path
                              fill="white"
                              d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
    c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
    C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
    c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                            />
                          </g>
                        </svg>{" "}
                      </span>
                    </a>
                  </li>
                </ul>
                <h4 className="footer__title">Join The SatoPAD Community!</h4>
                {/*
                <a className="round-button light large btn btn-main nop" href="#">
                  Fuel The Fire
                </a>
                */}
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights-row justify-content-center row">
          <div className="col">
            <div className="footer-copyrights text-center">
              <span>Copyright © 2024 SatoPAD • All Rights Reserved.</span>
              <ul className="quantstamp-marks">
                {/*
                <li>
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    Security By
                    <img
                      width={131}
                      height={25}
                      src="https://firestarter.fi/static/media/logo.a2e4622a.svg"
                    />
                  </a>
                </li>
                */}
                <li>
                  <span>
                    <img
                      src="data:image/png;base64,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"
                      width={24}
                      height={25}
                    />
                  </span>
                </li>
                <li>
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAwCAYAAACITIOYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVISURBVHgBzVntdeI4FL3M2f/rqSCaCsJWgLeCIRXAVLDZCiAVhFQAqSCkgkAFIRXEqSCkAkbXug8pDAHjGGbuOe/IH7J0Jb0vyUCDWK1WuZcHL89e+vgT4YllXq5FlOWdl1eVDg3hCz4BkRz4ywcvbS9PXt4kN6rGAYybIN1CTXDJfTFQG7ON185LoeszhIEQ01ardYWa+AsHIiFJcCaXez7h+wXCAL5SVXx560lPcCAqzyyX3BfXXrpepiKaSc5FyohnG9eUwstcdf9hk15+eNIFKmIvWZH8z0sfcWn3wQhWqceBXx1Ceivofrw8yrL7aBhyda9ydQPUgRq5UyO05GccCb7tkfp6lPQ/qtva+NAh6CWt9x5B7757uThkmag6vv4+w1vX9QUng67OIeg08b9vY4ZNslv08lYfdnjvP/qxpzO6p0ztkSQHzG846Fe18bKjjUuESZnrkVPfMyT63PIVSXIogkt1+reXF9ScVZLcnJUK39GlFeqXOBcXDnhSkvaVVhoBXRGv31SZI5v7Toc4AeS/x4jqB5HlqtFd/stwS4fN0ZwnRFnBnYoooZVYqG8kPMip4A0jmDnsQhU4o87LhAb3af93GGhkdwgz6xAj5JmR3QRnua3Kg6AlJd6wO7SeoRmwjxzB2FbJs1/IOlTwAMeEn5wJgmHTyKkW62hoKaJTSb2dQSNRBLuUhTdFJlPZ3VHNfO67sJ3qLHTNFG6s+47uSbjQIFhSTTj7M3XaTt4t7b3KGaIPbYtoWVfRytwlkkxsrL45eU9G9ktClC/MAafkkYwy99ITga7vrC0iy4RkT3W7qmdJueW0bHuh9+ZHy8GqPcOV+j3Dhs5SP+jIL/AeczV6KaKFnvPZRM9u9TxDzFspQ8TZdsngZ4iO3iF6ImujhFbNUsqAJKvKk2dj/CbQwLyc6TpTMsVEJ6cacJTTQ8Nj0lgbR4KSIRpbaYzmDerui7hsHXmNtjyH44vkvq0db61BecIjBPUqdbZSKrerPURvcC6ibPy73vPdCz6HtZ/lRV0dJcEZojcgqQmi4dELkHiBmpB7c3bzLCPLkwp/ioG5ZAdRGhhnhC7iumJj3eTamS7uiUg729kB7svWK2N+tlxG38BQaeGu8JorubEtuOWiJM57qgKjD/NSi2S2NS9zZLXjEHa2Hw3GIW6vygkxnc30sKdK2QcNtEWwhxgK+4gnMmZsL4g7DkvxOno+wK8nONtwp4F2kESwNCsvEE9btoF1mI05xEFeiOAU0dByyN2oTHOKid5Pd/RjGZ/lBeUKclvDDZ0dojmNhP7tG34DkhSRgzSVIdkbm1kul+1MWaGXnBUUOC3a4rBInpVqaQaW6pglvfen3IMRyaZxJR5fEbbypaqa6yrDJsLWhXqSGtspQaILxJTSNowOIms5KZF6gQXqR7aDoUhVIBrVPWJ6uXZdtDzzg+YZCl27NLJV7DTTwclB3yCcCM0RcwzLY8vdCrPCVvJBH8FtLTUqaFSdfZ7Bf9vRJb/9po4vkg6fdp196QQxR7AdrijJ98RjuPVbhU+e6q1UDhWXhzgS1OdKfVl/D5VTSjUw0Q5ipGQnwxGwCkeq6ZFnjjpYhXPaR5GtlOgc2H5Xs8r2L/fVr/RPIdHnpsHVYvQcVTnPrUSWkM/tIxjPDPEHiPlpU5MCcQu9SPop8P6HCdHsD5APSA8RD3vTLYslQ5YabsJI3tTZoB5M1iBrtTSOwkhjZB3e/7Tj8xzBX45QE7XJGqTPVA3bgzGWM6YzvjsJ92OV9PIkkI98TdxQ4z+aG0Xinx9q+8sd+An3XmZ6c1dv9gAAAABJRU5ErkJggg=="
                      width={24}
                      height={25}
                    />
                  </span>
                </li>
                <li>
                  <span>
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAwCAYAAACITIOYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVGSURBVHgBzVn/ddpIEB7u5X/LFaAOIldwSgUhFaBUYFIBuAJDBZAK8FUArgBcgXUVoFSgm0/7rTWnSLDCJGHem7cr7czsp9nZ2R8ayAWpLMtMi0T5o3Ku/DwYDFZyTaQgU+U1eaR8YLlT3ijHcgH6S95BAAEwWr1X3itHbPrEOvgf5aXKzS8Fui/ISPnReBIeTDtkM9+u/Ko8hb78aiLIaaPzSYAeRmBG+ZT6mfwqMp2M2Omsr4cIekU7Hnwcqj8I6CDVYqr8LG6WA+BXneW5nEm0uVTeKv9QvlF+ONumicslJ8emKy7PJcbzK0vYn0pfYlxi8kxC49Loxn3ikfJzk+42QfqMyw1BHvrGJTueUjc5Q3fV8HRsZQYUhNG5cqH8t7jV59upGMLHUGfPcqe8EheHsFOojU/wmNbHyhN9/veEzYyywIR5UiovKiz8olcOxTo0Lum5HXniwdMjK3o34vsdn9cSSLS1IyaUEVawTPmr8lDcLN+eMBLzgwoy6CPLXJxHYEvUVkHAEdu+G/2jpLozLb4ox8Q3EXpiXQbmO2YIH5OJ1SMQ7820oee9j/kAGgb2NyK+g/i0JIFEQCM5k5gSsx7ycMgTMH4Ql5DzUGVOumD5Fn2EzqqHCuQxyQRgE7l+AsYIYO3W7lppqxwjGyTS4V3GZ8z6yL5vkU386mV0Jl7PvLNyGWM49XVppwojwO7JbYS12i+1Y/N+1gCKTkZ8jxjLCBLv/Urm7aCMlT+bfqesp9JOaMu9Z4+FwdDkyi7ybU9Snxr2BFVyUt00dND2yPqz0WujCiPAYvkrmq30TEwgwZMQyys7hs5M+ZY595YiPr9+F5fshSAX4jzcRhXGD1QuWgQiGijY8QvzMc5Uha8ruDnSmT7n/Mg1ZQDAew5te9MGm6m4le+bqS86wAJjNEDCFTdUX+RKiRiHCAMk3GtPXW+LAmLpplXCpZsRhhp7AnEftdfnBcMAw4nYy6WOtwept3iop+K2i7a+MDLQ/2xtt0ABxmqCHaR7+QSAmPVIDWFC3HHy5QydMWUQi2i/57M/U42ljkVbjyiz1fKHsZ224IBn31JXLN1UNAzsW+QTAvETqMqrHBlMoAllfD2ljUljgSmkPSQhkyAMttIClgBtDo4YCnhfeZTPL+Lyqz9lFKZjEEYnZx9jqUexMOCGtDWU9ly7rfS5C39tARuZvWlEjk17bJfHNllTT6yekfup3kalO8lU+9lln/3s7yZ+CDDuELOnltI/TX4FrSbYrVw/4bRcbRERr0WoFrdy6/LMm8Cyvsvtow+Mex8GSRl+QfYWNjwuT31qI5Ap96yPfBc3AMZyPFU2KRWflUp3uk3KnjfUZX0vuzbA/N3Vq88wnCA7I9vnlsbeEC39l28MZz2MbQjsic9rztwZ348J9kCeBNr1l4L+AytH+uujWNzKkotL7KCQ66NqlvIyAzbgYZQ+4b/wsqIaCa0/yWmgGe2sxE0sf+Hxk2Ba1hfFc3oplh7kQ0F6khnyZVn/AohDFH3sZVTMpAf1jH2f9Ofkzv8TRzss63vTSd94DgQ5pd15GXAP3PlrCfGqDOU7cakqBpcX+EVUui0mdmi3UqexO+ybj+md/KfQ6AB7VQDHTgt7zF7/ATi893yEnYI29iH6wWBNh5k4byBr4NSJybTgcbtLB/J+I++3hQ+nrlffDdZ0jhC5kfq4vmj+p+UCAE9iVPZSj8r82MddFKz8H/RM6tMDzlI4a+XiPJ+JO2PdsK/ZOSAvSmX9Q+/RLMMjpqRN71TUQe/ybJMYz/6kinhe9Y3LY/QfNt9n4IX7ks4AAAAASUVORK5CYII="
                      width={24}
                      height={25}
                    />
                  </span>
                </li>
                <li>
                  <span>
                    <img
                      src="data:image/png;base64,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"
                      width={24}
                      height={25}
                    />
                  </span>
                </li>
                <li>
                  <span>
                    <img
                      src="data:image/png;base64,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"
                      width={24}
                      height={25}
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Projects;
