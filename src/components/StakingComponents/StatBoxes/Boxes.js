import React from 'react';
import './Boxes.css'
import './Boxes.css'
const Boxes = () => {
    return (
      <div>
        <div>
          <dl className="rounded-lg grid grid-cols-1 sm:grid-cols-4 pe-3 ps-3 gap-4 lg:gap-8">
            <div className="flex flex-col syncera-box">
              <dt className="stat-label">Your Total Stake:</dt>
              <dd className="stat-value">
                <span className="mr-2">0</span>
                <span className="font-poppins d-inline text-xl inline-block md:block lg:inline-block">
                  xSATO
                </span>
                <p className="mt-2 text-xs text-[#4E3E7D] opacity-40 font-poppins">
                  {" "}
                  0 SATO staked{" "}
                </p>
              </dd>
            </div>
            <div className="flex flex-col syncera-box">
              <dt className="stat-label">Staker's APY:</dt>
              <dd className="stat-value">
                <div className="flex justify-between flex-col lg:flex-row">
                  <div>
                    <div className="flex items-end">
                      <span>TBD</span>
                      <span className="font-poppins text-xl ml-1 inline-block md:block lg:inline-block">
                        %
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-[#4E3E7D] opacity-40 font-poppins">
                      {" "}
                      All platform and pool fees will be distributed to xSATO holders. Higher tiers enjoy greater rewards.
                    </div>
                  </div>
                  <div className="flex items-end">{/**/}</div>
                </div>
              </dd>
            </div>
            <div className="flex flex-col syncera-box">
              <dt className="stat-label">Your Tier:</dt>
              <dd className="stat-value">
                <span>Tier 0</span>
                <div className="mt-2 text-xs text-[#4E3E7D] opacity-40 font-poppins">
                  0 Tickets
                </div>
              </dd>
            </div>
            <div className="flex flex-col syncera-box">
              <dt className="stat-label">Remaining Days:</dt>
              <dd className="stat-value">
                <div className="flex justify-between flex-col lg:flex-row">
                  <div>
                    <div className="flex items-end">
                      <span>0</span>
                      <span className="font-poppins text-xl ml-1 inline-block md:block lg:inline-block">
                        days
                      </span>
                    </div>
                    <div className="mt-2 text-xs text-[#4E3E7D] opacity-40 font-poppins">
                      {" "}
                      No unlock date{" "}
                    </div>
                  </div>
                  <div className="flex items-end">{/**/}</div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    );
}

export default Boxes;
