import React from "react";
import "./Description.css";
import Feature1 from "../../../assets/img/defi-solutions.png";
import Feature2 from "../../../assets/img/introducing-syncera.png";
import Feature3 from "../../../assets/img/key-features.png";
const Description = () => {
  return (
    <section className="description-section">
      <div className="bZBINf">
        <div className=" liREcv  iYGvXj  dkXQFz">
          <div className=" gCcOPY  hJcZlk  cYolYl">
            <div className=" fYUrZj  lhAFlZ  gVhNTd">
              <h2 className=" cfrnQw  bHSmrD">Get to Know Syncera</h2>
            </div>
          </div>
        </div>
        <div display="grid" className=" gwGqFO  djjlrX">
          <button type="button" className=" no-border leEJeg btn-no-click">
            <div className=" frFRbQ">
              <h2 className=" dGTfCo  jfRZuw">
                {/*
                <div className=" jYEhWf  iYGvXj  bPzHKd">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" ffRWyw"
                  >
                    <path
                      d="M8 .333A7.667 7.667 0 1015.667 8 7.675 7.675 0 008 .333zm3.502 7.954l-5.666 3.334a.335.335 0 01-.503-.288V4.667a.333.333 0 01.503-.288l5.666 3.334a.333.333 0 010 .574z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                */}
                DeFi Solutions for zkSync
              </h2>
              <p className=" ergcSf hOLKbL">
                <span>
                  <span>
                    <span>
                      Syncera's objective goes beyond serving solely as a
                      launchpad platform for zkSync. It is creating a
                      comprehensive DeFi ecosystem that includes a range of
                      solutions to assist projects and investors in securely
                      launching and managing their decentralized finances, all
                      within a single entity…{" "}
                    </span>
                  </span>
                </span>
              </p>
            </div>
            <span className="rotate-bg">
              <img
                src={Feature1}
                className=" tGjYN how-to-buy"
              />
              <noscript />
            </span>
          </button>
          <div className=" fYUrZj  ykcDz 0 cJebuI">
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://medium.com/@synceraio/introducing-syncera-io-the-first-community-driven-ido-platform-on-zksync-e001498b2793"
              className=" guNyXw"
            >
              <h2 className=" kSxSwY  kFGeBv">
                Introducing Syncera.io | The First Community-Driven IDO Platform
                on zkSync
              </h2>
              <span className="rotate-bg">
                <img
                  src={Feature2}
                  className="how-to-buy cfFUvJ"
                />
                <noscript />
              </span>
            </a>
            <a href="https://medium.com/@synceraio/syncera-launchpad-introducing-key-features-and-functions-b45825bcb7fa"
              target="_blank"
              rel="noopener noreferrer nofollow"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-2"
              data-state="closed"
              className=" guNyXw no-border"
            >
              <h2 className=" kSxSwY   kFGeBv">
                What are the key features and functions of the Syncera IDO
                launchpad?
              </h2>
              <span className="rotate-bg">
                <img
                  src={Feature3}
                  className="how-to-buy cfFUvJ"
                />
                <noscript />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="cvDLAX">
        <div className="dPaxIe ykcDz lglmHD">
          <div className="cgQZeg faFXTz dOwoXE">
            <p className="kmtZwL cwNaQj">Never want to miss an IDO?</p>
            <h2 className="cTTTua cDqZXm">
              Sign up for our newsletter to receive the <i>latest</i> news and
              updates!
            </h2>
          </div>
          <form className="gVoQB fTdEJq ">
            <div className="dHJHIB">
              <div className="idiTLw">
                <input
                  required
                  placeholder="Email Address"
                  type="email"
                  className="hXCqXZ daBJUU"
                />
              </div>
              <p className="bAkqOa bIYjMb" />
            </div>
            <div className="lboMJD bISvNz">
              <button
                disabled
                value="Subscribe"
                type="submit"
                className="gvIMFB fobaUy bPwuUC"
              >
                <div>Subscribe</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Description;
