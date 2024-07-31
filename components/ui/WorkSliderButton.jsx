"use client";
import { useSwiper } from 'swiper/react';
//import {PiCaretLeftBold,  PiCaretRightBold} from "react-icons/pi"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import React from 'react'

const WorkSliderButton = ({ containerStyles, btnStyles, iconsStyles }) => {
    const swiper = useSwiper();
  return (
    <div className={ containerStyles}>
     <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
       <FaChevronLeft className={iconsStyles}/>
     </button>
     <button className={btnStyles} onClick={()=> swiper.slideNext()}> 
        <FaChevronRight className={iconsStyles}/>
     </button>
    </div>
  )
}

export default WorkSliderButton