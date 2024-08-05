import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.03" className='w-full mt-5 py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]' >
        <div className="text border-t-2 border-[#0F574E] flex pr-10 overflow-hidden whitespace-nowrap">
            <motion.h1
              initial={{x:"0"}}
              animate={{x: "-100%"}}
              transition={{repeat: Infinity, ease: "linear", duration: 10}}
              className='text-[27vw] leading-none font-["Founders_Grotesk_X_Condensed"] font-medium uppercase -mb-[7vw] pt-4 pr-5'>we are ochi</motion.h1>
            <motion.h1
              initial={{x:"0"}}
              animate={{x: "-100%"}}
              transition={{repeat: Infinity, ease: "linear", duration: 10}}
              className='text-[27vw] leading-none font-["Founders_Grotesk_X_Condensed"] font-medium uppercase -mb-[7vw] pt-4'>we are ochi</motion.h1>
        
        </div>
    </div>
  )
}

export default Marquee