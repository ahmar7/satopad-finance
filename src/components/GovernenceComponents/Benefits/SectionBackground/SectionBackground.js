import React from 'react';
import './SectionBackground.css'
const SectionBackground = () => {
    return (
      <>
        <svg
          viewBox="0 0 73 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="governance-landing-benefits-rect-angle-1"
        >
          <path d="M49 1H1V49" stroke="#5A5C74" />
          <path d="M11 1H1V11" stroke="white" strokeWidth={2} />
        </svg>
        <svg
          viewBox="0 0 73 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="governance-landing-benefits-rect-angle-2"
        >
          <path d="M24 1H72V49" stroke="#5A5C74" />
          <path d="M62 1H72V11" stroke="white" strokeWidth={2} />
        </svg>

        <svg
          width={11}
          height={21}
          viewBox="0 0 11 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="governance-landing-benefits-rect-angle-5"
        >
          <path
            d="M1 10.5768L1 20.5121M1 10.5768H11M1 10.5768L1 0.641602"
            stroke="#5A5C74"
            strokeWidth={2}
          />
        </svg>
        <svg
          className="governance-landing-benefits-rect-angle-6"
          viewBox="0 0 73 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M49 72H1V24" stroke="#5A5C74" />
          <path d="M11 72H1V62" stroke="white" strokeWidth={2} />
        </svg>
        <svg
          className="governance-landing-benefits-rect-angle-7"
          viewBox="0 0 73 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 72H72V24" stroke="#5A5C74" />
          <path d="M62 72H72V62" stroke="white" strokeWidth={2} />
        </svg>
        <div className="governance-landing-benefits-rect-right">
          ApolloX ecosystem
        </div>
      </>
    );
}

export default SectionBackground;
