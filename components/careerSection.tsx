import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CareerSection = () => {
  return (
    <section className='w-full pb-20  bg-[#ffffff] text-white flex items-center justify-center px-8 md:px-16 py-15 relative overflow-hidden'>
      
      <div className='max-w-6xl w-full bg-[#ffffff]/80 border border-blue-900/50 rounded-3xl p-8 md:p-12 shadow-2xl grid grid-cols-1 md:grid-cols-2 items-center gap-12'>
        
       
        <div className='relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-inner bg-[#ffffff] flex items-center justify-center'>
          <Image 
            src='/career-image.png' 
            alt='Fast track your Tech Career' 
            fill 
            className='object-cover'
          />
        </div>
        <div className='flex flex-col items-start gap-6'>
          <h2 className='text-3xl md:text-4xl font-bold tracking-tight text-black'>
            Fast track your Tech Career
          </h2>
          
          <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
            Get the right teams with zero worries for your project every now and then. Get the right teams with zero worries for your project every now and then.
          </p>

          <div className='flex flex-wrap gap-3 my-2'>
            <span className='px-4 py-2 bg-blue-800 border border-blue-400/30 rounded-xl text-sm font-semibold text-white'>
              #30,000.00
            </span>
            <span className='px-4 py-2 bg-blue-400 border border-blue-400/30 rounded-xl text-sm font-semibold text-white'>
              3 months
            </span>
            <span className='px-4 py-2 bg-black border border-blue-400/30 rounded-xl text-sm font-semibold text-white'>
              Mon-Fri (4pm -6pm)
            </span>
            <span className='px-4 py-2 bg-gray-500 border border-blue-400/30 rounded-xl text-sm font-semibold text-white'>
              GoogleMeet
            </span>
          </div>

        
          <Link href="/bootcamp-details" className='flex items-center gap-2 text-blue-950 hover:text-blue-300 font-semibold transition-colors mt-2 group'>
            <span className='w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors'>
              →
            </span>
            More details
          </Link>
        </div>

      </div>
    </section>
  )
}

export default CareerSection
