// import React from 'react'
import { PiTrademarkRegistered } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="md:min-h-184 min-h-screen px-3  lg:px-15 pt-2.5 lg:pt-31.75 bg-black flex flex-col justify-between">
        <div className="flex justify-between  md:flex-row flex-col">
            <div className="flex md:flex-col flex-col-reverse gap-20 max-w-132.25">
                <p className="text-[#FAFFFF] font-medium text-[20px]">We provide comfy tote bags that won't <br /> mess up your style and have plenty of space for all <br /> your stuff.</p>
                <div className=" flex flex-col gap-10"> 
                    <span className="flex">
                        <p className="block font-mono text-[52px] text-white">thetotebagshop</p>
                        <PiTrademarkRegistered className="w-6 h-6 text-white"/> 
                    </span> 
                    <span className="flex gap-6">
                        <FaTiktok className="text-white w-9 h-9"/>
                        <FaInstagram  className="text-white w-9 h-9"/>
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-6 text-white">
                <p className="text-base text-[28px] font-extrabold tracking-wide text-white">
                    Quick links
                </p>
                <div className="flex flex-col gap-6 font-medium text-[18px]">
                    <a href="#">Terms & conditions</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Contact us</a>
                    <a href="#">Terms of services</a>
                    <a href="#">Refund policy</a>
                </div>
            </div>
            <div className="flex flex-col text-white gap-14 max-w-98.75">
                <div className="flex flex-col gap-7">
                    <p className="text-base text-[28px] font-extrabold tracking-wide text-white">
                        Connect with us
                    </p>

                    <p className="text-base font-bold tracking-wide ">
                        Subscribe to our Newsletter to be the first to <br /> be aware of recent production and other production offers. 
                    </p>
                </div>
                <div className="flex relative items-center">
                    <input className="bg-[#2E3030] px-7.5 w-full py-4 rounded-xl" type="email" name="add-email" id="add-email" placeholder="Enter email address" />
                    <span className="bg-[#001414] w-10 h-10 flex items-center p-2 rounded-lg absolute right-10 hover:bg-gray-300 transition-colors duration-700">
                        <FaArrowRightLong className="w-6 h6"/>
                    </span>
                </div>
            </div>
        </div>
        <div className="flex  ml-auto pb-10">
            <p className="text-sm text-[#B9BFBF] flex items-center">
            <FaRegCopyright className="w-3.5 h-3.5"/>thetotebagshop <span className="text-white font-bold">2024</span>
            </p>
        </div>
    </footer>
    </>
  )
}
