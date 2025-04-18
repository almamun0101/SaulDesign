import React from "react";

export const About = () => {
  return (
    <div className="border-b border-[#EEEEEE1A]">
      <div className="container">
        <div className="relative">
          <div className="absolute top-60 left-0">
            <img src="./Vector2.png" alt="" />
          </div>
          <div className="absolute top-90 left-70">
            <img src="./Vector4.png" alt="" />
          </div>
          <div className="absolute bottom-30 left-40">
            <img src="./Vector3.png" alt="" />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between py-20 lg:py-50 ">
            <div className="">
              <div className="text-thi text-5xl font-bold py-5">
                About <span className="text-sec">Me</span>
              </div>
              <p className="lg:w-[390px] text-thi/75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis.... Read more
              </p>
            </div>
            <div className="img">
              <img src="./About.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
