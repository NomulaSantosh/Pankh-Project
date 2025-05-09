import React from 'react';
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-[#FEEAD9]  w-full text-brown-800 h-[35.438rem]'>
      <div className='flex flex-col  md:flex-row items-center md:items-start justify-between '>
        <div className='flex-shrink-0 mt-[6.188rem] ml-[6.75rem]'>
          <img
            src={assets.dhand}
            alt='Hand Image'
            className='rounded-md w-[29.188rem] h-[22.938rem] ml-60'
          />
        </div>

        <div className='text-center w-[30.313rem] mt-[9.125rem]'>
          <p className='italic text-[1.938rem] leading-relaxed text-center'>
            “When the moral judgment is removed, individuals are able to
            acknowledge and experience their authentic life energy freely.”{' '}
            <br />
            <span className='font-semibold'>- Peter Levine</span>
          </p>
        </div>

        <div className='mr-90 mt-[6.438rem]'>
          <h3 className='font-bold text-[1.563rem] mb-2'>Quick Links</h3>
          <ul className='space-y-1 text-[1.25rem]'>
            <li>
              <a href='#' className='hover:underline'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                About
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Services
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Appointment
              </a>
            </li>
          </ul>
          <h4 className='font-bold text-[1.563rem] mt-4 mb-1'>Get in Touch</h4>
          <div className='flex space-x-3 text-[1.563rem] text-pink-600 mt-[1rem]'>
            <img src={assets.email} alt="" className='w-[25px]'/>
            <img src={assets.linkedin} alt="" className='w-[25px]'/>
            <img src={assets.whatsapp} alt="" className='w-[25px]'/>
          </div>
        </div>
      </div>

      <p className='text-center  text-[1.15rem] bg-gradient-to-r from-[#AA587C] to-[#FD8950] bg-clip-text text-transparent mt-6'>
        Copyright © 2024 The Pankh Project – All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
