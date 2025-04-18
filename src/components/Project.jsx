import React from "react";
import { IoIosSend } from "react-icons/io";

const Project = () => {
  return (
    <div>
      <div className="bg-pri py-30">
        <div className="container text-white text-left">
          <div className="relative lg:py-40">
            <div className="hidden lg:block">
              <div className="absolute  top-80 left-0">
                <img src="./Vector5.png" alt="" />
              </div>
              <div className="absolute top-0 right-70">
                <img src="./Vector6.png" alt="" />
              </div>
              <div className="absolute bottom-0 right-0">
                <img src="./Vector7.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between lg:pt-30 ">
              <div className="flex flex-col items-center gap-5">
                <h2 className="font-extrabold lg:w-120 text-4xl lg:text-6xl">
                  Got a Project In
                  <span className="text-sec inline-block"> mind ?</span>
                </h2>

                <div className="lg:ml-40">
                  <img src="./Man.png" alt="" />
                </div>
              </div>
              <div className="mt-10">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5 py-5">
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="">Your Name</label>
                    <input
                      type="text"
                      className="bg-[#393E46] px-5 py-2 rounded-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex gap-2 flex-col">
                    <label htmlFor="">Your Email</label>
                    <input
                      type="text"
                      className="px-5 py-2 rounded-sm bg-[#393E46]"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <textarea
                    name=""
                    id=""
                    className="w-full lg:w-120 bg-[#393E46] h-70"
                  ></textarea>
                </div>
                <div className="mt-10">
                  <button className="bg-sec px-5 py-3  rounded-4xl flex items-center gap-5">
                    Send Message <IoIosSend />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
