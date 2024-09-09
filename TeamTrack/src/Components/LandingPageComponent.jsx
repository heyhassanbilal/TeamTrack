import React from 'react'

export default function LandingPageComponent() {
  return (
    <div className='flex justify-center min-h-screen w-screen overflow-hidden bg-[linear-gradient(180deg,#222831_26%,#393E46_78.4%)] text-white'>

        {/* main content */}
        <div className='flex flex-col text-center items-center'>
            <h1 className='font-extrabold font-righteous text-6xl mt-[15vh] mb-9'>TeamTrack</h1>
            <p className='font-extrabold italic mb-16'>A Collaborative To-Do List</p>
            <button className='flex-none w-[125px] bg-[#D65A31] rounded-2xl py-[2px] font-sans text-s hover:bg-white hover:text-[#D65A31]'>Get Started</button>
        </div>
    </div>
  )
}

