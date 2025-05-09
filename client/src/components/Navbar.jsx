import React from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full px-6 py-1 flex items-center justify-between bg-customWhite shadow-md'>

        <Link to='/'>
        <img className='w-40 ml-15 ' src={assets.logo} alt="" />
        </Link>

        <div className="flex items-center gap-15 sm:text-base">
           <Link to="/" className="flex items-center gap-1">
             <img src={assets.navfeather} alt="feather" className="w-4 sm:w-5" />
             <p className="font-semibold text-[#503440] text-[22px] ">Home</p>
            </Link>
            <Link to="/about">
             <p className="font-normal text-[#503440]  text-[22px] hover:font-semibold">About</p>
            </Link>
           <Link to="/services">
             <p className="font-normal text-[#503440]  text-[22px] hover:font-semibold">Services</p>
           </Link>
           <Link to="/blogs">
             <p className="font-normal text-[#503440]  text-[22px] hover:font-semibold">Blogs</p>
           </Link>

           <button
             onClick={() => navigate('/book')}
            className="bg-[#FFF9FC] text-[#AA587C] text-[20px] font-bold px-7 py-3 rounded-full shadow-sm hover:scale-105 transition-transform border-3 border-[#AA587C] mr-25"
           >
          Book Appointment
           </button>
        </div>
    </div>
  )
}

export default Navbar
