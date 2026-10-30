// import React from 'react'
import { RiUserLine } from "react-icons/ri";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Button from "./Button";
import { PiTrademarkRegistered } from "react-icons/pi";



export default function Nav() {
  return (
    <>
    <nav className="" aria-label="Main navigation">
      <div className="mx-auto flex h-21.25 max-w-329.5 items-center justify-between">
        <div className="flex items-center gap-8 lg:w-1/3">
          <input type="checkbox" id="lux-nav-toggle" className="peer hidden" />
          <label
            htmlFor="lux-nav-toggle"
            className="inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-stone-700 transition-colors duration-200 hover:bg-stone-100 focus-within:ring-2 focus-within:ring-stone-900 lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5 peer-checked:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          </label>
          <ul className="hidden items-center gap-7 lg:flex">
            <li className="group relative">
              <a
                href="#"
                aria-current="page"
                className="block text-[18px] font-normal uppercase tracking-[0.12em] text-[#001414] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
              >
                HOME
              </a>
            </li>
            
            <li>
              <a
                href="#"
                className="border-black hover:border-none border-b-2 block text-[18px] font-normal uppercase tracking-[0.12em] text-[#001414] transition-all duration-500 hover:text-stone-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
              >
                SHOP
              </a>
            </li>
          </ul>
        </div>
        <div>
          
          <div className="relative flex">
            <p className="block font-mono text-[36px]">thetotebagshop</p>
            <PiTrademarkRegistered className="w-6 h-6"/>
          </div>

        </div>
        <div className="flex items-center justify-end gap-1 lg:w-1/3">
          <Button
            type={"button"}
            className="rounded-md p-2.5 text-stone-700 transition-colors duration-200 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
            icon={<RiUserLine className="w-9 h-9"/>}
          
          />
          
          <div className="relative">
            <Button
              type={"button"}
              className="relative rounded-md p-2.5 text-stone-700 transition-colors duration-200 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900"
              icon = {<PiShoppingCartSimpleBold className="w-9 h-9"/>}
            />
              <span className="absolute right-1 top-1 flex h-3 w-3 items-center justify-center rounded-full bg-black text-[6px] font-medium text-white">
                0
              </span>
          </div>
        </div>
      </div> 
    </nav>
  {/* ============ SHOP LAYOUT: SIDEBAR + PRODUCT GRID ============ */}
  
</>

  )
}
