import React from "react";

export const Works = () => {
  return (
    <div>
      <div className="bg-[url(./BG.png)] py-20 lg:py-50 text-thi">
        <div className="container">
          <div className="">
            <h2 className="font-bold text-4xl py-5">
              My recent <span className="text-sec">works</span>
            </h2>
            <ul className="flex gap-1 lg:gap-6 ">
              <li className="">
                <a
                  href=""
                  className="bg-[#393E46] px-5 py-2 rounded-2xl  hover:bg-sec"
                >
                  All
                </a>
              </li>
              <li className="">
                <a
                  href=""
                  className="bg-[#393E46] px-5 py-2 rounded-2xl  hover:bg-sec"
                >
                  UI
                </a>
              </li>
              <li className="">
                <a
                  href=""
                  className="bg-[#393E46] px-5 py-2 rounded-2xl  hover:bg-sec"
                >
                  UX
                </a>
              </li>
              <li className="">
                <a
                  href=""
                  className="bg-[#393E46] px-5 py-2 rounded-2xl  hover:bg-sec"
                >
                  Web Design
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3  item center mt-15 gap-5">
              <div className="bg-[#393E46]/50 p-10 mx-auto rounded-2xl">
                <img src="./Work1.png" alt="" />
              </div>
              <div className="bg-[#393E46]/50 p-10 mx-auto rounded-2xl">
                <img src="./Work2.png" alt="" />
              </div>
              <div className="bg-[#393E46]/50 p-10 mx-auto rounded-2xl">
                <img src="./Work3.png" alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
