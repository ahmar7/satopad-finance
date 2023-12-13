import React, { useState, useEffect } from "react";
import ethIcon from "../../../../assets/img/eth-icon.png";
import SynceraIcon from "../../../../assets/img/Syncera-LogoCoin.png";
 
import { ethers } from "ethers";
import axios from 'axios';

const PriceBox = () => {
  const wallet = "abc"
  const [walletAddress, setWalletAddress] = useState(null);

  const [myEthAmount, setMyETHAmount] = useState(0);
  const [myTokenAmount, setMyTokenAmount] = useState(0);

  useEffect(async () => {
    if (wallet.account) {
      if (walletAddress === null || wallet.account !== walletAddress) {
        setWalletAddress(wallet.account);

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
      setMyETHAmount(0);
      setMyTokenAmount(0);
    }
  }, [wallet]);

  return (
    <div className="bg-[#000B45] w-full top-30px px-5 py-6 text-white rounded-solaniumDefault flex flex-col lg:sticky lg:p-30px pool-bg-color bg-price-box">
      <div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <span className="text-sm text-[#11E1CF] font-inter-bold mb-1 font-weight-bold details-head">
              Current Status
            </span>
            <span>
              <b className="text-3xl font-inter-bold mr-2">Phase 1</b>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#11E1CF] font-inter-bold mb-1 font-weight-bold details-head">
              $SERA Price
            </span>
            <span>
              <b className="text-3xl font-inter-bold mr-2">0.000028</b>
              <span>ETH</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#11E1CF] font-inter-bold mb-1 font-weight-bold details-head">
              Your Allocation
            </span>
            <span>
              <b className="text-3xl font-inter-bold mr-2">10</b>
              <span>ETH</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#11E1CF] font-inter-bold mb-1 font-weight-bold details-head">
              Circ. Market Cap
            </span>
            <span>
              <b className="text-3xl font-inter-bold mr-2 unlock-text">$491,400</b>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#11E1CF] font-inter-bold mb-1 details-head allocation-details">
              Your Purchase History
            </span>
            <div className="allocation-details-text">
              <span>
                <b className="font-inter-bold mr-2 unlock-text"> <img src={ethIcon} className="h-6 w-6" alt="" />&nbsp; Contributed ETH</b>
              </span>
              <span>
                <b className="font-inter-bold mr-2 unlock-text">{parseFloat(myEthAmount).toFixed(2)}</b>
              </span>
            </div>
            <div className="allocation-details-text space-end">
              <span>
                <b className="font-inter-bold mr-2 unlock-text sera-count"><img src={SynceraIcon} className="syncera-token-icon" alt="" /> {parseFloat(myTokenAmount).toFixed(2)} SERA</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceBox;
