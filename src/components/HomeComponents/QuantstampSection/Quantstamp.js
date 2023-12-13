import React from "react";
import "./Quantstamp.css";
const Quantstamp = () => {
  return (
    <section className="quantstamp-section">
      <div className="container">
        <div className="mt-auto row">
          <div className="col">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="tile--with-shadow text-center quantstamp-badge"
            >
              <img
                src="https://firestarter.fi/static/media/link-arrow.8862ae9b.svg"
                className="quantstamp-badge__arrow"
              />
              <h4 className="quantstamp-badge__title">Security By</h4>
              <img
                src="https://firestarter.fi/static/media/logo.a2e4622a.svg"
                alt="Quantstamp"
                className="quantstamp-badge__logo"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quantstamp;
