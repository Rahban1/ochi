import { motion, useAnimation } from 'framer-motion'
import React from 'react'


function Featured() {

    const cards = [useAnimation(), useAnimation()];
    const handleHover = (index) => {
        cards[index].start({y:"0"})
    }
    const handleHoverEnd = (index) => {
        cards[index].start({y:"100%"})
    }

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
        </div>
        <div className='px-20'>
            <div className="cards w-full flex gap-10 mt-10">
                <motion.div onHoverStart={()=> handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[75vh]">
                    <h1 className="overflow-hidden  absolute z-[9] flex text-[#CDEA68] font-['Founders_Grotesk_X_Condensed'] text-9xl leading-none tracking-tighter -translate-x-1/2 -translate-y-1/2 top-1/2 left-full ">
                        {"FYDE".split('').map((item,index)=> (
                            <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.22,1,0.36,1], delay: index*.05}} >{item}</motion.span>
                        ))}
                    </h1>  
                    <div className="card rounded-xl w-full h-full">
                        <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="logo" className="w-full h-full bg-cover" />
                    </div>
                </motion.div>
                <motion.div onHoverStart={()=> handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative w-1/2 h-[75vh]  ">
                    <h1 className=" flex absolute z-[9] text-[#CDEA68] font-['Founders_Grotesk_X_Condensed'] text-9xl leading-none tracking-tighter translate-x-1/2 -translate-y-1/2 overflow-hidden top-1/2 right-full ">
                        {"VISE".split('').map((item,index)=>(
                            <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.22,1,0.36,1], delay: index*.05}}>{item}</motion.span>
                        ))}
                    </h1>
                    <div className="card rounded-xl w-full h-full overflow-hidden border-white border-2 ">
                        <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="logo" className="w-full h-full bg-cover " />
                    </div>
                </motion.div>
                
            </div>
        </div>
    </div>
  )
}

export default Featured