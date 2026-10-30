// import React from 'react'

import Button from "./Button";
import { FaSliders } from "react-icons/fa6";

export default function Filter() {
  return (
    <div className="flex flex-wrap  items-center justify-center gap-4">
      <Button 
      className="py-4 px-6 bg-[#001616] text-white flex items-center gap-2.5 rounded-[30px] text-[20px] shadow"
      icon={<FaSliders />}
      btnname={"All"}
      />
      <Button 
      className="py-4 px-6 bg-white border border-gray-300 text-black flex items-center gap-2.5 rounded-[30px] text-[20px]"
      btnname={"Corduroy"}
      />
      <Button 
      className="py-4 px-6 bg-white border border-gray-300 text-black flex items-center gap-2.5 rounded-[30px] text-[20px]"
      btnname={"Denim"}
      />
      <Button 
      className="py-4 px-6 bg-white border border-gray-300 text-black flex items-center gap-2.5 rounded-[30px] text-[20px]"
      btnname={"Adire"}
      />
      <Button 
      className="py-4 px-6 bg-white border border-gray-300 text-black flex items-center gap-2.5 rounded-[30px] text-[20px]"
      btnname={"Leather"}
      />
    </div>
  )
}
