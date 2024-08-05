import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {


  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full h-screen bg-zinc-900 pt-1 '>
        <div className='textstructure mt-40 px-20'>
            {["we create","eye-opening","presentations"].map((item,index)=>{
                return <div className="masker">
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (
                            <motion.div 
                                initial={{width: 0}} 
                                animate={{width: "9vw"}} 
                                transition={{ease: [0.76, 0, 0.24, 1], duration: 0.6}} 
                                className='w-[9vw] h-[6.5vw] rounded-md mr-[1vw] relative -top-[0.5vw]'>
                                    <img className='rounded-md' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                            </motion.div>)}
                        <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[9vw] font-bold leading-[.75] font-["Founders_Grotesk_X_Condensed"]'>{item}</h1>
                    </div>
            </div>
            })}
            
            
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-16 flex justify-between items-center py-3 px-20'>
            {["For public and private companies", "From the first pitch to IPO"].map((item,index)=>{
                return <p className='text-md font-light tracking-tight leading-none text-white'>{item}</p>
            })}
            <div className="start flex gap-1 items-center">
                <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>start the project</div>
                <div className='border-[2px] rounded-full border-zinc-500 w-10 h-10 items-center flex justify-center'>
                    <span className='rotate-[45deg]'>
                        <FaArrowUpLong />
                    </span>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default LandingPage