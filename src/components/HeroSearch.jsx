// import React from 'react'
import Button from "./Button"
import { FiSearch } from "react-icons/fi";

export default function Herosearch() {
  return (
        <div className=" flex w-full justify-center items-center dark:bg-gray-800">
            <div className="flex relative rounded-md w-full px-4 max-w-3xl">
                <Button 
                className="flex border items-center bg-[#001616] py-4 px-4 rounded-l-lg shadow"
                icon={<FiSearch color="white" size={26}/>}
                />
                <input
                type="search"
                name="q"
                id="query"
                placeholder="search for your favourite totebag, colour, design patterns "
                className="w-full bg-white py-4 pl-6.5 rounded-l-none  border-l-white rounded-r-lg border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500 dark:text-gray-300 dark:border-none shadow"
                /> 
            </div>
        </div>

  )
}
