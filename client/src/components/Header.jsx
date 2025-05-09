import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className="relative w-full h-[800px] bg-[linear-gradient(to_bottom,#AA587C_0%,#000000_calc(20%-80px),#000000_calc(80%-60px),#AA587C_150%)] flex shadow-md">
  
            <div className="relative z-20 text-left ml-30 px-4 mt-50 mb-40 max-w-4xl mr-auto">
    
               <h1 className="text-6xl font-normal mb-6 text-white leading-tight">
                  Wings of Change <span className="font-bold text-[#F2D6E0]">Empowering</span>
               </h1>


              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#F2D6E0]">
                 Your Inner Transformation
              </h2>

              <p className="text-lg md:text-xl text-gray-300 mb-20 max-w-2xl leading-relaxed">
                 Step into The Pankh Project, where holistic healing recognizes the
                 inseparable link between your physical sensation
              </p>

              <button className="bg-[#FFF9FC] text-[#643247] text-xl font-bold px-18 py-4 rounded-full 
                     shadow-lg hover:scale-105 transition-transform border-3 border-[#AA587C]
                     hover:shadow-xl duration-300">
                 Book Now
              </button>
            </div>

            {/* Left Feather Decoration */}
            <div className="absolute left-380 rotate-25 top-160 z-10 opacity-60 mix-blend-lighten">
                <img 
                    src={assets.feather}
                    alt="Decorative feather"
                    className="w-[150px] h-[300px] object-contain blur-[1px]"
                />
            </div>

            <div className="absolute left-420 top-1/2 -translate-y-1/2 z-20 opacity-80 mix-blend-lighten">
                <img 
                    src={assets.handblur}
                    alt="Decorative hand"
                    className="w-[500px] h-[790px] object-contain blur-[1px]"
                />
            </div> 

            {/* Right Feather Decoration */}
            <div className="absolute right-0 top-10 -translate-y-1/2 z-10 opacity-80 mix-blend-lighten">
                <img 
                    src={assets.feather}
                    alt="Decorative feather"
                    className="w-[150px] h-[300px] object-contain blur-[1px]"
                />
            </div>
        </div>
    );
};

export default Header
