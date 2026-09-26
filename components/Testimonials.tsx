import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <section className='w-full bg-white text-white flex items-center justify-center px-8 md:px-16 py-16 relative overflow-hidden'>
      <div className='max-w-6xl w-full bg-[#bcd6ec] border border-blue-900/60 rounded-3xl p-8 md:p-14 shadow-2xl grid grid-cols-1 md:grid-cols-2 items-center gap-12'>
        
        <div className='flex flex-col items-start gap-6'>
          <span className='text-xs font-semibold tracking-widest text-gray-400 uppercase'>
            Testimonials
          </span>
          
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-black'>
            See what others are saying about us
          </h2>
          
          <p className='text-black text-sm montserrat  md:text-base leading-relaxed '>
            &ldquo;Explore the course catalog and syllables to identify courses that align with personal learning objectives. Take advantage of interactive tutorials we offer to reinforce your understanding and apply concepts in real world scenarios.&rdquo;
          </p>

        
          <div className='flex flex-col gap-1 mt-1'>
            <h4 className='font-bold text-black text-base'>Faaruq Azeez</h4>
            <p className='text-xs text-black font-medium'>Founder, Justwear</p>
            <p className='text-xs text-gray-400'>United Arab Emirates</p>
          </div>

          
          <div className='flex items-center gap-4 mt-4'>
            <button className='w-10 h-10 flex items-center justify-center text-black hover:bg-blue-600/50 transition-colors'>
              ←
            </button>
            <button className='w-10 h-10 flex items-center justify-center text-black hover:bg-blue-600/50 transition-colors'>
              →
            </button>
          </div>
        </div>
        <div className='relative w-full h-80 md:h-96 flex items-center justify-center'>
          
          <div className='absolute w-70 md:w-80 h-64 md:h-72 bg-gray-600 border border-blue-800/60 rounded-2xl top-0 left-9 md:top-0 md:right-8 shadow-xl'></div>

          <div className='absolute w-70 md:w-80 h-64 md:h-72 rounded-2xl overflow-hidden bg-blue-950 border border-blue-700/50 shadow-2xl bottom-0 top-8 left-2 md:bottom-2 md:left-4'>
            <Image 
              src='/testimonial-image.png' 
              alt='Faaruq Azeez Testimonial' 
              fill 
              className='object-cover'
            />
          </div>

        </div>

      </div>

      
    </section>
  )
}

export default Testimonials
