// import React from 'react'

export default function Hero() {
  return (
    <>
      <section className="max-w-360 mx-auto md:block hidden">
        <div className="max-w-329.5 flex flex-col gap-6 p-2">
          <div className="flex flex-col z-50">
            <p className="text-[32px] text-[#001616] font-semibold font-Raleway">Shop your favourite totebag.</p>
            <p className="text=[18px] text-gray-700">Select the totebag that matches your fashion.</p>
          </div>
          <div className="flex border border-gray-300 xl:w-329.5 lg:w-4xl md:w-3xl  h-113.75 bg-white rounded-[36px] py-10.5 px-10 relative overflow-hidden">
              <div className="flex flex-col gap-43.5">
                <div className="flex gap-3">
                  <span className="w-7.25 h-4.25 bg-gray-700 rounded-full"></span>
                  <span className="w-15.25 h-4.25 bg-[#D9D9D9] rounded-full"></span>
                  <span className="w-7.25 h-4.25 bg-gray-700 rounded-full"></span>
                  <span className="w-7.25 h-4.25 bg-gray-700 rounded-full"></span>
                </div>
                <div>
                  <span>
                    <p className="text-gray-500 text-[20px]">TRENDING TOTEBAGS</p>
                    <p className="text-gray-700 text-[42px] font-medium">Leather Totebags</p>
                  </span>
                  <p className="text-[20px] text-gray-600 font-medium">Totebag's made with leather fabric. This <br /> fabric is usually stronger than the others. </p>
                </div>
              </div>
              <div className="">
                <img className="absolute -top-37 left-84 w-150 h-150" src="/src/assets/heroimg1.png" alt="" />
                <img className="absolute right-0" src="/src/assets/heroimg2.png" alt="hero image 2" />
              </div>
          </div>
        </div>
      </section>
    </>
  )
}
