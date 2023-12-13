import React from 'react';
import './SwapCard.css'
import BtcIcon from "../../../assets/img/btc-icon.png";
import UsdcIcon from "../../../assets/img/usdc-icon.png";
const SwapCard = () => {
    return (
      <div className="page-container">
        <div
          className="swap-container flex justify-center w-full container md:items-start mt-8 md:-mt-10"
          style={{ zIndex: 2 }}
        >
          <div
            id="swap-page"
            className="max-w-xl w-full md:w-1/2 pb-4 p-5 md:p-5 space-y-4 md:mt-20 rounded-xl bg-dark-900 z-1"
          >
            <div className="flex justify-between mb-5 space-x-3 items-center">
              <div className="flex items-center">
                <h1 className="text-white font-medium swap-head currentColor">
                  Swap
                </h1>
              </div>
              <div className="flex items-center">
                <div className="grid grid-flow-col gap-1">
                  <div className="relative w-full h-full rounded hover:bg-dark-800 flex items-center">
                    <div className="flex relative">
                      <div
                        className="radius-12  flex items-center justify-center cursor-pointer py-1 px-3"
                        id="open-settings-dialog-button"
                        style={{ fontSize: "12px" }}
                      >
                        <img
                          src="https://app.beamswap.io/images/swap-settings.svg"
                          height="18px"
                          width="18px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="alert syncera-warning" role="alert">
              <i className="fas fa-exclamation-triangle"></i> Please note that
              swapping is currently <i>unavailable</i>, but will become live
              right after our TGE.
            </div>
            <div className="input-container">
              <div
                id="swap-currency-input"
                className="p-5 bg-blue rounded-xl border border-lightBlueSecondary undefined"
              >
                <div className="text-xs font-medium text-jordyBlue whitespace-nowrap currency-title">
                  From
                </div>
                <div className="flex justify-between space-y-3 sm:space-y-0 sm:flex-row input-wrapper gap-3">
                  <div
                    className="w-full sm:w-72 order-2 ml-3 bg-gradient-to-r from-light-purple via-dark-purple to-light-blue rounded-xl relative"
                    
                  >
                    <div className="absolute -top-7 right-0">
                      <div className="text-xxs font-medium text-right cursor-pointer text-jordyBlue whitespace-nowrap">
                        Balance: 0.00 BTC
                      </div>
                      <div className="flex justify-end space-x-1 text-xs font-medium text-right text-secondary" />
                    </div>
                    <button
                      type="button"
                      className="text-primary open-currency-select-button h-full w-full outline-none select-none cursor-pointer border-none text-xl font-medium rounded-xl items-center token-button"
                      style={{
                        backgroundColor: "#1e110e",
                        position: "relative",
                      }}
                    >
                      <div className="flex justify-center items-center">
                        <div
                          className="flex items-center"
                          style={{ marginRight: "8px" }}
                        >
                          <div
                            className="rounded"
                            style={{ width: "26px", height: "26px" }}
                          >
                            <img
                              src={BtcIcon}
                              width="26px"
                              height="26px"
                              alt="GLMR"
                              className="rounded icon-swap"
                            />
                          </div>
                        </div>
                        <div className>
                          <div className="flex items-center swap-input-transform">
                            <div className="text-sm items-center font-bold token-symbol-container">
                              BTC
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                              width={16}
                              height={16}
                              className="ml-2 stroke-current"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="flex items-center w-full space-x-3 rounded input focus:bg-dark-700 p-3 relative round-20">
                    <input
                      id="token-amount-input"
                      inputMode="decimal"
                      title="Token Amount"
                      autoComplete="off"
                      autoCorrect="off"
                      type="text"
                      pattern="^[0-9]*[.,]?[0-9]*$"
                      placeholder={0.0}
                      min={0}
                      minLength={1}
                      maxLength={79}
                      spellCheck="false"
                      className="relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary w-0 p-0 text-lg bg-transparent"
                      defaultValue
                    />
                  </div>
                </div>
              </div>
              <div className="grid ">
                <div className="w-full flex p-0 justify-center transition Row__AutoRow-sc-1ljkvzo-2 iUMUwm">
                  <button className="z-10 -mt-6 -mb-6 rounded-full">
                    <div
                      className="rounded-full rounded-fulle p-3px m-4"
                      style={{ borderRadius: "20px!important" }}
                    >
                      <div className="p-1 rounded-full">
                        <div className="w-he">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 500 500"
                            className="radiuse-m"
                            preserveAspectRatio="xMidYMid meet"
                            style={{
                              width: "100%",
                              borderRadius: "22px",
                              height: "100%",
                              transform: "translate3d(0px, 0px, 0px)",
                              contentVisibility: "visible",
                            }}
                          >
                            <defs>
                              <clipPath id="__lottie_element_2">
                                <rect width={500} height={500} x={0} y={0} />
                              </clipPath>
                              <clipPath id="__lottie_element_4">
                                <path d="M0,0 L500,0 L500,500 L0,500z" />
                              </clipPath>
                            </defs>
                            <g clipPath="url(#__lottie_element_2)">
                              <g
                                transform="matrix(4.5,0,0,4.5,207.25,194.875)"
                                opacity={1}
                                style={{ display: "block" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fillOpacity={0}
                                    stroke="rgb(226,226,226)"
                                    strokeOpacity={1}
                                    strokeWidth="5.6000000000000005"
                                    d=" M28.945999145507812,-27.937000274658203 C28.966999053955078,-9.605999946594238 29.014999389648438,33.75299835205078 29.034000396728516,50.236000061035156"
                                  />
                                </g>
                              </g>
                              <g
                                transform="matrix(3.1819803714752197,-3.1819803714752197,3.1819803714752197,3.1819803714752197,363.2012939453125,326.5682373046875)"
                                opacity={1}
                                style={{ display: "block" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fillOpacity={0}
                                    stroke="rgb(226,226,226)"
                                    strokeOpacity={1}
                                    strokeWidth="5.6000000000000005"
                                    d=" M-20.548999786376953,-4.929999828338623 C-20.548999786376953,-4.929999828338623 -20.548999786376953,12.746999740600586 -20.548999786376953,12.746999740600586 C-20.548999786376953,12.746999740600586 -2.927000045776367,12.746999740600586 -2.927000045776367,12.746999740600586"
                                  />
                                </g>
                              </g>
                              <g
                                transform="matrix(-4.5,0,0,-4.5,292.75,305.125)"
                                opacity={1}
                                style={{ display: "block" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fillOpacity={0}
                                    stroke="rgb(226,226,226)"
                                    strokeOpacity={1}
                                    strokeWidth="5.6000000000000005"
                                    d=" M28.945999145507812,-27.937000274658203 C28.966999053955078,-9.605999946594238 29.014999389648438,33.75299835205078 29.034000396728516,50.236000061035156"
                                  />
                                </g>
                              </g>
                              <g
                                transform="matrix(-3.1819803714752197,3.1819803714752197,-3.1819803714752197,-3.1819803714752197,136.79869079589844,173.43174743652344)"
                                opacity={1}
                                style={{ display: "block" }}
                              >
                                <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fillOpacity={0}
                                    stroke="rgb(226,226,226)"
                                    strokeOpacity={1}
                                    strokeWidth="5.6000000000000005"
                                    d=" M-20.548999786376953,-4.929999828338623 C-20.548999786376953,-4.929999828338623 -20.548999786376953,12.746999740600586 -20.548999786376953,12.746999740600586 C-20.548999786376953,12.746999740600586 -2.927000045776367,12.746999740600586 -2.927000045776367,12.746999740600586"
                                  />
                                </g>
                              </g>
                              <g
                                clipPath="url(#__lottie_element_4)"
                                transform="matrix(1,0,0,1,0,0)"
                                opacity={1}
                                style={{ display: "block" }}
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div>
                <div
                  id="swap-currency-output"
                  className="p-5 bg-blue rounded-xl border border-lightBlueSecondary undefined"
                >
                  <div className="text-xs font-medium text-jordyBlue whitespace-nowrap currency-title">
                    To
                  </div>
                  <div className="flex justify-between space-y-3 sm:space-y-0 sm:flex-row input-wrapper gap-3">
                    <div
                      className="w-full sm:w-72 order-2 ml-3 bg-gradient-to-r from-light-purple via-dark-purple to-light-blue rounded-xl relative"
                      style={{ padding: "2px" }}
                    >
                      <div className="absolute -top-7 right-0">
                        <div className="text-xxs font-medium text-right cursor-pointer text-jordyBlue whitespace-nowrap">
                          Balance: 0.00 SATO
                        </div>
                        <div className="flex justify-end space-x-1 text-xs font-medium text-right text-secondary" />
                      </div>
                      <button
                        type="button"
                        className="text-primary open-currency-select-button h-full w-full outline-none select-none cursor-pointer border-none no-tg text-xl font-medium rounded-xl items-center token-button"
                        style={{
                          backgroundColor: "#1e110e",
                          position: "relative",
                        }}
                      >
                        <div className="flex justify-center items-center">
                          <div
                            className="flex items-center"
                            style={{ marginRight: "8px" }}
                          >
                            <div
                              className="rounded"
                              style={{ width: "26px", height: "26px" }}
                            >
                              <img
                                src={UsdcIcon}
                                width="26px"
                                height="26px"
                                alt="SATO"
                                className="rounded icon-swap"
                              />
                            </div>
                          </div>
                          <div className>
                            <div className="flex items-center swap-input-transform">
                              <div className="text-sm items-center font-bold token-symbol-container">
                                SATO
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                                width={16}
                                height={16}
                                className="ml-2 stroke-current"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="flex items-center w-full space-x-3 rounded input focus:bg-dark-700 p-3 relative round-20">
                      <input
                        id="token-amount-input"
                        inputMode="decimal"
                        title="Token Amount"
                        autoComplete="off"
                        autoCorrect="off"
                        type="text"
                        pattern="^[0-9]*[.,]?[0-9]*$"
                        placeholder={0.0}
                        min={0}
                        minLength={1}
                        maxLength={79}
                        spellCheck="false"
                        className="relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary w-0 p-0 text-lg bg-transparent"
                        defaultValue
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
                  className="btn-one btn-swap btn-disabled"
                  id="swap-button"
                >
                  Insufficient Liquidity
                </button>
            <div className="bg-darkBlue flex text-center justify-center p-2 md:w-1/2 mr-auto ml-auto rounded-xl px-2">
              Slippage Tolerance: 0.50%
            </div>
            <div className="absolute -bottom-14 left-0 w-full  md:block">
              <div className="left-0 radius-12 px-5 py-222 flex gap-2 justify-center border border-lightBlueSecondary bg-deepCove text-aqua hover:bg-blue cursor-pointer transition w-full text-center text-xxs">
                <div>Turn on Advanced Trading</div>
                <img src="https://app.beamswap.io/images/advanced.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SwapCard;
