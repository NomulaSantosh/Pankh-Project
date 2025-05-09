import React from 'react'
import { assets } from '../assets/assets'

const Guided = () => {
  return (
    <>
      <div className='bg-white w-full text-gray-800 py-12 px-6 md:px-20'>
        <div className='text-center mb-10'>
            <img src={assets.line} alt="" className='ml-228 w-[300px]'/>
          <h3 className='text-[25px] text-[#400322] font-bold uppercase mb-6'>
            Guided by Tarini
          </h3>
          <h2 className='text-2xl mb-15 md:text-[2.188rem] font-semibold text-[#503440]'>
            Our Sessions Gently Blend Conversation With Body–Focused Practices
          </h2>
        </div>

        <div className='space-y-6'>
          {[
            {
              title: 'Listening to Your Body',
              icon: [assets.body],
              text: 'We use the mind to connect with our bodies to be aware of our internal world (drawing from creative movement therapy and trauma informed care) to understand physical symptoms of our emotional states.',
            },
            {
              title: 'Understanding Stress & Trauma',
              icon: [assets.idea],
              text: 'We gently explore how past experiences affect your nervous system and help you find ways to feel calmer and safer.',
            },
            {
              title: 'Releasing Emotional Energy',
              icon: [assets.worker],
              text: 'Techniques using creative expression as their focus, self-soothing and movement based release help free stuck emotions and physical ailments in a supportive way.',
            },
            {
              title: 'Building Inner Resources',
              icon: [assets.hand],
              text: 'With a focus on recognising and strengthening your resilience and capacity to self support. To be our own superhero',
            },
          ].map((item, index) => (
            <div
              key={index}
              className='flex w-3/4 mb-10 max-w-8xl mx-auto rounded-[16px] overflow-hidden shadow-md border border-gray-200 bg-white'
            >
              <div className='flex items-center gap-4 min-w-[450px] max-w-[450px] h-[9.313rem] bg-gradient-to-r from-[#AA587C] to-[#FD8950] text-white px-6 py-8'>
                <img
                  src={item.icon}
                  alt={item.title}
                  className='w-[3.688rem] h-[3.688rem]'
                />
                <h3 className='text-[1.857rem] font-bold'>{item.title}</h3>
              </div>
              <div className='flex items-center px-8 py-8 bg-white w-full'>
                <p className='text-[1.225rem] text-[#503440]'>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Guided
