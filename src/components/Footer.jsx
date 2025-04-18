import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
        <div className="container text-white flex flex-col py-10">
            <div className="py-20">

            <div className="links">
                <ul className='flex gap-5 lg:gap-30 justify-center '>
                    <li className='flex gap-1 lg:gap-4 items-center text-lg font-medium '><IoMdHome />Home</li>
                    <li className='flex gap-1 lg:gap-4 items-center text-lg font-medium '><FaUser />About Me</li>
                    <li className='flex gap-1 lg:gap-4 items-center text-lg font-medium '><IoCall />Contact</li>
                </ul>

                <ul className='flex gap-10 justify-center mt-10 text-4xl '>
                    <li><FaFacebook /></li>
                    <li><FaInstagram /></li>
                    <li><FaTwitter /></li>
                    <li><FaYoutube /></li>

                </ul>
            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
