import React from "react";

export const About = () => {
  return (
    <div className="border-b border-[#EEEEEE1A]">
        <div className="container">

      <div className="flex items-center justify-between py-50 ">
        <div className="text">
          <div className="text-thi text-5xl font-bold py-5">
            About   <span className="text-sec">Me</span>
          </div>
          <p className="w-[390px] text-thi/75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.... Read more
          </p>
        </div>
        <div className="img">
            <img src="./About.png" alt="" />
        </div>
      </div>

        </div>
    </div>
  );
};
