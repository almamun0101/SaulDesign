import React from "react";
import { FaDownload } from "react-icons/fa";

export const Banner = () => {
  return (
    <div className="border-b border-[#EEEEEE1A] ">
      <div className="container">
        <div className="relative">
          <div className="absolute top-60 left-0 hidden lg:block">
            <img src="./Vector1.png" alt="" />
          </div>
          <div className="lg:ml-20 text-thi py-10  lg:pt-[200px] lg:pb-20 lg:flex-row flex-col flex justify-between ">
            <div className="">
              <h1 className="lg:w-[586px] font-bold text-4xl lg:text-[80px] lg:leading-[96px]">
                CREATIVE UI
                <div className="text-sec">DESIGNER</div>
              </h1>
              <div className="flex gap-6 pt-8 text-sm">
                <button className="bg-[#393E46BF] hover:bg-sec rounded-4xl  px-10 py-2">
                  Hire Me
                </button>
                <button className="bg-[#393E46BF] hover:bg-sec rounded-4xl px-10 py-2">
                  <span className="flex lg:gap-3 items-center ">
                    Download CV
                    <FaDownload />
                  </span>
                </button>
              </div>
            </div>
            <div className="img">
              <img src="./banner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
