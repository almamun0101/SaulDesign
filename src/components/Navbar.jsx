import React from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [menu , setMenu ] = useState(false)

  const handleMenu = ()=>{
    setMenu(!menu)
  }
  return (
    <>
      <div className="bg-pri ">
        <div className="border-b border-[#EEEEEE1A]">
          <nav className="flex items-center justify-between text-thi container">
            <div className="py-5 lg:py-10">
              <h2 className="text-2xl font-[Oswald] font-bold tracking-wider">
                SaulDesign
              </h2>
            </div>
          
            <div className="navbar">
              <ul className="hidden lg:flex gap-12 ">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
              </ul>

            </div>
            {menu && (
          <div className="lg:hidden absolute top-20 w-ful pb-4">
            <ul className="flex flex-col gap-4 text-thi">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Services</a></li>
            </ul>
          </div>
        )}
            <div className="lg:hidden">
              <button className="text-4xl" onClick={handleMenu}>{menu ? <IoMdClose /> : <IoMenu />} </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
