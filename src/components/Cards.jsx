import React from 'react'

function Cards() {
  return (
    <div className='h-screen w-full bg-zinc-900 flex gap-5 items-center px-32'>
        <div className="cardcontainer w-1/2 h-[50vh]">
            <div className="card rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            </div>
        </div>
        <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
            <div className="relative card w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute bottom-3 left-3 hover:text-zinc-800 hover:bg-zinc-100 rounded-full border-zinc-100 text-zinc-100 p-1 text-sm border-[1px]'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className="relative card w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center">
                <img width={80} height={80} src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute bottom-3 left-3 hover:text-zinc-800 hover:bg-zinc-100 rounded-full border-zinc-100 text-zinc-100 p-1 text-sm border-[1px]'>BUSINESS BOOTCAMP ALUMNI</button>

            </div>

        </div>
    </div>
  )
}

export default Cards