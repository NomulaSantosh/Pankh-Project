import React, { useRef } from 'react';
import { assets } from '../assets/assets'

const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  // Testimonials data
  const testimonials = [
    {
      name: 'Sabitri Sanyal',
      rating: 5,
      message: '“Movement for me happens at different levels of consciousness - both in the mind and body. I realized this once again while participating in Tripura’s workshop. The somatic experiencing helped me gain a better insight about the self-care practices so essential to nourish and enrich the wisdom present in our bodies, which we often tend to overlook. This practice of movement therapy resonates with my awareness of being, a feeling of epiphany!”',
    },
    {
      name: 'Kelly H',
      rating: 4,
      message: '"Its hard to express into words what Jo has done for me in the time I have worked with her. Iam beyond grateful for the help and support I have received through both the Compassionate Inquiry and Biodynamic Craniosacral Therapy and would highly recommend Jo to anyone who is ready to look inward and heal. The combination of her extensive knowledge, intuition, friendly, non-judgemental approach has created such a safe and supportive space. Walking into her treatment room is almost instantly relaxing; the world is left at the door. With each session I have felt lighter, brighter and brought back home to myself again and"',
    },
    {
      name: 'Helen Quin',
      rating: 5,
      message: '“Jo creates an incredibly nurturing and safe space where you are supportively held to turn inwards and face the challenges keeping you stuck in the trauma, and fear. Not only is she highly skilled at what she does, Jo is incredibly real and has a"',
    },
    {
      name: 'Emma-Jayne',
      rating: 4,
      message: '“I went to see Jo when I was struggling with my feelings following a bereavement. She creates a safe space that makes it easy to talk and always works at a pace that is suitable for you as a client. Jo’s approach is full of care and empathy which feels very gentle, even when working through the toughest of issues. Importantly for me, she is humorous at the appropriate times and we shared laughter together as well as tears. I cannot"',
    },
  ];

  // Handle horizontal scroll with mouse wheel
  const handleWheel = (e) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY * 2;
    }
  };

  // Star rating component using images
  const StarRating = ({ rating }) => (
    <div className="flex gap-2">
      {[...Array(5)].map((_, index) => (
        <img 
          key={index}
          src={index < rating ? [assets.gstar] : [assets.estar]}
          alt="star"
          className="w-6 h-6"
        />
      ))}
    </div>
  );

  return (
    <section className="bg-[#FFFFFF] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <img src={assets.line} alt="" className='w-[830px] ml-35'/>
        <h2 className="text-4xl md:text-5xl text-black font-bold mb-12 text-center">
          What our clients say about us.
        </h2>

        {/* Scrollable testimonials container */}
        <div
          ref={scrollContainerRef}
          onWheel={handleWheel}
          className="flex overflow-x-auto pb-8 scrollbar-hide gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[1000px] h-[400px] bg-[#f5d0e0] p-8 border border-[#AA587C] rounded-3xl"
            >
                <h3 className="text-xl text-center mt-10 mb-5 font-semibold text-black">
                {testimonial.name}
                </h3>
              <div className="mb-4 ml-98">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-black mb-6 text-lg leading-relaxed">
                {testimonial.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
