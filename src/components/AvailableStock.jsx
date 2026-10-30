// import React from 'react'

import Card from "./Card";
import avialablestock1 from "/src/assets/available-stock1.jpeg";
import availablestock2 from "/src/assets/available-stock2.jpeg";
import avialablestock3 from "/src/assets/available-stock3.jpeg"
import avialablestock4 from "/src/assets/available-stock4.jpeg"
import avialablestock5 from "/src/assets/available-stock5.jpeg"
import avialablestock6 from "/src/assets/available-stock6.jpeg"
import avialablestock7 from "/src/assets/available-stock7.jpeg"
import avialablestock8 from "/src/assets/available-stock8.jpeg"
import avialablestock11 from "/src/assets/available-stock11.jpeg"

export default function AvailableStock() {
  return (
    <>
      <section className="min-h-screen w-fit">
        <div className="h-full flex flex-col gap-6 max-w-329.5 dark:bg-gray-800 p-2 mx-auto">
          <div>
            <p className="font-semibold text-4xl mb-2">Available Stock</p>
            <p className="text-2xl text-gray-700">These totebags are currently available for sales</p>
          </div>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 md:p-2 mx-auto">
            {/* card  */}
            <Card 
            imageUrl={avialablestock1}
            title={"Chinos"}
            price={"N5,000"}
            />
            {/* card 2 */}
            <Card 
            imageUrl={availablestock2}
            title={"Chinos"}
            price={"N5,000"}
            />
            {/* card  */}
            <Card 
            imageUrl={avialablestock3}
            title={"Chinos"}
            price={"N5,000"}
            />
            {/* card  */}
            <Card 
            imageUrl={avialablestock4}
            title={"Chinos"}
            price={"N5,000"}
            />
            {/* card  */}
            <Card 
            imageUrl={avialablestock5}
            title={"Chinos"}
            price={"N5,000"}
            />
            {/* card  */}
            <Card 
            imageUrl={avialablestock6}
            title={"Chinos"}
            price={"N5,000"}
            />
            {/* card  */}
            <Card 
            imageUrl={avialablestock7}
            title={"Chinos"}
            price={"N5,000"}
            />
            {/* card  */}
            <Card 
            imageUrl={avialablestock8}
            title={"Chinos"}
            price={"N5,000"}
            />
            {/* card  */}
            <Card 
            imageUrl={avialablestock1}
            title={"Chinos"}
            price={"N5,000"}
            />
            {/* card  */}
            <Card 
            imageUrl={avialablestock3}
            title={"Chinos"}
            price={"N5,000"}
            />
            {/* card  */}
            <Card 
            imageUrl={avialablestock11}
            title={"Chinos"}
            price={"N5,000"}
            />
            {/* card  */}
            <Card 
            imageUrl={avialablestock4}
            title={"Chinos"}
            price={"N5,000"}
            />
          </div>
        </div>
      </section>
    </>
  )
}
