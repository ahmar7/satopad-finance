import React, { useState } from "react";
import "./DetailSwitch.css";
const DetailSwitch = (props) => {
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="flex space-x-1 mb-[30px] bg-theme border-b-[1px] border-solid border-solanium-bright-blue border-opacity-40 sm:rounded-full sm:bg-blue-600 sm:bg-opacity-10 sm:p-1 sm:border-none"
    >
      <button
        onClick={props.InfoTrue}
        className="w-full text-xs leading-5 text-blue-600 uppercase whitespace-nowrap first:text-left last:text-right disabled:text-opacity-20 sm:text-sm sm:font-poppins-bold sm:!text-center outline-none"
        id="headlessui-tabs-tab-1"
        role="tab"
        aria-selected="true"
        tabIndex={0}
        type="button"
        aria-controls="headlessui-tabs-panel-4"
      >
        <span
          className={
            props.activeInfo
              ? "inline-block btn-activated sm:w-full h-full py-2.5 sm:rounded-full border-b-2 border-solid pb-0 border-solanium-bright-blue font-poppins-bold sm:bg-white sm:border-none"
              : "inline-block sm:w-full h-full py-2.5 sm:rounded-full hover:bg-white/[0.12]"
          }
        >
          Project info
        </span>
      </button>
      {/*
      <button
        onClick={props.whiteListTrue}
        className="w-full text-xs leading-5 text-blue-600 uppercase whitespace-nowrap first:text-left last:text-right disabled:text-opacity-20 sm:text-sm sm:font-poppins-bold sm:!text-center outline-none tab-deactivated"
        id="headlessui-tabs-tab-2"
        role="tab"
        aria-selected="false"
        tabIndex={-1}
        type="button"
        aria-controls="headlessui-tabs-panel-5"
      >
        <span
          className={
            props.activeWhitlist
              ? "inline-block btn-activated sm:w-full h-full py-2.5 sm:rounded-full border-b-2 border-solid pb-0 border-solanium-bright-blue font-poppins-bold sm:bg-white sm:border-none"
              : "inline-block sm:w-full h-full py-2.5 sm:rounded-full hover:bg-white/[0.12]"
          }
        >
          Whitelist
        </span>
      </button>
      */}
      <button
        onClick={props.SaleTrue}
        // className="w-full text-xs leading-5 text-blue-600 uppercase whitespace-nowrap first:text-left last:text-right disabled:text-opacity-20 sm:text-sm sm:font-poppins-bold sm:!text-center outline-none tab-deactivated"
        className="w-full text-xs leading-5 text-blue-600 uppercase whitespace-nowrap first:text-left last:text-right disabled:text-opacity-20 sm:text-sm sm:font-poppins-bold sm:!text-center outline-none"
        id="headlessui-tabs-tab-3"
        role="tab"
        aria-selected="false"
        tabIndex={-1}
        type="button"
        aria-controls="headlessui-tabs-panel-6"
      >
        <span
          className={
            props.activeSale
              ? "inline-block btn-activated sm:w-full h-full py-2.5 sm:rounded-full border-b-2 border-solid pb-0 border-solanium-bright-blue font-poppins-bold sm:bg-white sm:border-none"
              : "inline-block sm:w-full h-full py-2.5 sm:rounded-full hover:bg-white/[0.12]"
          }
        >
          Participate {/*<span className="fcfs-emphasis">All Users</span>*/}
        </span>
      </button>
    </div>
  );
};

export default DetailSwitch;
