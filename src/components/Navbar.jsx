import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="bg-pri ">
        <div className="border-b border-[#EEEEEE1A]">

        <nav className=" flex items-center justify-between text-thi container">
            <div className="logo">
            <h2 className="text-2xl font-[Oswald] font-bold tracking-wider">SaulDesign</h2>
            </div>
            <div className="navbar">
                <ul className="flex gap-12 py-10">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                </ul>
            </div>
        </nav>
        </div>
      </div>
    </>
  );
};
