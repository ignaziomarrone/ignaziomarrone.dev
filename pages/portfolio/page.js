'use client'

import Link from "next/link"

export default function Portfolio() {
  return (
    <div className='w-screen h-screen bg-gray-100 overflow-hidden text-black'>
      <div className="flex-col lg:inline-flex w-full h-full flex-wrap">
        <div className=" w-1/3 h-full justify-center  items-center hidden lg:grid px-6">
          <div>
            <h2 className="text-7xl text-[#FF5C00]">Portfolio</h2>
            <p className="text-xl">Some of my projects.<br/>You can find the Source Codes on my GitHub, at the end of the page.</p>
          </div>
        </div>

        <div className=" w-screen h-fit bg-gray-100 justify-center  items-center  lg:hidden text-center">
          <h2 className="text-4xl text-[#FF5C00]"><b>Portfolio</b></h2>
          <p className="text-lg">Some of my projects.</p>
        </div>



        <div className="grid grid-rows-1 grid-cols-1 w-screen h-full p-4 pb-20 auto-rows-fr bg-gray-100 text-black gap-4 lg:w-2/3 lg:p-24">

    

          <div className="grid h-full w-full  items-center bg-cover bg-no-repeat bg-top bg-white bg-[url('~/pages/img/mirko.webp')]  ">
            <Link href='https://mirkoleo.vercel.app/' className="h-full w-full bg-[#FF5C00] bg-opacity-90  hover:bg-transparent transition-all duration-500"><div className="flex flex-col h-full text-center  justify-center opacity-100 hover:opacity-0 transition-all duration-200">
              <h2 className=" text-2xl">Mirko Leo</h2>
              <span className="text-white px-4">A photographer's portfolio, built using Next.js && Sanity CMS.</span>            
            </div></Link>
          </div>

          <div className="grid h-full w-full items-center  bg-cover bg-no-repeat bg-top bg-white bg-[url('~/pages/img/weather.webp')]  ">
            <Link href='https://weatherapp-im.vercel.app/' className="h-full w-full bg-[#FF5C00] bg-opacity-90  hover:bg-transparent transition-all duration-500"><div className="flex flex-col h-full text-center  justify-center opacity-100 hover:opacity-0 transition-all duration-200">
              <h2 className=" text-2xl">Weather App</h2>
              <span className="text-white px-4">A simple Weather WebApp. Powered by WeatherAPI.com's API.</span>
            </div></Link>
          </div>

          <div className="grid h-full w-full items-center bg-cover bg-no-repeat bg-top bg-white bg-[url('~/pages/img/bg.webp')] ">
            <Link href='https://background-generator-woad.vercel.app/' className="h-full w-full bg-[#FF5C00] bg-opacity-90  hover:bg-transparent transition-all duration-500"><div className="flex flex-col h-full text-center justify-center opacity-100 hover:opacity-0 transition-all duration-200">
              <h2 className=" text-2xl">Background Generator</h2>
              <span className="text-white px-4">A Gradient Background generator, both by choice and random.</span>
            </div></Link>
          </div>     

        </div>
      </div>
    </div>
  )
}
