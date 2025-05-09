import React from 'react'
import { assets } from '../assets/assets'

const Embrace = () => {
  return (
    <>
      {/* Video Section */}
      <div
        className='relative py-16 px-6 md:px-20 text-center min-h-screen overflow-hidden  '
        style={{
          background:
            'radial-gradient(ellipse at top right, #FD8950 10%, #fff 30%)',
        }}
      >
        {/* Feather Images */}
        <img
          src={assets.leftfeather}
          alt='feather left'
          className='absolute left-0 bottom-0 w-[16rem] opacity-60 pointer-events-none'
        />
        <img
          src={assets.rightfeather}
          alt='feather right'
          className='absolute right-0 top-0 w-[16rem] opacity-60 pointer-events-none'
        />
        <div className='flex flex-col items-center'>
          <img src={assets.line} alt='' className='h-[4.1rem] w-[41.063rem]' />
          <h3 className='text-[2.188rem] font-semibold uppercase mb-2 py-2 relative z-10'>
            Embrace change with The Pankh Project
          </h3>
        </div>

        <p className='text-gray-700 text-[1.625rem] max-w-5xl my-10 mx-auto mb-10 leading-relaxed relative z-10'>
          Welcome! Here at the Pankh Project we really believe in shedding the
          parts of self that don't serve us anymore and growing new feathers to
          fly with. Let's come together and live a life of peace and happiness.
        </p>

        <div className='w-[78.188rem] h-[28.125rem] mb-6 rounded-xl relative z-10 mx-auto'>
          <img src={assets.youtube} alt='TEDx Talk' className=' rounded-xl' />
        </div>

        <p className='text-[1.625rem] text-[#292929A1] mb-4 relative z-10'>
          Click Here And See My Video
        </p>

        <a
          href='https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block px-6 py-2 text-[#5B434E] text-[1.563rem] border-3 border-[#AA587C] rounded-full bg-radial from-white from-40% to-[#FD895066] transition relative z-10'
        >
          Go to Youtube
        </a>
      </div>
    </>
  );
}

export default Embrace
