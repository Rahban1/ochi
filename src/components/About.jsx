import React from 'react'

function About() {
  return (
    <div className='bg-[#CDEA68] w-full p-20 rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full border-t-[1px] border-[#a1b562] pt-10 mt-16 flex gap-5 ">
            <div className='w-1/2'>
                <h1 className='text-6xl tracking-tighter  '>Our approach:</h1>
                <button className='px-7 py-4 bg-zinc-900 mt-10 uppercase rounded-full text-white flex gap-10 items-center'>Read More
                    <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] bg-red-600 rounded-xl">
              <img className='rounded-xl' src=".\src\assets\Homepage-Photo-663x469.jpg" alt="founder's photo" />
            </div>
        </div>
    </div>
  )
}

export default About