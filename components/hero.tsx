import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full min-h-screen bg-[#111944] text-white flex flex-col justify-between px-8 md:px-16 py-6 relative overflow-hidden'>
      
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#1f2d6e_1px,transparent_1px),linear-gradient(to_bottom,#1f2d6e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none' />

      <header className='w-full max-w-7xl mx-auto flex items-center justify-start gap-120 md:gap-130 z-10'>
        <div className='text-xl font-bold tracking-wider'>TECHNEW</div>
        <nav className='flex items-center gap-8 text-sm font-medium'>
          <Link href="/" className='hover:text-blue-400 transition-colors font-bold'>
            Home
          </Link>
          <Link href="/learning" className='text-blue-400 hover:text-blue-300 transition-colors font-bold '>
            Bootcamp
          </Link>
        </nav>
      </header>
      <div className='max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 z-10 my-auto py-12'>
        
        <div className='flex flex-col items-start gap-6'>
          <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide'>
            Get the best knowledge <br className="hidden md:block" />
            from our Versatile Tutors
          </h1>
          
          <Link href="/learning">
            <button className='px-8 py-3.5 bg-white text-gray-900 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition-all'>
              Start learning!
            </button>
          </Link>
        </div>
        <div className='flex justify-center md:justify-end items-center'>
          <div className='relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient from-blue-400/30 via-purple-400/30 to-white/40 shadow-2xl flex-shrink-0'>
            <div className='w-full h-full rounded-full overflow-hidden relative border-4 border-white/20 bg-blue-900 flex items-center justify-center'>
              <Image 
                src='/tutor-image.png' 
                alt='Versatile Tutors' 
                fill 
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>

      </div>

      <div className='w-full'></div>
    </div>
  )
}

export default Hero