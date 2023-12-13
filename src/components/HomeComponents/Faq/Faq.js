import React, { useState } from "react";
import "./Faq.css";
const Faq = () => {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);
  const [faq7, setFaq7] = useState(false);
  let toggleFaq1 = () => {
    if (faq1 === false) {
      setFaq1(true);
    } else {
      setFaq1(false);
    }
  };
  let toggleFaq2 = () => {
    if (faq2 === false) {
      setFaq2(true);
    } else {
      setFaq2(false);
    }
  };
  let toggleFaq3 = () => {
    if (faq3 === false) {
      setFaq3(true);
    } else {
      setFaq3(false);
    }
  };
  let toggleFaq4 = () => {
    if (faq4 === false) {
      setFaq4(true);
    } else {
      setFaq4(false);
    }
  };
  let toggleFaq5 = () => {
    if (faq5 === false) {
      setFaq5(true);
    } else {
      setFaq5(false);
    }
  };
  let toggleFaq6 = () => {
    if (faq6 === false) {
      setFaq6(true);
    } else {
      setFaq6(false);
    }
  };
  let toggleFaq7 = () => {
    if (faq7 === false) {
      setFaq7(true);
    } else {
      setFaq7(false);
    }
  };
  return (
    <section className="faq-section">
      <div className="containerer">
        <div className="faq-column justify-content-center row">
          <div className="text-center col-xxl-10 col-xl-11 col-md-12">
            <h2 className="title faqs-title mt-5">FAQs</h2>
            <br />
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq1}
                    className={
                      faq1 ? "active btn btn-main" : " btn btn-main faq-bg"
                    }
                  >
                    What benefits do SERA token holders get?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq1 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      Syncera ($SERA) is the utility and governance token for
                      Syncera. We are taking significant measures to increase
                      its importance and function in our ecosystem by
                      incorporating new products and exclusive features.
                    </p>
                    <p>
                      The main benefit of holding the SERA token is that
                      investors can gain early access to other developing
                      projects within the growing ecosystem of zkSync. To
                      guarantee your participation in an IDO, you can go through
                      our{" "}
                      <a
                        href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/syncera-ecosystem-v1/launchpad/tiers"
                        target="_blank"
                        className="pool-whitelist-link"
                      >
                        tier system
                      </a>{" "}
                      to know the exact number of tokens required. Usually,
                      these emerging cryptocurrency projects offer SERA
                      investors a token valuation significantly lower than the
                      listing price, and considering the excitement and
                      potential surrounding zkSync, it may be worthwhile to
                      invest in these new ventures.
                    </p>

                    <p>
                      <b>Others ways holders of our token may benefit:</b>

                      <ul>
                        <li>IDO Participation</li>
                        <li>Guaranteed Allocation</li>
                        <li>Fee distribution</li>
                        <li>Governance</li>
                        <li>Ecosystem discounts</li>
                        <li>Airdrops</li>
                        <li>Private Deals</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq2}
                    className={
                      faq2 ? "active btn btn-main" : " btn btn-main faq-bg"
                    }
                  >
                    When is the public sale?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq2 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      Once our private sale campaign is over, we will also
                      conduct the public sale on our own platform. In due time,
                      we will provide you with all the necessary information
                      about the IDO. It is recommended that you familiarise
                      yourself with our{" "}
                      <a
                        href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/be-an-ambassador-crew3"
                        className="pool-whitelist-link"
                        target="_blank"
                      >
                        ambassador program
                      </a>{" "}
                      to increase your chances of being eligible for an
                      allocation at the earliest stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq3}
                    className={
                      faq3 ? "active btn btn-main" : " btn btn-main faq-bg"
                    }
                  >
                    How do I participate in the private sale?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq3 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      To participate in Syncera's private sale:
                    </p>
                    <ol>
                      <li><a href="https://www.youtube.com/watch?v=QfpZ2HrvOq0" target="_blank" className="pool-whitelist-link">Prepare your wallet</a> to support zkSync Era mainnet and <a href="https://www.youtube.com/watch?v=l70Phx8ZzIY" target="_blank" className="pool-whitelist-link">bridge ETH</a> to the network.</li>
                      <li>Confirm you have the required ETH for your desired investment amount and gas fees.</li>
                      <li>Visit Syncera's <a href="https://syncera.io/private-sale" className="pool-whitelist-link" target="_blank">private sale pool</a> and connect your wallet.</li>
                      <li>Follow the provided steps and make your investment.</li>
                      <li>For detailed instructions, please refer to our <a href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/private-sale" className="pool-whitelist-link" target="_blank"> private sale guide.</a></li>
                    </ol>
                    <p>Remember to conduct your own research and evaluate your financial situation before making any investment decisions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq6}
                    className={
                      faq3 ? "active btn btn-main" : " btn btn-main faq-bg"
                    }
                  >
                    How long will the private sale last?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq6 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      The private sale is in full swing and will continue until all <a href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/early-supporters/private-sale#private-sale-details" target="_blank" className="pool-whitelist-link">three phases</a> are successfully completed. After that, our sights are set on the exciting launch of <a href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/token-overview/what-is-usdsera" target="_blank" className="pool-whitelist-link">$SERA</a>! Sticking to our carefully crafted plan is vital to ensure the project’s long-term success. We’re dedicated to launching $SERA with solid liquidity and exciting hype to reward our early supporters. While all that unfolds, we’re hard at work building our product and forging strong partnerships. Stay tuned for an incredible journey ahead!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq4}
                    className={
                      faq4 ? "active btn btn-main" : " btn btn-main faq-bg"
                    }
                  >
                    What is the Syncera Ambassador Program?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq4 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      The Syncera Champion Program serves as an{" "}
                      <a
                        href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/champion-program-zealy"
                        class="pool-whitelist-link"
                        target="_blank"
                      >
                        ambassador program
                      </a>{" "}
                      on{" "}
                      <a
                        href="https://zealy.io/c/syncera/questboard"
                        target="_blank"
                        class="pool-whitelist-link"
                      >
                        Zealy
                      </a>{" "}
                      that allows members of the community to track their
                      progress and receive special roles on Discord for actively
                      taking part. The most distinguished members who have
                      achieved a revered status will be given exclusive
                      advantages within the Syncera network, including partner
                      seed rounds, private rounds, airdrops, and other
                      attractive benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            */}
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq7}
                    className={
                      faq4 ? "active btn btn-main" : " btn btn-main faq-bg"
                    }
                  >
                    When will I receive my airdrop?
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq7 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      Get ready for a surprise! As part of our <a href="https://medium.com/@synceraio/syncera-ambassador-program-become-a-champion-17e7df3e7e1f" target="_blank" className="pool-whitelist-link">ambassador campaign</a>, a $SERA airdrop will be delivered to you immediately during the first week of launch. Before the public sale date, which we will announce right after our private sale, we’ll take a snapshot of our Zealy leaderboard to determine <i>who</i> gets the airdrop. So, get your game on and continue to climb the ranks on <a className="pool-whitelist-link" href="https://syncera.zealy.io/" target="_blank">Zealy</a>!
                    </p>
                    {/*
                    <p>
                      <b>
                        The number of SERA tokens you're allocated in our
                        public sale depends on your position in our program,
                        with higher-ranking participants getting a larger
                        allocation.
                      </b>
                    </p>
                    */}
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion">
              <div className="accordion card">
                <div className="card-header">
                  <button
                    type="button"
                    onClick={toggleFaq5}
                    className={
                      faq5 ? "active btn btn-main" : " btn btn-main faq-bg"
                    }
                  >
                    I have a (formal) question for the team?!
                    <span>
                      <svg
                        width={22}
                        height={13}
                        viewBox="0 0 22 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.4366 0.806353L11 8.24302L3.5633 0.806353C2.8158 0.0588525 1.6083 0.0588525 0.860796 0.806353C0.113296 1.55385 0.113296 2.76135 0.860796 3.50885L9.6583 12.3064C10.4058 13.0539 11.6133 13.0539 12.3608 12.3064L21.1583 3.50885C21.9058 2.76135 21.9058 1.55385 21.1583 0.806353C20.4108 0.0780192 19.1841 0.0588525 18.4366 0.806353Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div
                  className={faq5 ? "collapse show" : "collapse "}
                  style={{}}
                >
                  <div className="card-body">
                    <p>
                      Please send an email to{" "}
                      <a
                        href="mailto:support@syncera.io"
                        className="pool-whitelist-link"
                      >
                        support@syncera.io
                      </a>{" "}
                      for your general questions. As for partnership, marketing,
                      or other business-related inquiries, please correspond
                      with{" "}
                      <a
                        href="mailto:business@syncera.io"
                        className="pool-whitelist-link"
                      >
                        business@syncera.io
                      </a>{" "}
                      instead. Finally, for private sale matters, you can reach
                      us through{" "}
                      <a
                        href="mailto:private@syncera.io"
                        className="pool-whitelist-link"
                      >
                        private@syncera.io
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="round-button light large  btn btn-main nop"
              href="https://syncera-io-or-decentralized-ecos.gitbook.io/syncera.io-or-zksync-launchpad/faqs"
              target="_href"
            >
              View all Questions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
