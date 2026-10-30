// import React from 'react'

export default function Card({title, price,imageUrl}) {
  return (
    <>
      <div className=" dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105 flex-col flex gap-6">
        <div className=" flex justify-center max-w-77.5 h-84.5">
        {<img className="" src={imageUrl} alt={title}/>}
        </div>
        <div  className="px-2 py-5">
            
            <div className=" flex justify-between">              
                <p className="text-xl font-semibold tracking-tight text-gray-900">{title}</p>
                <p className="font-mono font-semibold text-black  text-[18px] ">{price}</p>
            </div>
        </div>
    </div>
    </>
  )
}
