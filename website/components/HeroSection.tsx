import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="container my-24 mt-44 m-auto">
      <h1 className="  text-center text-6xl font-bold leading-[140%] mb-6">
        <span className="bg-clip-text bg-[linear-gradient(90deg,#FFFFFF_46.28%,rgba(255,255,255,0.2)_104.96%)] text-transparent">
          {" "}
          Discover endless possibilities in the world
        </span>
        <span className="bg-clip-text bg-[linear-gradient(90deg,#FFFFFF_46.28%,rgba(255,255,255,0.2)_104.96%)] text-transparent">
          {" "}
          of Trading
        </span>
      </h1>
      <p className="text-[#A6AAB2] text-lg text-center font-medium">
        Step into the world of trading excellence and seize every opportunity
        with our advanced platform, expert guidance, and strategic insights for
        unrivaled financial success.
      </p>
      <ul className="my-10 flex items-center justify-center gap-10">
        <li className="flex items-center gap-1.5 text-lg font-medium text-white">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 35.25L6 25.5L24 7.5L33.75 16.5L16.5 35.25Z"
              fill="url(#paint0_linear_808_8693)"
            />
            <path
              d="M6 25.5L24 7.5"
              stroke="#42FF00"
              stroke-width="2.25"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_808_8693"
                x1="15.78"
                y1="11"
                x2="30.28"
                y2="25.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00FFC2" />
                <stop offset="0.817308" stop-color="#42FF00" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          Fast Trading
        </li>
        <li className="flex items-center gap-1.5 text-lg font-medium text-white">
          {" "}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 9C7.63247 9 9.02187 27 9.02187 27H27V9Z"
              fill="url(#paint0_linear_808_8698)"
            />
            <path
              d="M9.02187 27C9.02187 27 7.63247 9 27 9"
              stroke="#42FF00"
              stroke-width="2.25"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_808_8698"
                x1="15.3438"
                y1="11.2703"
                x2="30.7762"
                y2="38"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00FFC2" />
                <stop offset="0.817308" stop-color="#42FF00" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          Secure & Reliable
        </li>
        <li className="flex items-center gap-1.5 text-lg font-medium text-white">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 28.5C23.799 28.5 28.5 23.799 28.5 18C28.5 12.201 23.799 7.5 18 7.5C12.201 7.5 7.5 12.201 7.5 18C7.5 23.799 12.201 28.5 18 28.5Z"
              fill="url(#paint0_radial_808_8705)"
            />
            <path
              d="M7.5 18C7.5 23.799 12.201 28.5 18 28.5C23.799 28.5 27.45 22.725 27.45 22.725V27.75M28.5 18C28.5 12.201 23.8334 7.5 18 7.5C11 7.5 7.5 13.275 7.5 13.275V8.25"
              stroke="#42FF00"
              stroke-width="2.25"
              stroke-linecap="round"
            />
            <defs>
              <radialGradient
                id="paint0_radial_808_8705"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(18 18) rotate(21.6256) scale(8.47024)"
              >
                <stop stop-color="#00FFC2" />
                <stop offset="1" stop-color="#42FF00" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
          Continuous Market Updates
        </li>
      </ul>
      <div className="flex items-center gap-6 justify-center">
        <Link
          href={"/"}
          className="bg-[linear-gradient(90deg,#00FFC2_0%,#42FF00_100%)] py-4 px-6 rounded-full flex items-center w-fit gap-3 shadow-[0px_16px_32px_-8px_#6AFF417A,0px_4px_8px_0px_#6AFF411F,0px_2px_6px_0px_#6AFF413D,0px_1px_3px_0px_#6AFF413D,1px_1px_2px_0px_#FFFFFF3D_inset] text-lg text-[#030702] font-medium"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 14C3 19 7.02944 23 12 23C16.9706 23 21 19 21 14C21 6.95236 15.4812 2.97072 13.0868 1.5749C12.7855 1.39924 12.6348 1.31141 12.4683 1.33143C12.3348 1.34747 12.1864 1.43872 12.1119 1.55054C12.0188 1.69013 12.0295 1.8695 12.0509 2.22825C12.2471 5.52076 12.7852 12 9.42857 12C7.27186 12 6.92403 10.2804 6.86793 7.56245C6.85825 7.09365 6.85342 6.85925 6.72461 6.7199C6.62106 6.60788 6.4374 6.54269 6.28639 6.56436C6.09856 6.59133 5.96098 6.75375 5.68582 7.07861C4.55088 8.41851 3 10.8295 3 14Z"
              fill="#030702"
            />
          </svg>
          Start Learning
        </Link>
        <Link
          href={"/"}
          className="bg-[linear-gradient(0deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)),radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_100%)] py-4 px-6 rounded-full flex items-center w-fit gap-3  text-white shadow-[0px_0px_0px_1px_#FFFFFF0F_inset,1px_1px_0px_0px_#FFFFFF14_inset,0px_8px_40px_-20px_#FFFFFF33]"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.12"
              d="M4 11H20V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V11Z"
              fill="#42FF00"
            />
            <path
              d="M20 11V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V11M20 11H4M20 11C21.1046 11 22 10.1046 22 9C22 7.89543 21.1046 7 20 7H4C2.89543 7 2 7.89543 2 9C2 10.1046 2.89543 11 4 11M12 7V22M12 7H15.5C16.8807 7 18 5.88071 18 4.5C18 3.11929 16.8807 2 15.5 2H15.4198C14.2803 2 13.2758 2.74741 12.9484 3.83881L12 7ZM12 7H8.5C7.11929 7 6 5.88071 6 4.5C6 3.11929 7.11929 2 8.5 2H8.58023C9.71968 2 10.7242 2.74741 11.0516 3.83881L12 7Z"
              stroke="#42FF00"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Try Demo
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
