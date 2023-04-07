'use client'

import Link from "next/link"
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {

const [click, setClick] = useState('closed');

const handleClick = () => {
    if (click === 'closed') {
        setClick('open');    
    } else {
        setClick('closed');
    }
}

const scrollTo = (el) => {
    let element = document.getElementById(el);
    if (element) {
        element.scrollIntoView({behavior: "smooth"})
    }            
}




  return (
    <div className='overflow-hidden z-30'>


{/* MOBILE */}

        <div className="flex ">
            <div className={click === 'closed'? "z-30 flex bg-white fixed top-0 h-16 w-screen transition-all duration-300 " : "z-30 flex h-screen w-screen bg-[#FF5C00] transition-all duration-300 fixed"} >
                <div onClick={() => {scrollTo('Home')}} className="absolute top-3 left-3 z-30 cursor-pointer">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="40" height="40" viewBox="0 0 1024.000000 1024.000000"
 preserveAspectRatio="xMidYMid meet" className={click === 'closed'?"fill-black stroke-black transition-all duration-300":"fill-white stroke-white transition-all duration-300"}>

<g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
>
<path d="M4790 10229 c-1136 -91 -2110 -484 -2971 -1199 -155 -130 -484 -458
-611 -610 -722 -867 -1123 -1878 -1198 -3015 -45 -700 79 -1475 347 -2155 603
-1533 1910 -2685 3508 -3090 285 -72 530 -113 840 -141 180 -16 649 -16 830 0
1079 95 2055 498 2885 1190 138 114 451 425 577 571 292 340 517 684 728 1115
296 603 460 1236 505 1950 48 758 -107 1610 -422 2324 -679 1540 -2049 2642
-3693 2970 -418 84 -950 120 -1325 90z m-2854 -2424 c342 -23 534 -222 534
-555 0 -284 -133 -462 -399 -532 -110 -29 -354 -36 -479 -14 -162 28 -279 86
-359 176 -38 43 -82 134 -99 206 -23 97 -15 305 15 388 59 166 172 264 361
312 66 17 246 33 310 28 19 -2 71 -6 116 -9z m3809 -1419 c382 -19 727 -183
908 -433 28 -40 34 -43 75 -43 41 0 48 4 86 48 158 183 308 283 542 361 161
53 290 72 491 72 196 0 297 -12 451 -52 394 -101 639 -349 748 -755 59 -222
57 -161 61 -1611 l4 -1333 -636 0 -635 0 -1 258 c-1 141 -5 657 -9 1147 -7
865 -7 892 -28 972 -31 120 -73 205 -132 267 -66 70 -129 98 -235 104 -145 8
-256 -30 -351 -119 -112 -106 -167 -240 -216 -519 -8 -44 -13 -393 -17 -1085
l-6 -1020 -636 -3 -637 -2 -5 1102 c-6 1138 -8 1197 -48 1333 -62 207 -166
303 -339 313 -260 15 -437 -133 -524 -440 -56 -194 -58 -229 -66 -1108 -5
-448 -9 -902 -9 -1007 l-1 -193 -635 0 -635 0 0 1845 0 1845 482 -2 482 -3 77
-220 77 -220 39 -3 c38 -3 40 -1 87 67 82 120 213 231 366 308 75 38 255 97
350 114 76 13 265 26 330 22 25 -1 90 -5 145 -7z m-3325 -1901 l0 -1845 -635
0 -635 0 0 1845 0 1845 635 0 635 0 0 -1845z"/>
</g>
</svg>
                </div>

                <div className="flex-col space-y-1 w-fit h-fit absolute top-5 right-5 cursor-pointer" onClick={handleClick}>
                    <span className={click === 'closed' ? "flex h-1 w-6 bg-black rounded-full transition-all duration-300" : "flex h-1 w-6 bg-white rounded-full transition-all duration-300"}></span>
                    <span className={click === 'closed' ? "flex h-1 w-6 bg-black rounded-full transition-all duration-300" : "flex h-1 w-6 bg-white rounded-full -translate-x-3 transition-all duration-300"}></span>
                    <span className={click === 'closed' ? "flex h-1 w-6 bg-black rounded-full transition-all duration-300" : "flex h-1 w-6 bg-white rounded-full transition-all duration-300"}></span>
                </div>

                <div className={click === 'closed'? "hidden " : "flex flex-col h-screen w-screen text-center justify-center text-3xl gap-8 text-white"}>
                    <h1 className="cursor-pointer" onClick={() => {handleClick(); scrollTo('Home')}}>Home</h1>
                    <h1 className="cursor-pointer" onClick={() => {handleClick(); scrollTo('Portfolio')}}>Portfolio</h1>
                    <h1 className="cursor-pointer" onClick={() => {handleClick(); scrollTo('About')}}>About me</h1>
                </div>
            </div>  
        </div>
    </div>
  )
}
