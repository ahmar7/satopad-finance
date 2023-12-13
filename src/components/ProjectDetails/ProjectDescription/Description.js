import React, { useState, useEffect } from "react";
import DetailSwitch from "../DetailSwitch/DetailSwitch";
import walletIco from "../../../assets/img/wallet.svg";
import PrivateBanner from "../../../assets/img/syncera-ido-large-3.png";
import EtherIcon from "../../../assets/img/eth-icon.png";
import SynceraIcon from "../../../assets/img/Syncera-Coin.png"; 
import { ethers } from "ethers";
import axios from 'axios';
import "./Description.css";
import { Button } from "react-bootstrap";
import { TOKEN_PRICE, PRESALE_TARGET_ADDRESS } from "config/const";
import { isError } from "lodash";
import { Spinner } from "react-bootstrap";

const Description = () => {

  const wallet = "abs";
  const [walletAddress, setWalletAddress] = useState(null);

  const [activeInfo, setactiveInfo] = useState(true);
  const [activeWhitlist, setactiveWhitlist] = useState(false);
  const [activeSale, setactiveSale] = useState(false);

  const [isWhitelisted, setIsWhitelisted] = useState(true);

  const [ethAmount, setEthAmount] = useState(0);
  const [tokenAmount, setTokenAmount] = useState(0);

  const [myEthAmount, setMyETHAmount] = useState(0);
  const [myTokenAmount, setMyTokenAmount] = useState(0);

  const [isError, setIsError] = useState(null);
  const [alertClass, setAlertClass] = useState("alert syncera-warning");

  const [activeTime, setActiveTime] = useState(1684159200);

  const [isLoading, setIsLoading] = useState(false);

  const isActive = () => {
    return new Date().getTime() >= activeTime * 1000
  }

  let InfoTrue = () => {
    setactiveInfo(true);
    setactiveWhitlist(false);
    setactiveSale(false);
  };
  let whiteListTrue = () => {
    setactiveInfo(false);
    setactiveWhitlist(true);
    setactiveSale(false);
  };
  let SaleTrue = () => {
    setactiveInfo(false);
    setactiveWhitlist(false);
    setactiveSale(true);
  };

  useEffect(async () => {
    if (wallet.account) {
      if (walletAddress === null || wallet.account !== walletAddress) {
        setWalletAddress(wallet.account);

        //call backend api
        // const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/whitelist/check?wallet=${wallet.account}`);
        // const result = await resp.json();

        // setIsWhitelisted(result.status);

        const resp1 = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/presale?wallet=${wallet.account}`,
        );

        const result1 = resp1.data

        setMyETHAmount(ethers.utils.formatEther(result1.totalAmount));
        setMyTokenAmount(result1.totalTokenAmount);
      }
    }
    else {
      setWalletAddress(null);
    }
  }, [wallet]);

  const onPurchase = async () => {
    console.log(" = onPurchase = ");

    try {

      if (ethAmount < 0.001 || parseFloat(ethAmount) + parseFloat(myEthAmount) > 10) {
        setAlertClass("alert alert-danger");

        setTimeout(() => {
          setAlertClass("alert syncera-warning");
        }, 2000);

        return;
      }

      setIsLoading(true);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(PRESALE_TARGET_ADDRESS);
      const tx = await signer.sendTransaction({
        to: PRESALE_TARGET_ADDRESS,
        value: ethers.utils.parseEther(ethAmount)
      });

      const txHash = tx.hash;
      const value = tx.value.toString();

      // const txHash = "0x531a4e36dc6b89fd5c173778eb4e3081fa128b8c235d563c5bbef4e0976cfc24";
      // const value = "1000000000000000";

      const resp = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/presale`,
        {
          wallet: wallet.account,
          txid: txHash,
          value
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        });

      const result = resp.data

      setMyETHAmount(ethers.utils.formatEther(result.totalAmount));
      setMyTokenAmount(result.totalTokenAmount);
    }
    catch (e) {
      console.log(e);

      if (e.data?.message) {
        setIsError(e.data?.message);

        setTimeout(() => {
          setIsError(null);
        }, 2000);
      }
    }

    setIsLoading(false);
  }

  return (
    <>
      <DetailSwitch
        InfoTrue={InfoTrue}
        activeInfo={activeInfo}
        activeWhitlist={activeWhitlist}
        activeSale={activeSale}
        whiteListTrue={whiteListTrue}
        SaleTrue={SaleTrue}
      />
      {activeInfo && (
        <div>
          <div
            id="headlessui-tabs-panel-4"
            role="tabpanel"
            tabIndex={0}
            data-headlessui-state="selected"
            aria-labelledby="headlessui-tabs-tab-1"
          >
            <div>
              <div>
                <div>
                  <div className="flex flex-col mb-[30px] project-info">
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Sale start
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>TBA</span>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Sale end
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>TBA</span>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Distribution date
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>After TGE</span>
                      </div>
                    </div>
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Chain
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span>Bitcoin Network</span>
                      </div>
                    </div>
                    {/* <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Token address
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <a
                          href="#"
                          className="underline hover:opacity-70 emphasize-link enlarged-link"
                          target="_blank"
                        >
                          View explorer
                        </a>
                      </div>
                    </div> */}
                    <div className="flex justify-between w-full text-sm md:text-md">
                      <span className="text-paragraph-text flex items-center">
                        Syncera Shield
                      </span>
                      <div className="font-poppins-bold leading-8">
                        <span><i>Activated</i></span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="font-poppins-bold text-lg w-full block leading-7 mb-5 secondary-glow font-weight-bold whitelist-instructions-heading">
                      Unlock Bitcoin's full potential with Syncera
                    </span>
                    <span className="block w-full text-sm text-paragraph-text mb-5 leading-[26px] project-content">
                      SatoPAD is revolutionizing Bitcoin's ecosystem by blending security, transparency, and ease of use, making DeFi accessible to  newcomers and seasoned investors alike, fostering the next wave of financial innovation.
                    </span>
                  </div>
                  <div
                    id="content-about"
                    className="content-image mb-5 last:mb-0"
                  >
                    <h1 className="font-poppins-bold text-lg leading-9 mb-3 secondary-glow font-weight-bold whitelist-instructions-heading">
                      About
                    </h1>
                    <img
                      src={PrivateBanner}
                      alt="Content image"
                      className="w-full mb-30px rounded-solaniumDefault"
                    />
                    <div className="flex flex-col gap-2 mb-30px last:mb-0">
                      <p className="text-paragraph-text text-sm leading-[26px] mb-2 last:mb-0 project-content">
                        Introducing Syncera.io, a decentralized platform for
                        Initial DEX Offerings (IDO) that aims to promote and
                        expand the adoption of the zkSync ecosystem. The
                        project's goal is to make DeFi accessible to both
                        existing and new investors by providing a user-friendly
                        platform with a focus on UI/UX.
                      </p>
                      <p className="text-paragraph-text text-sm leading-[26px] mb-2 last:mb-0 project-content">
                        Syncera aims to become an all-in-one DeFi platform,
                        providing tools for secure launch and management of
                        decentralized finances. The platform will offer
                        all the necessary tools to make investing in the zkSync
                        ecosystem accessible and secure, with a focus on
                        improving UX, expanding launchpad utility, streamlining
                        token sale flow, and providing customer support. The IDO
                        launchpad will enable investors to participate in the
                        hottest presales of a growing ecosystem, with equal
                        opportunities.
                      </p>
                      <p className="text-paragraph-text text-sm leading-[26px] mb-2 last:mb-0 project-content">
                        Built on zkSync Era, Syncera's platform will offer
                        complementary services such as token swap (AMM),
                        time-weighted token staking, token vesting, and a farm.
                        Some of these services will be available soon after the
                        TGE, while others will be provided later to meet the
                        requirements of the users. The project aims to ensure
                        the quality of services and avoid unrealistic claims to
                        ensure long-term success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            id="headlessui-tabs-panel-5"
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby="headlessui-tabs-tab-2"
            style={{
              position: "fixed",
              height: "0px",
              padding: "0px",
              overflow: "hidden",
              clip: "rect(0px, 0px, 0px, 0px)",
              whiteSpace: "nowrap",
              borderWidth: "0px",
            }}
          />
          <span
            id="headlessui-tabs-panel-6"
            role="tabpanel"
            tabIndex={-1}
            aria-labelledby="headlessui-tabs-tab-3"
            style={{
              position: "fixed",
              height: "0px",
              padding: "0px",
              overflow: "hidden",
              clip: "rect(0px, 0px, 0px, 0px)",
              whiteSpace: "nowrap",
              borderWidth: "0px",
            }}
          />
        </div>
      )}
      {activeWhitlist && (
        <div>
          <span id="headlessui-tabs-panel-4" />
          <div id="headlessui-tabs-panel-5">
            <div>
              <div>
                <div className="flex justify-center items-center flex-col access-private-section">
                  <span className="font-poppins-bold text-lg w-full block leading-7 mb-5 font-weight-bold whitelist-instructions-heading ">
                    Access to Syncera Private
                  </span>
                  <span className="block w-full text-sm text-paragraph-text mb-5 leading-[26px] whitelist-instructions">
                    We are excited to announce the launch of Syncera on our
                    platform! By signing up for the whitelist, you can receive
                    an allocation in the Syncera private Initial Dex Offering
                    (IDO) and purchase tokens at the cheapest price.
                  </span>

                  <span className="block w-full text-sm text-paragraph-text mb-5 leading-[26px] whitelist-instructions">
                    During the first hour of the private sale, only whitelisted addresses will have <i>priority</i> access, while the general public will be admitted on a first-come, first-served (FCFS) basis for the remainder of the sale.
                  </span>
                  <span className="block w-full text-sm text-paragraph-text mb-5 leading-[26px] whitelist-instructions">
                    <b>
                      To secure your spot on the whitelist, you must{" "}
                      <a
                        href="https://zealy.io/c/syncera/questboard/5e8e9de1-8a27-4ef5-9f5b-ebae68d7cc13"
                        target="_blank"
                        className="emphasize-link"
                      >
                        register
                      </a>{" "}
                      your wallet address on <a href="https://syncera.zealy.io/" target="_blank" className="emphasize-link">Zealy</a>.
                    </b>{" "}
                  </span>
                  <span className="block w-full text-sm text-paragraph-text mb-5 leading-[26px] whitelist-instructions">
                    The deadline to register your wallet is on <i>Sunday 14 May, 2:00 PM UTC</i>. About 24 hours before the sale, you can connect
                    your wallet to confirm your qualification for the whitelist.
                  </span>
                  <div className="w-60">
                    <a
                      href="https://zealy.io/c/syncera/questboard"
                      target="_blank"
                      className="w-60 btn-one swv-button swv-button-trigger"
                    >
                      Complete Quests
                    </a>
                  </div>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <span className="font-poppins-bold text-lg w-full block leading-7 mb-5 secondary-glow font-weight-bold whitelist-instructions-heading">
                    Attention Alert
                  </span>
                  <span className="block w-full text-sm text-paragraph-text mb-5 leading-[26px] whitelist-instructions">
                    Every whitelist submission will undergo screening and
                    verification. The following list of potential violations
                    will result in automatic disqualification from the
                    whitelist:
                    <br /> <br />
                    <ul>
                      <li>
                        Any submissions made by bots or other forms of automated
                        processes will not be taken into consideration.
                      </li>
                      <li>
                        Any submissions that have incomplete steps in the
                        application process will not be taken into
                        consideration.
                      </li>
                      <li>
                        While this sale <i>does not</i> require KYC, our policy
                        may change in the future to comply with regulations.
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
            {/**/}
          </div>
        </div>
      )}
      {activeSale && (
        <div>
          <span id="headlessui-tabs-panel-4" />
          <div id="headlessui-tabs-panel-5">

            <div>
              <div className="text-center">
                <div className="flex justify-center items-center flex-col">
                  <div className="flex flex-col bg-opacity-25 rounded-md w-full px-5 py-3 mb-9 text-sm text-center border-orange-500 bg-orange-300 text-orange-600">
                    {!wallet.account ? (
                      <span>
                        {" "}
                        Please connect your wallet before you can view the project
                        sale.{" "}
                      </span>
                    ) : (

                      isWhitelisted ? (
                        <div className="flex justify-center items-center">
                          <div
                            data-v-18811a9f
                            className="new-calc below-viewport in-viewport"
                            data-in-viewport="i0"
                          >
                            <span data-v-18811a9f className="new-calc-header">
                              Syncera Token Sale
                            </span>
                            <br></br>
                            <div className={alertClass}>
                              <span data-v-18811a9f className="new-calc-sub-header">
                                <i class="fas fa-coins"></i> <span className="ml-1">Your Allocation: <i>10 ETH</i></span>
                              </span>
                            </div>

                            {isError && (
                              <div className="alert alert-danger">
                                {isError}
                              </div>
                            )}

                            <div data-v-18811a9f className="calc-container inputs">
                              <div data-v-18811a9f className="input-block">
                                <div data-v-18811a9f className="symbol">
                                  <img
                                    src={EtherIcon}
                                    style={{ width: "30px", height: "30px" }}
                                    className="mx-2"
                                  />
                                  <b>ETH</b>
                                </div>
                                <input
                                  onChange={(e) => {
                                    setEthAmount(e.target.value);
                                    setTokenAmount(e.target.value / TOKEN_PRICE);
                                  }}
                                  data-v-18811a9f
                                  type="text"
                                  inputMode="decimal"
                                  title="ETH Amount"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  value={ethAmount}
                                  pattern="^[0-9]*[.,]?[0-9]*$"
                                  placeholder={0}
                                  min={0.001}
                                  minLength={1}
                                  max={10}
                                  spellCheck="false"
                                />
                              </div>
                              <div data-v-18811a9f>
                                <div data-v-18811a9f className="divider">
                                  <i
                                    data-v-18811a9f
                                    aria-label="icon: arrow-down"
                                    className="anticon anticon-arrow-down"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      data-icon="arrow-down"
                                      width="1em"
                                      height="1em"
                                      fill="white"
                                      aria-hidden="true"
                                      focusable="false"
                                      className="helper-icon"
                                    >
                                      <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z" />
                                    </svg>
                                  </i>
                                </div>

                                <div data-v-18811a9f className="input-block">
                                  <div data-v-18811a9f className="symbol">
                                    <img
                                      src={SynceraIcon}
                                      style={{ width: "30px", height: "30px" }}
                                      className="mx-2"
                                    />
                                    <b>SERA</b>
                                  </div>
                                  <input
                                    data-v-18811a9f
                                    type="number"
                                    inputMode="decimal"
                                    title="Token Amount"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    pattern="^[0-9]*[.,]?[0-9]*$"
                                    placeholder={0}
                                    min={0}
                                    // onChange={(e) => { setTokenAmount(e.target.value) }}
                                    value={tokenAmount.toFixed(2)}
                                    minLength={1}
                                    spellCheck="false"
                                  />
                                </div>
                              </div>
                            </div>

                            <div data-v-18811a9f className="calc-container lock-time">
                              <div data-v-18811a9f className="d-flex justify-content-between">
                                <div>
                                  Rate:
                                </div>
                                <div>
                                  1 SERA = 0.000028 ETH
                                </div>
                              </div>
                              <div data-v-18811a9f className="d-flex justify-content-between">
                                <div>
                                  Your Contribution:
                                </div>
                                <div>
                                  {parseFloat(myEthAmount).toFixed(2)} ETH
                                </div>
                              </div>
                              <div data-v-18811a9f className="d-flex justify-content-between">
                                <div>
                                  Your Tokens:
                                </div>
                                <div>
                                  {parseFloat(myTokenAmount).toFixed(2)} SERA
                                </div>
                              </div>
                            </div>

                            <Button
                              to="/staking"
                              size="large"
                              className="btn-one is-fullwidth calc-go-stake"
                              onClick={onPurchase}
                              disabled={!isActive() || isLoading}
                            >

                              BUY $SERA
                              {isLoading && (
                                <Spinner
                                  as="span"
                                  animation="border"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                  style={{ marginLeft: "10px", marginBottom: "1px" }}
                                />
                              )}

                            </Button>
                          </div>
                        </div>) : (
                        <div>
                          Sorry, You are not whitelisted.
                        </div>
                      )


                    )}

                  </div>
                  <div className="w-60">
                    {/* <ConnectedWallet /> */}
                    {/* <button className="w-60 swv-button swv-button-trigger">
                      <span className=" maxi lg:block">Select Wallet</span>
                      <span className="mini lg:hidden">
                        <img src={walletIco} />
                      </span>
                    </button> */}
                  </div>
                </div>
                {/**/}
              </div>
            </div>
            {/**/}
          </div>
        </div>
      )}
    </>
  );
};

export default Description;
