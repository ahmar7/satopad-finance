import React from "react";
import "./Banner.css";
import HomeWidget from '../../../assets/img/home-widget-1.svg'
import HomeWidget2 from '../../../assets/img/home-widget-2.svg'
import mblGraph from "../../../assets/img/instruction.png";
const Banner = () => {
  return (
    <div className="px-4 top-150 lg:px-16 md:container mx-auto lg:block">
      <div className="w-full text-center text-[60px] xl:text-[84px] leading-[80%] font-bold uppercase select-none">
        Innovation<br />
        <span className="secondary-glow">meets community</span>
      </div>
      <div className="mt-14 seprs  w-full flex gap-14 justify-center items-center">
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="text-[74px] secondary-glow leading-[80%] font-bold">
            <span>N/A</span>
          </div>
          <div className="uppercase font-medium" style={{ "text-align": "center" }}>Projects Launched</div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="text-[74px] secondary-glow leading-[80%] font-bold">
            N/A
          </div>
          <div className="uppercase font-medium" style={{ "text-align": "center" }}>Average ATH ROI</div>
        </div>
      </div>
      <div className>
        <div className="lg:hidden seprs w-full flex justify-center mt-20">
          <span className="start-bulk maxtso">
            {/* <span className="start-blk2 ">
              <img
                className="data1"
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271125%27%20height=%271209%27/%3e"
              />
            </span> */}
            <div className="uppercase font-bold text-center text-xl mb-4">
              No fuss, no hassle. Join our next IDO in just 5 steps!
            </div>
            <img alt="" src={mblGraph} decoding="async" data-nimg="intrinsic" />
          </span>
        </div>
        <div className=" lg:block md:px-4 lg:px-16 mx-auto py-28 new-container relative for-large select-none">
          <div className="blk-left absolute bottom-0 left-4 lg:left-10">
            <span className="start-blk">
              <span className="start-blk2">
                <img
                  className="data1"
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27184%27%20height=%27275%27/%3e"
                />
              </span>
              <img
                className="mbl-graph"
                alt=""
                src={HomeWidget}
                decoding="async"
                data-nimg="intrinsic"
              />
            </span>
          </div>
          <div className="absolute bottom-0 right-4 lg:right-10">
            <span className="start-blk">
              <span className="start-blk2">
                <img
                  className="data1"
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27205%27%20height=%27275%27/%3e"
                />
              </span>
              <img
                alt=""
                className="mbl-graph"
                src={HomeWidget2}
                decoding="async"
                data-nimg="intrinsic"
              />
            </span>
          </div>
          <div className="uppercase font-bold text-center text-3xl">
            No fuss, no hassle. Join our next IDO in just 5 steps!
          </div>
          <div
            className="mt-14 mx-auto relative flex justify-between"
            style={{ maxWidth: "800px" }}
          >
            <div
              className="absolute bg-gamefiGreen-700 rounded2 w-full top-4"
              style={{ height: "2px", top: "calc(50% - 2px)" }}
            />
            <svg
              width={63}
              height={63}
              viewBox="0 0 63 63"
              className="bg-gamefiDark-900"
              style={{ zIndex: 1 }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="31.5"
                cy="31.5"
                r={29}
                fill="#f7931a"
                stroke="#0b0b0f"
                strokeWidth={5}
              />
              <circle cx="31.5" cy="31.5" r="24.5" fill="#0b0b0f" />
              <path
                d="M31.5 28.9688C36.6259 28.9688 40.7812 27.08 40.7812 24.75C40.7812 22.42 36.6259 20.5312 31.5 20.5312C26.3741 20.5312 22.2188 22.42 22.2188 24.75C22.2188 27.08 26.3741 28.9688 31.5 28.9688Z"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.2188 28.9688V29.8125C22.2188 32.1429 26.3734 34.0312 31.5 34.0312C36.6266 34.0312 40.7812 32.1429 40.7812 29.8125V28.9688"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.2188 34.0312V34.875C22.2188 37.2054 26.3734 39.0938 31.5 39.0938C36.6266 39.0938 40.7812 37.2054 40.7812 34.875V34.0312"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.2188 39.0938V39.9375C22.2188 42.2679 26.3734 44.1562 31.5 44.1562C36.6266 44.1562 40.7812 42.2679 40.7812 39.9375V39.0938"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width={63}
              height={63}
              viewBox="0 0 63 63"
              className="bg-gamefiDark-900"
              style={{ zIndex: 1 }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="31.5"
                cy="31.5"
                r={29}
                fill="#f7931a"
                stroke="#0b0b0f"
                strokeWidth={5}
              />
              <circle cx="31.5" cy="31.5" r="24.5" fill="#0b0b0f" />
              <path
                d="M38.7904 38.7917H24.207V37.424C24.207 36.1605 24.9622 35.0209 26.1299 34.5365C27.3122 34.0469 29.0716 33.5834 31.4987 33.5834C33.9258 33.5834 35.6852 34.0469 36.8674 34.5375C38.0352 35.0209 38.7904 36.1605 38.7904 37.424V38.7917Z"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
              <path
                d="M31.4987 30.4583C33.7999 30.4583 35.6654 28.5929 35.6654 26.2917C35.6654 23.9905 33.7999 22.125 31.4987 22.125C29.1975 22.125 27.332 23.9905 27.332 26.2917C27.332 28.5929 29.1975 30.4583 31.4987 30.4583Z"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
              <path
                d="M20.041 24.2084V20.0417H24.2077"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
              <path
                d="M42.9577 24.2084V20.0417H38.791"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
              <path
                d="M20.041 38.7917V42.9584H24.2077"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
              <path
                d="M42.9577 38.7917V42.9584H38.791"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
            </svg>
            <svg
              width={63}
              height={63}
              viewBox="0 0 63 63"
              className="bg-gamefiDark-900"
              style={{ zIndex: 1 }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="31.5"
                cy="31.5"
                r={29}
                fill="#f7931a"
                stroke="#0b0b0f"
                strokeWidth={5}
              />
              <circle cx="31.5" cy="31.5" r="24.5" fill="#0b0b0f" />
              <path
                d="M36.709 21.0834H41.9173V42.9584H21.084V21.0834H26.2923"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
              <path
                d="M28.375 34.625L30.4583 36.7084L34.625 32.5417"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
              <path
                d="M26.293 20.0417V26.2917H29.418C29.418 25.1406 30.3503 24.2084 31.5013 24.2084C32.6523 24.2084 33.5846 25.1406 33.5846 26.2917H36.7096V20.0417H26.293Z"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
            </svg>
            <svg
              width={63}
              height={63}
              viewBox="0 0 63 63"
              className="bg-gamefiDark-900"
              style={{ zIndex: 1 }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="31.5"
                cy="31.5"
                r={29}
                fill="#f7931a"
                stroke="#0b0b0f"
                strokeWidth={5}
              />
              <circle cx="31.5" cy="31.5" r="24.5" fill="#0b0b0f" />
              <path
                d="M37.7507 42.9584H22.2168C21.6153 42.9584 21.1499 42.4312 21.2245 41.8343L23.0578 27.1677C23.1204 26.6672 23.5458 26.2917 24.0501 26.2917H38.956C39.4582 26.2917 39.8826 26.6643 39.9476 27.1623L40.7715 33.4792"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M27.334 29.4167V24.2084C27.334 21.9167 29.209 20.0417 31.5007 20.0417C33.7923 20.0417 35.6673 21.9167 35.6673 24.2084V29.4167"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
              <path
                d="M37.7513 42.9584C40.6278 42.9584 42.9596 40.6265 42.9596 37.75C42.9596 34.8735 40.6278 32.5417 37.7513 32.5417C34.8748 32.5417 32.543 34.8735 32.543 37.75C32.543 40.6265 34.8748 42.9584 37.7513 42.9584Z"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
              <path
                d="M37.75 35.6667V39.8334"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
              <path
                d="M35.668 37.75H39.8346"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
            </svg>
            <svg
              width={63}
              height={63}
              viewBox="0 0 63 63"
              className="bg-gamefiDark-900"
              style={{ zIndex: 1 }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="31.5"
                cy="31.5"
                r={29}
                fill="#f7931a"
                stroke="#0b0b0f"
                strokeWidth={5}
              />
              <circle cx="31.5" cy="31.5" r="24.5" fill="#0b0b0f" />
              <path
                d="M25.2507 21.0833H37.7507L41.9173 25.25V39.8333C41.9173 40.3858 41.6978 40.9158 41.3071 41.3065C40.9164 41.6972 40.3865 41.9166 39.834 41.9166H23.1673C22.6148 41.9166 22.0849 41.6972 21.6942 41.3065C21.3035 40.9158 21.084 40.3858 21.084 39.8333V25.25L25.2507 21.0833Z"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
              <path
                d="M31.5 37.75V28.375"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
              <path
                d="M27.334 33.5833L31.5007 37.75L35.6673 33.5833"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
              />
              <path
                d="M21.084 25.25H41.9173"
                stroke="#f7931a"
                strokeWidth="1.5"
                strokeMiterlimit={10}
              />
            </svg>
          </div>
          <div
            className="mx-auto flex justify-between"
            style={{ maxWidth: "800px" }}
          >
            <div
              className="flex justify-center whitespace-nowrap uppercase text-sm font-semibold"
              style={{ width: "63px", "font-weight": "bold" }}
            >
              Stake
            </div>
            <div
              className="flex justify-center whitespace-nowrap uppercase text-sm font-semibold"
              style={{ width: "63px", "font-weight": "bold" }}
            >
              KYC
            </div>
            <div
              className="flex justify-center whitespace-nowrap uppercase text-sm font-semibold"
              style={{ width: "63px", "font-weight": "bold" }}
            >
              Apply Whitelist
            </div>
            <div
              className="flex justify-center whitespace-nowrap uppercase text-sm font-semibold"
              style={{ width: "63px", "font-weight": "bold" }}
            >
              Buy
            </div>
            <div
              className="flex justify-center whitespace-nowrap uppercase text-sm font-semibold"
              style={{ width: "63px", "font-weight": "bold" }}
            >
              Claim
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
