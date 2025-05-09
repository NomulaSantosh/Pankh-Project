import React from 'react'
import { assets } from '../assets/assets'

const Approach = () => {
  return (
    <>
    <div className='relative w-full bg-[#000000] h-[900px]'>
        <img src={assets.bgfeather} alt="" className='absolute w-full opacity-50 z-10 h-[700px]'/>

        <div className='absolute flex flex-col'>
            <img src={assets.line} alt="" className='ml-243 mt-10 w-70'/>
            <h2 className='text-[2.188rem] ml-248 text-amber-50 font-semibold mb-10 relative inline-block'>
            The Approach
          </h2>

             <div className='flex flex-col md:flex-row justify-center gap-6 ml-75 mb-10'>
                      <img
                        src={assets.imgo}
                        alt='Approach 1'
                        className='rounded-4xl w-[27.563rem] h-[32.125rem] object-cover'
                      />
                      <img
                        src={assets.imgt}
                        alt='Approach 2'
                        className='rounded-4xl w-[44rem] h-[32.125rem] object-cover'
                      />
                      <img
                        src={assets.imgthr}
                        alt='Approach 3'
                        className='rounded-4xl w-[27.563rem] h-[32.125rem] object-cover'
                      />
                  </div>

                  <p className='text-center ml-120 mt-10 text-[1.875rem] text-gray-300 max-w-7xl  leading-relaxed'>
                      At The Pankh Project, we believe healing involves your whole self.
                      Your thoughts, feelings, physical sensations, and energy are all
                      connected. Our approach honours this connection to help you find
                      balance and well-being. Our process is collaborative and tailored to
                      you, aiming to help you feel more whole, balanced, and empowered on
                      your unique journey.
                    </p>
          </div>
    </div>
      <div className='relative bg-black flex flex-col text-white py-12 px-6 md:px-20'>
              <h2 className='text-center text-[3.438rem] mt-20 font-semibold mb-10'>
                By Finding Your Roots, Growing Your Wings
              </h2>
      
              <div className='flex items-center z-20 ml-50 mt-20 flex-col h-[22.5rem] md:flex-row gap-8'>
                {/* Grounding in Your Strength */}
                <div className='flex items-center z-30 flex-col bg-zinc-900 p-6 rounded-xl w-[800px] h-[400px] shadow-md text-center'>
                  <img
                    src={assets.thor}
                    alt=''
                    className='w-[40px] h-[60px] mt-6 items-center'
                  />
                  <h3 className='text-[2.188rem] mt-6 font-semibold bg-gradient-to-r from-[#AA587C]  to-[#FD8950] text-transparent bg-clip-text mb-3'>
                    Grounding in Your Strength
                  </h3>
                  <p className='text-[#FFE4F0D1] text-[1.688rem] leading-relaxed'>
                    We start by helping you connect with your inner strength and
                    wisdom. Like strong roots, this creates a foundation of safety and
                    stability.
                  </p>
                </div>
      
                {/* Building Resilience */}
                <div className='flex items-center mx-20 z-30 flex-col bg-zinc-900 p-6 rounded-xl w-[800px] h-[400px] shadow-md text-center'>
                  <img
                    src={assets.leaf}
                    alt=''
                    className='w-[40px] h-[60px] mt-6 items-center'
                  />
                  <h3 className='text-[2.188rem] mt-6 font-semibold bg-gradient-to-r from-[#AA587C]  to-[#FD8950] text-transparent bg-clip-text mb-3'>
                    Building Resilience
                  </h3>
                  <p className='text-[#FFE4F0D1] text-[1.688rem] leading-relaxed'>
                    From this grounded place, we guide you in developing your ability
                    to cope with challenges, adapt to change, and grow — like finding
                    your wings.
                  </p>
                </div>
              </div>
              <img src={assets.bgfeather} alt="" className='absolute w-[800px] h-[300px] bottom-0 ml-450 z-10 opacity-100' />
            </div>
      </>
  )
}

export default Approach

