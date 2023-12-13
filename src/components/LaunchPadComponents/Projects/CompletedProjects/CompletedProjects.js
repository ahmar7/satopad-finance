import React from "react";
import "./CompletedProjects.css";
import btcIcon from "../../../../assets/img/btc-icon.png";
import { Link } from "react-router-dom";
const CompletedProjects = () => {
  return (
    <>
      <div className="projects-section mt-14 containerer">
        <p className="text-center">
          <span className="uppercase font-semibold text-xl">
            Completed projects
          </span>
          <br />
          <span className="text-white/60">(Finished Pools)</span>
        </p>
        <div className="mt-4">
          <div className="g-4 row">
            <div className="col-md-6">
              <div className="w-full max-w-[580px] shadow-md rounded-solaniumDefault hover hover:shadow-xl transition-all duration-500 bg-white project-bg-color">
                <span className="w-full no-decor card-bg h-full">
                  <div className="flex absolute flex-row-reverse w-full max-w-[580px]">
                    <div className="rounded-lg bg-[#2047F4] h-10 w-10 flex z-30  lop-mar border-2 border-[#ffffff]">
                      <i class="fa-sharp fa-solid fa-shield-halved syncera-shield"></i>
                    </div>
                  </div>
                  <div className="rounded-t-solaniumDefault bg-con2 h-[180px] bg-center bg-no-repeat bg-cover"></div>
                  <div className="content pet-5 pex-5 sm:pt-30px sm:px-30px">
                    <div className="flex flex-col meb-4 justify-between sm:flex-row sm:mb-8">
                      <span className="projects-pool-header block font-poppins-bold text-xl sm:text-[40px]">
                        $SATO Seed
                      </span>
                      <span className="projects-pool-tags block text-[#6376AE] text-sm">
                        DeFi, Launchpad
                      </span>
                    </div>
                    <span className="projects-pool-sub block font-poppins-bold text-sm mb-7 sm:line-clamp-1 leading-6 sm:mb-[10px] sm:text-base">
                      Unlock Bitcoin's full potential with SatoPAD
                    </span>
                    <span className="def-height projects-pool-content pb-pool leading-[26px] text-sm hide-para sm:line-clamp-3">
                      SatoPAD is revolutionizing Bitcoin's ecosystem by blending security, transparency, and ease of use, making DeFi accessible to  newcomers and seasoned investors alike, fostering the next wave of financial innovation.
                    </span>
                  </div>
                </span>
                <div className="peb-5 bot-pad pex-5 flex flex-col gaep-5 sm:flex-row-reverse sm:items-center sm:justify-between sm:pb-30px sm:px-30px">
                  <div>
                    <div>
                      <div className="flex gap-[10px]">
                        <a
                          href="https://syncera.io/"
                          target="_blank"
                          className="h-full hover:opacity-80"
                        >
                          <i class="fas fa-globe social-icon"></i>
                        </a>
                        <a
                          href="https://twitter.com/Syncera_io"
                          target="_blank"
                          className="h-full hover:opacity-80"
                        >
                          <i class="fa-brands fa-twitter social-icon"></i>
                        </a>
                        <a
                          href="https://discord.com/invite/e2XcjF5zX8"
                          target="_blank"
                          className="h-full hover:opacity-80"
                        >
                          <i class="fa-brands fa-telegram social-icon"></i>
                        </a>        
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={btcIcon} className="h-6 w-6" alt="" />
                    <span className="projects-pool-amount font-inter-bold block text-3xl">
                      10
                    </span>
                  </div>
                </div>
                <div className="w-full rounded-bl-solaniumDefault rounded-br-solaniumDefault inline-flex items-center justify-center h-9 gap-1 text-xs text-black bg-notification">
                  <b className="font-poppins-bold projects-pool-status">
                    IDO has sold out.
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletedProjects;
