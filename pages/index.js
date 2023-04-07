"use client";

import Head from 'next/head'
import Navbar from './navbar/page'
import About from './about/page'
import Portfolio from './portfolio/page'
import { motion } from 'framer-motion'
import Test01 from './components/Test01'
import { useEffect, useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'

export default function Home() {

  const [mainClass, setMainClass] = useState('w-screen h-screen bg-white overflow-hidden transition-all duration-1000')

  useEffect(() =>{
  const Interval = setInterval(() => {
    setMainClass(prevClass =>
      prevClass === 'w-screen h-screen bg-white overflow-hidden transition-all duration-1000'? 'w-screen h-screen bg-[#FF5C00] overflow-hidden  transition-all duration-1000' : 'w-screen h-screen bg-white overflow-hidden transition-all duration-1000'
      ); 
  }, 2000);

  return () => clearInterval(Interval);
}, )


  const [mainCol, setMainCol] = useState('flex w-full h-full justify-center items-center text-3xl lg:text-[4rem] text-[#FF5C00]')

  useEffect(() =>{
  const Interval = setInterval(() => {
    setMainCol(prevClass =>
      prevClass === 'flex w-full h-full justify-center items-center text-3xl lg:text-[4rem] text-[#FF5C00]'? 'flex w-full h-full justify-center items-center text-3xl lg:text-[4rem] text-white' : 'flex w-full h-full justify-center items-center text-3xl lg:text-[4rem] text-[#FF5C00]'
      ); 
  }, 2000);

  return () => clearInterval(Interval);
  }, )


  let hasScrolled = false;

  const scrollTo = (el) => {
    if (!hasScrolled && typeof document !== 'undefined') {
      let element = document.getElementById(el);
      if (element) {
          element.scrollIntoView({behavior: "smooth"});
          hasScrolled = true;
      }              
    }
  }




  return (
    <>
      <Head>
        <title>Ignazio Marrone</title>
        <link rel="icon" href="favicon.ico" />
        <meta property="og:title" content="Ignazio Marrone" />
        <meta property="og:description" content="Ignazio Marrone - Web Developer" />
      </Head>

      <div id='Main' className={mainClass}>
        <Navbar/>
        <div id='Home' className={mainCol} >
          <div className='flex gap-2 absolute -translate-x-16 lg:-translate-x-28 transition-all delay-[2000] duration-200'>
            <h1 className=' text-black '>Secret word?</h1>
            <motion.div viewport={{ once: false }}>
              <Test01/>
            </motion.div>
          </div>

        </div>
        
      </div>

      <div className='flex absolute bottom-3 text-4xl w-full h-fit animate-bounce items-end justify-center text-black'>
        <BsChevronDown className='cursor-pointer' onClick={() => scrollTo('Portfolio')}/>
      </div>

      <div id='Portfolio'><Portfolio/></div>
      <div id='About'><About/></div>
      
    </>
  )
}
