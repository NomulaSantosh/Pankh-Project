import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { assets } from '../assets/assets'
const faqs = [
  {
    question: 'What is dance movement therapy?',
    answer:
      'Dance movement therapy (DMT) is the psychotherapeutic use of movement to promote emotional, social, cognitive, and physical integration of the individual.',
  },
  {
    question: 'How do I become a DMT?',
    answer:
      'To become a DMT, you typically need a master’s degree in dance/movement therapy or related field and complete supervised clinical hours.',
  },
  {
    question:
      'If I have a background in professional dance can I become a DMT?',
    answer:
      'Yes, a background in dance is helpful, but additional training in psychotherapy and DMT-specific methods is required.',
  },
  {
    question: 'How can I practice DMT as a psychotherapist?',
    answer:
      'Licensed psychotherapists can pursue additional training in DMT to integrate movement-based techniques into their practice.',
  },
  {
    question: 'What does a dance/movement therapy session look like?',
    answer:
      'A session might include guided movement, improvisation, mirroring, and verbal processing, tailored to client needs and therapeutic goals.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='relative  bg-white w-full min-h-screen  flex flex-col items-center justify-center py-16'>
      {/* Feather backgrounds */}
      <img
        src={assets.lbfeather}
        alt='feather left'
        className='absolute left-0 top-1/3 w-[31.875rem] h-[31.25rem] opacity-60 pointer-events-none'
      />
      <img
        src={assets.rbfeather}
        alt='feather right'
        className='absolute right-0 top-2/3 w-[31.875rem] h-[31.25rem] opacity-60 pointer-events-none'
      />

      <div className='relative z-10 w-full max-w-8xl mx-auto flex flex-col items-center mb-[15.875rem]'>
        {/* <span className="block w-24 h-1 bg-[#AA587C] mx-auto mt-2 rounded-full mb-4"></span> */}
        <img src={assets.line} alt='' className='h-[4.1rem] w-[35.438rem]' />
        <h2 className='text-[2.188rem] font-bold mb-2'>
          Frequently Asked Questions
        </h2>
        <p className='text-[1.438rem] text-gray-600 mb-6 mt-12'>
          See below for frequently asked questions and if you need further
          assistance, please email:
          <span className='inline-block ml-2 px-3 py-1 bg-[#ded6d9] text-[#AA587C] rounded-xl text-md font-medium shadow-sm align-middle'>
            tarini@thepankhproject.com
          </span>
        </p>
        <div className='w-full max-w-5xl space-y-4 text-left mt-24 '>
          {/* <img src={Bird1} alt="" /> */}
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='flex flex-col items-center border border-pink-300 rounded-lg shadow-md bg-white'
            >
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#AA587C]  to-[#FD8950] text-transparent bg-clip-text text-[1.563rem] rounded-lg focus:outline-none'
              >
                {faq.question}
                <ChevronDown
                  className={`transition-transform text-[#AA587C] ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className='px-6 pb-4 text-gray-700 text-base'>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
