import React from 'react'
import { assets } from '../assets/assets'

const Abouts = () => {
  return (
    <div className='flex flex-col h-1/2 w-full bg-customWhite p-20 shadow-md'>
       <div className='ml-[200px]'>
         {/* Gradient Heading */}
         <h1 className="text-[150px] font-normal ml-[90px] bg-gradient-to-t from-[#E06A75] to-[#FFA06D] bg-clip-text text-transparent mb-20 leading-[0.9]">
           Meet The Pankh Project
        </h1>

        
 {/*Create a "text-shaped window" to the background (bg-clip-text)

Remove the text color to reveal the background (text-transparent)

Visual result: Your text appears colored with the gradient (from-[#E06A75] to-[#FFA06D]) instead of a solid color. */}

        {/* Content Section */}
        <div className='inline-flex items-start ml-[220px] gap-16'>
            <img 
                src={assets.profile} 
                alt="Tarini's profile" 
                className='w-[500px] h-[500px] object-cover rounded-lg shadow-xl'
            />

            <div className='flex flex-col max-w-2xl mt-20'>
                <div className='items-center gap-4 mb-8'>
                    <img 
                        src={assets.line} 
                        alt="decorative line" 
                        className='w-[260px]'
                    />
                    <h2 className='ml-5 font-bold text-5xl text-[#2A2A2A]'>
                        About Me
                    </h2>
                </div>

                <p className='text-lg ml-3 text-[#555555] leading-relaxed'>
                    Step into this journey with Tarini, where holistic healing recognizes the inseparable link between your physical sensations and emotional landscape. Offering a space for conversations and experiences designed to integrate mind, body, and spirit. Our philosophy centres on helping you discover the strength inherent in your 'Roots,' enabling you to build a solid foundation from which to grow your 'Pankh' – wings of resilience, adaptability, and self-support.
                </p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Abouts
