import React from 'react';
import './Info.css'
import { Link, NavLink } from "react-router-dom";
const Info = () => {
    return (
      <div className="governance-landing-explore-info">
        <a
          data-bn-type="link"
          className="governance-landing-explore-column css-9wj43q"
        >
          <img
            src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-explore-1-pc.svg"
            className="governance-landing-explore-column-header governance-landing-explore-column-header-1 css-lviolc"
          />
          <img
            src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-explore-1-pad.svg"
            className="governance-landing-explore-column-header governance-landing-explore-column-header-1 css-1o7k3ca"
          />
          <img
            src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-explore-1-mobile.svg"
            className="governance-landing-explore-column-header governance-landing-explore-column-header-1 css-19vob4g"
          />
          <div className="governance-landing-explore-column-body">
            <svg
              width={103}
              height={24}
              viewBox="0 0 103 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.66667 10.6667L13.4299 3.14024C13.5591 2.88186 13.2426 2.63119 13.0207 2.81612L1.13166 12.7236C0.748454 13.043 0.974267 13.6667 1.47309 13.6667H7.66667L4.46731 20.9379C4.35329 21.1971 4.66839 21.4319 4.8841 21.2485L16.2278 11.6064C16.6059 11.285 16.3786 10.6667 15.8824 10.6667H9.66667Z"
                fill="#F3B04E"
              />
              <path
                d="M29.5861 14.4344C29.5861 14.2254 29.5308 14.0379 29.4202 13.8719C29.3095 13.706 29.1005 13.5553 28.7931 13.4201C28.4919 13.2787 28.0493 13.1465 27.4652 13.0236C26.9488 12.9129 26.4724 12.7746 26.0359 12.6086C25.5995 12.4426 25.2245 12.2428 24.9109 12.0092C24.5974 11.7695 24.3515 11.4898 24.1732 11.1701C24.0011 10.8443 23.915 10.4693 23.915 10.0451C23.915 9.63321 24.0042 9.24591 24.1824 8.8832C24.3607 8.51435 24.6189 8.19161 24.957 7.91497C25.2952 7.63218 25.707 7.41087 26.1927 7.25103C26.6784 7.08505 27.2255 7.00205 27.8341 7.00205C28.6825 7.00205 29.4109 7.14037 30.0195 7.41701C30.6343 7.69365 31.1046 8.0748 31.4304 8.56046C31.7562 9.03997 31.9191 9.58095 31.9191 10.1834H29.4847C29.4847 9.91907 29.4232 9.67931 29.3003 9.46415C29.1835 9.24898 29.0021 9.07685 28.7562 8.94775C28.5103 8.81251 28.1999 8.74488 27.8249 8.74488C27.4868 8.74488 27.2009 8.80021 26.9673 8.91087C26.7398 9.02152 26.5677 9.16599 26.4509 9.34427C26.3341 9.52255 26.2757 9.71927 26.2757 9.93444C26.2757 10.0943 26.3064 10.2387 26.3679 10.3678C26.4355 10.4908 26.5431 10.6045 26.6907 10.709C26.8382 10.8135 27.038 10.9088 27.29 10.9949C27.5482 11.081 27.8648 11.1639 28.2398 11.2439C28.9837 11.3914 29.6323 11.5881 30.1855 11.834C30.745 12.0738 31.1814 12.3935 31.495 12.793C31.8085 13.1926 31.9652 13.7029 31.9652 14.3238C31.9652 14.7664 31.87 15.1721 31.6794 15.541C31.4888 15.9037 31.2122 16.2203 30.8495 16.4908C30.4868 16.7613 30.0534 16.9734 29.5493 17.1271C29.0452 17.2746 28.4765 17.3484 27.8433 17.3484C26.9273 17.3484 26.1527 17.1855 25.5195 16.8597C24.8863 16.5277 24.4068 16.1096 24.081 15.6055C23.7552 15.0953 23.5923 14.5666 23.5923 14.0195H25.9253C25.9437 14.4068 26.0482 14.7172 26.2388 14.9508C26.4294 15.1844 26.6691 15.3535 26.9581 15.458C27.2532 15.5564 27.5636 15.6055 27.8894 15.6055C28.2583 15.6055 28.5687 15.5564 28.8208 15.458C29.0728 15.3535 29.2634 15.2152 29.3925 15.043C29.5216 14.8648 29.5861 14.6619 29.5861 14.4344Z"
                fill="#F3B04E"
              />
              <path
                d="M36.2071 9.31661V17.164H33.7726V7.18648H36.0595L36.2071 9.31661ZM35.8198 11.8156H35.1005C35.1066 11.0902 35.205 10.4324 35.3956 9.84222C35.5862 9.25206 35.8536 8.74488 36.1978 8.3207C36.5482 7.89652 36.9632 7.5707 37.4427 7.34324C37.9222 7.11578 38.4571 7.00205 39.0472 7.00205C39.5267 7.00205 39.9601 7.06968 40.3474 7.20492C40.7347 7.34017 41.0667 7.55533 41.3433 7.85042C41.6261 8.1455 41.8413 8.53279 41.9888 9.0123C42.1425 9.48566 42.2194 10.0697 42.2194 10.7644V17.164H39.7665V10.7459C39.7665 10.291 39.6989 9.93136 39.5636 9.66702C39.4345 9.40267 39.2439 9.21517 38.9919 9.10452C38.746 8.99386 38.4417 8.93853 38.079 8.93853C37.704 8.93853 37.3751 9.01538 37.0923 9.16907C36.8157 9.31661 36.5821 9.52255 36.3915 9.78689C36.2071 10.0512 36.0657 10.3555 35.9673 10.6998C35.8689 11.0441 35.8198 11.416 35.8198 11.8156Z"
                fill="#F3B04E"
              />
              <path
                d="M49.8638 15.043V10.4416C49.8638 10.1035 49.8054 9.81148 49.6886 9.56558C49.5718 9.31968 49.3936 9.12911 49.1538 8.99386C48.914 8.85861 48.6097 8.79099 48.2409 8.79099C47.9151 8.79099 47.6292 8.84632 47.3833 8.95697C47.1435 9.06763 46.9591 9.22439 46.83 9.42726C46.7009 9.62398 46.6364 9.85144 46.6364 10.1096H44.1927C44.1927 9.69775 44.2911 9.30739 44.4878 8.93853C44.6845 8.56353 44.9642 8.23156 45.3269 7.94263C45.6958 7.64755 46.1353 7.41701 46.6456 7.25103C47.162 7.08505 47.7399 7.00205 48.3792 7.00205C49.1354 7.00205 49.8085 7.13115 50.3987 7.38935C50.995 7.6414 51.4622 8.02255 51.8003 8.53279C52.1446 9.04304 52.3167 9.68546 52.3167 10.4601V14.8125C52.3167 15.3105 52.3475 15.7377 52.4089 16.0943C52.4765 16.4447 52.5749 16.749 52.704 17.0072V17.164H50.2235C50.1067 16.9119 50.0175 16.5922 49.9561 16.2049C49.8946 15.8115 49.8638 15.4242 49.8638 15.043ZM50.205 11.0871L50.2235 12.5348H48.6835C48.3024 12.5348 47.9673 12.5748 47.6784 12.6547C47.3895 12.7285 47.1528 12.8392 46.9683 12.9867C46.7839 13.1281 46.6456 13.3002 46.5534 13.5031C46.4612 13.6998 46.4151 13.9242 46.4151 14.1762C46.4151 14.4221 46.4704 14.6435 46.581 14.8402C46.6979 15.0369 46.8638 15.1937 47.079 15.3105C47.3003 15.4211 47.5585 15.4765 47.8536 15.4765C48.2839 15.4765 48.6589 15.3904 48.9786 15.2183C49.2983 15.04 49.5472 14.8248 49.7255 14.5728C49.9038 14.3207 49.9991 14.081 50.0114 13.8535L50.7122 14.9047C50.6261 15.1568 50.497 15.4242 50.3249 15.707C50.1528 15.9898 49.9315 16.2541 49.661 16.5C49.3905 16.7459 49.0647 16.9488 48.6835 17.1086C48.3024 17.2685 47.8597 17.3484 47.3556 17.3484C46.7101 17.3484 46.1323 17.2193 45.622 16.9611C45.1118 16.7029 44.7091 16.3494 44.414 15.9006C44.119 15.4519 43.9714 14.9416 43.9714 14.3699C43.9714 13.8412 44.0698 13.374 44.2665 12.9683C44.4632 12.5625 44.7552 12.2213 45.1425 11.9447C45.5298 11.6619 46.0093 11.4498 46.581 11.3084C47.1589 11.1609 47.8198 11.0871 48.5636 11.0871H50.205Z"
                fill="#F3B04E"
              />
              <path
                d="M56.9458 9.10452V21H54.5022V7.18648H56.7614L56.9458 9.10452ZM63.3546 12.0738V12.2674C63.3546 12.9928 63.2686 13.666 63.0964 14.2869C62.9305 14.9017 62.6846 15.4396 62.3587 15.9006C62.0329 16.3556 61.6272 16.7121 61.1415 16.9703C60.662 17.2224 60.1087 17.3484 59.4817 17.3484C58.8669 17.3484 58.3321 17.2316 57.8772 16.998C57.4223 16.7582 57.038 16.4201 56.7245 15.9836C56.411 15.5471 56.1589 15.04 55.9684 14.4621C55.7839 13.8781 55.6456 13.2418 55.5534 12.5533V11.9355C55.6456 11.2039 55.7839 10.54 55.9684 9.94366C56.1589 9.3412 56.411 8.82173 56.7245 8.38525C57.038 7.94263 57.4192 7.60144 57.8679 7.36169C58.3229 7.12193 58.8546 7.00205 59.4632 7.00205C60.0964 7.00205 60.6528 7.12193 61.1323 7.36169C61.618 7.60144 62.0268 7.9457 62.3587 8.39447C62.6907 8.84325 62.9397 9.37808 63.1057 9.99899C63.2716 10.6199 63.3546 11.3115 63.3546 12.0738ZM60.911 12.2674V12.0738C60.911 11.6312 60.871 11.2223 60.7911 10.8473C60.7112 10.4662 60.5882 10.1342 60.4223 9.85144C60.2563 9.56251 60.0411 9.33812 59.7768 9.17829C59.5124 9.01845 59.1927 8.93853 58.8177 8.93853C58.4427 8.93853 58.12 9.00001 57.8495 9.12296C57.579 9.24591 57.3577 9.42112 57.1856 9.64857C57.0134 9.87603 56.8782 10.1465 56.7798 10.4601C56.6876 10.7674 56.6261 11.1086 56.5954 11.4836V13.0144C56.6507 13.4693 56.7583 13.8781 56.9182 14.2408C57.078 14.6035 57.3116 14.8924 57.619 15.1076C57.9325 15.3228 58.3382 15.4303 58.8362 15.4303C59.2112 15.4303 59.5309 15.3474 59.7952 15.1814C60.0596 15.0154 60.2747 14.7879 60.4407 14.499C60.6067 14.2039 60.7266 13.8658 60.8003 13.4846C60.8741 13.1035 60.911 12.6978 60.911 12.2674Z"
                fill="#F3B04E"
              />
              <path
                d="M70.621 14.4344C70.621 14.2254 70.5657 14.0379 70.4551 13.8719C70.3444 13.706 70.1354 13.5553 69.828 13.4201C69.5268 13.2787 69.0842 13.1465 68.5001 13.0236C67.9837 12.9129 67.5073 12.7746 67.0708 12.6086C66.6344 12.4426 66.2594 12.2428 65.9458 12.0092C65.6323 11.7695 65.3864 11.4898 65.2081 11.1701C65.036 10.8443 64.9499 10.4693 64.9499 10.0451C64.9499 9.63321 65.0391 9.24591 65.2173 8.8832C65.3956 8.51435 65.6538 8.19161 65.9919 7.91497C66.3301 7.63218 66.7419 7.41087 67.2276 7.25103C67.7132 7.08505 68.2604 7.00205 68.869 7.00205C69.7174 7.00205 70.4458 7.14037 71.0544 7.41701C71.6692 7.69365 72.1395 8.0748 72.4653 8.56046C72.7911 9.03997 72.954 9.58095 72.954 10.1834H70.5196C70.5196 9.91907 70.4581 9.67931 70.3352 9.46415C70.2184 9.24898 70.037 9.07685 69.7911 8.94775C69.5452 8.81251 69.2348 8.74488 68.8598 8.74488C68.5216 8.74488 68.2358 8.80021 68.0022 8.91087C67.7747 9.02152 67.6026 9.16599 67.4858 9.34427C67.369 9.52255 67.3106 9.71927 67.3106 9.93444C67.3106 10.0943 67.3413 10.2387 67.4028 10.3678C67.4704 10.4908 67.578 10.6045 67.7255 10.709C67.8731 10.8135 68.0729 10.9088 68.3249 10.9949C68.5831 11.081 68.8997 11.1639 69.2747 11.2439C70.0186 11.3914 70.6671 11.5881 71.2204 11.834C71.7799 12.0738 72.2163 12.3935 72.5299 12.793C72.8434 13.1926 73.0001 13.7029 73.0001 14.3238C73.0001 14.7664 72.9049 15.1721 72.7143 15.541C72.5237 15.9037 72.2471 16.2203 71.8844 16.4908C71.5217 16.7613 71.0883 16.9734 70.5842 17.1271C70.0801 17.2746 69.5114 17.3484 68.8782 17.3484C67.9622 17.3484 67.1876 17.1855 66.5544 16.8597C65.9212 16.5277 65.4417 16.1096 65.1159 15.6055C64.7901 15.0953 64.6272 14.5666 64.6272 14.0195H66.9602C66.9786 14.4068 67.0831 14.7172 67.2737 14.9508C67.4643 15.1844 67.704 15.3535 67.993 15.458C68.288 15.5564 68.5985 15.6055 68.9243 15.6055C69.2932 15.6055 69.6036 15.5564 69.8557 15.458C70.1077 15.3535 70.2983 15.2152 70.4274 15.043C70.5565 14.8648 70.621 14.6619 70.621 14.4344Z"
                fill="#F3B04E"
              />
              <path
                d="M77.242 3V17.164H74.7983V3H77.242ZM76.8547 11.8156H76.1354C76.1354 11.1209 76.2276 10.4816 76.412 9.89755C76.5965 9.31353 76.8577 8.80636 77.1958 8.37603C77.534 7.93956 77.9366 7.60144 78.4038 7.36169C78.8772 7.12193 79.3997 7.00205 79.9715 7.00205C80.4633 7.00205 80.909 7.07275 81.3086 7.21415C81.7143 7.34939 82.0616 7.56763 82.3506 7.86886C82.6395 8.17009 82.8608 8.56353 83.0145 9.04919C83.1743 9.5287 83.2543 10.1127 83.2543 10.8012V17.164H80.8014V10.7828C80.8014 10.3217 80.7338 9.95903 80.5985 9.69468C80.4633 9.42419 80.2696 9.23054 80.0176 9.11374C79.7717 8.99693 79.4674 8.93853 79.1047 8.93853C78.7112 8.93853 78.3731 9.01538 78.0903 9.16907C77.8075 9.31661 77.5739 9.52255 77.3895 9.78689C77.2112 10.0512 77.076 10.3555 76.9838 10.6998C76.8977 11.0441 76.8547 11.416 76.8547 11.8156Z"
                fill="#F3B04E"
              />
              <path
                d="M84.9694 12.2767V12.083C84.9694 11.3514 85.0739 10.6783 85.2829 10.0635C85.492 9.44263 85.7963 8.90472 86.1959 8.4498C86.5955 7.99488 87.0842 7.6414 87.662 7.38935C88.2399 7.13115 88.8977 7.00205 89.6354 7.00205C90.3854 7.00205 91.0493 7.13115 91.6272 7.38935C92.2112 7.6414 92.703 7.99488 93.1026 8.4498C93.5022 8.90472 93.8065 9.44263 94.0155 10.0635C94.2246 10.6783 94.3291 11.3514 94.3291 12.083V12.2767C94.3291 13.0021 94.2246 13.6752 94.0155 14.2961C93.8065 14.9109 93.5022 15.4488 93.1026 15.9099C92.703 16.3648 92.2143 16.7183 91.6364 16.9703C91.0586 17.2224 90.3977 17.3484 89.6539 17.3484C88.9162 17.3484 88.2553 17.2224 87.6713 16.9703C87.0873 16.7183 86.5955 16.3648 86.1959 15.9099C85.7963 15.4488 85.492 14.9109 85.2829 14.2961C85.0739 13.6752 84.9694 13.0021 84.9694 12.2767ZM87.4039 12.083V12.2767C87.4039 12.7131 87.4469 13.1219 87.533 13.5031C87.619 13.8842 87.7512 14.2193 87.9295 14.5082C88.1077 14.7971 88.3383 15.0246 88.6211 15.1906C88.91 15.3504 89.2543 15.4303 89.6539 15.4303C90.0473 15.4303 90.3854 15.3504 90.6682 15.1906C90.951 15.0246 91.1815 14.7971 91.3598 14.5082C91.5442 14.2193 91.6795 13.8842 91.7655 13.5031C91.8516 13.1219 91.8946 12.7131 91.8946 12.2767V12.083C91.8946 11.6527 91.8516 11.25 91.7655 10.875C91.6795 10.4939 91.5442 10.1588 91.3598 9.86989C91.1815 9.5748 90.9479 9.34427 90.659 9.17829C90.3762 9.00616 90.035 8.92009 89.6354 8.92009C89.242 8.92009 88.9039 9.00616 88.6211 9.17829C88.3383 9.34427 88.1077 9.5748 87.9295 9.86989C87.7512 10.1588 87.619 10.4939 87.533 10.875C87.4469 11.25 87.4039 11.6527 87.4039 12.083Z"
                fill="#F3B04E"
              />
              <path
                d="M100.821 7.18648V8.93853H95.1037V7.18648H100.821ZM96.6344 4.73361H99.078V14.2869C99.078 14.582 99.118 14.8094 99.1979 14.9693C99.2778 15.1291 99.3977 15.2367 99.5576 15.292C99.7174 15.3474 99.908 15.375 100.129 15.375C100.289 15.375 100.437 15.3658 100.572 15.3474C100.707 15.3289 100.821 15.3105 100.913 15.292L100.922 17.1178C100.719 17.1855 100.489 17.2408 100.231 17.2838C99.9787 17.3269 99.6928 17.3484 99.3731 17.3484C98.826 17.3484 98.3465 17.2562 97.9346 17.0717C97.5227 16.8812 97.203 16.5769 96.9756 16.1588C96.7481 15.7346 96.6344 15.1752 96.6344 14.4805V4.73361Z"
                fill="#F3B04E"
              />
            </svg>
            <div className="css-1pfzarz">
              <div data-bn-type="text" className="css-1nkmste">
                Vote for Proposal
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="governance-landing-page-explore-link css-1l1o9sq"
              >
                <path
                  d="M11 5.00008C10.4477 5.00009 9.99999 5.4478 9.99999 6.00008C9.99999 6.55237 10.4477 7.00009 11 7.00008L15.5861 7L7.21385 15.2929C6.82015 15.6829 6.81864 16.3186 7.21047 16.7105C7.59968 17.0997 8.23024 17.1012 8.6213 16.7138L17.0004 8.41411L17.0011 13.0001C17.0012 13.5523 17.4489 14 18.0011 14C18.5534 14 19.0012 13.5522 19.0011 12.9999L19.0005 5.99992C19.0004 5.44767 18.5527 5 18.0005 5.00001L11 5.00008Z"
                  fill="#72768F"
                />
              </svg>
            </div>
            <div data-bn-type="text" className="css-6m2dln">
              Create proposals and cast your votes via a simple interface.
            </div>
          </div>
        </a>
        <Link to="/staking"
          data-bn-type="link"
          className="governance-landing-explore-column css-9wj43q"
        >
          <img
            src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-explore-2-pc.svg"
            className="governance-landing-explore-column-header css-lviolc"
          />
          <img
            src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-explore-2-pad.svg"
            className="governance-landing-explore-column-header css-1o7k3ca"
          />
          <img
            src="https://static.apollox.com/cloud-futures/static/images/futures/assets/dex/governance/landing-explore-2-mobile.svg"
            className="governance-landing-explore-column-header css-19vob4g"
          />
          <div className="governance-landing-explore-column-body">
            <div className="css-1a7gyaj">
              <div data-bn-type="text" className="css-1nkmste">
                Lock &amp; Get xSATO
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="governance-landing-page-explore-link css-rqidb6"
              >
                <path d="M13.293 16.879a1 1 0 001.414 1.414l5.586-5.586a1 1 0 000-1.414l-5.586-5.586a1 1 0 10-1.414 1.414l3.879 3.88H4a1 1 0 100 2h13.172l-3.88 3.878z" />
              </svg>
            </div>
            <div data-bn-type="text" className="css-6m2dln">
              Harness voting power when you lock SATO. You also earn additional
              SATO rewards.
            </div>
          </div>
        </Link>
      </div>
    );
}

export default Info;
