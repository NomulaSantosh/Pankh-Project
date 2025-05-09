import React from 'react';
import { assets } from '../assets/assets'

const BlogSection = () => {
  const blogs = [
    {
      title: 'The Transformative Power of',
      description:
        'What does it mean to be a therapist? What happens when someone discloses about killing someone in therapy? Has that happened to you yet?',
      date: 'May 20th 2020',
      image: [assets.blogo],
    },
    {
      title: 'Is Therapy Right for My Child?',
      description:
        'Life throws curveballs at everyone, and kids are no exception. From navigating social pressures and academic demands to dealing with family changes and personal struggles, childhood',
      date: 'May 20th 2020',
      image: [assets.blogt],
    },
    {
      title: 'Start Journaling for Mental Health',
      description:
        'Over the years, I’ve noticed how journaling can really help support therapy. Writing things down lets people explore their thoughts more fully, discover hidden patterns, and learn ...',
      date: 'May 20th 2020',
      image: [assets.blogthr],
    },
  ];

  return (
    <div className='w-full bg-[#FFFFFF] mx-auto px-[2rem] py-[2rem]'>
      <div className='flex flex-col items-center'>
        <img src={assets.line} alt='' className='h-[4.1rem] w-[6.25rem]' />
        <h2 className='text-[2.188rem] font-bold text-center mb-8 relative'>
          Blogs
        </h2>
      </div>

      <div className='grid mx-30 md:grid-cols-3 gap-8'>
        {blogs.map((blog, index) => (
          <div
            key={index}
            className='bg-white rounded-lg border border-[#f2b7d1] hover:shadow-lg transition h-[31.563rem]'
          >
            <img
              src={blog.image}
              alt={blog.title}
              className='rounded-t-lg w-full h-[250px] object-cover'
            />
            <div className='p-4'>
              <h3 className='text-[1.635rem] font-semibold mb-2'>
                {blog.title}
              </h3>
              <p className='text-[1.25rem] text-gray-600 mb-4'>
                {blog.description}
              </p>
              <div className='flex items-center mt-15 justify-between text-sm text-gray-500'>
                <span>{blog.date}</span>
                <a href='#' className='text-pink-500 hover:underline'>
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='text-center mt-[3.6rem]'>
        <button className='px-6 py-2 text-[1.625rem] w-[12rem] border-3 border-[#AA587C] rounded-full bg-radial from-white from-40% to-[#FD895066] text-[#5B434E] shadow hover:shadow-lg transition'>
          View All
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
