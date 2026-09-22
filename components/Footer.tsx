import React from 'react'
import Link from 'next/link'



const Footer = () => {
  return (
    <div className='w-full bg-[#111944] text-white'>
      
      <section className='w-full px-8 md:px-16 pt-16 pb-6 flex items-center justify-center'>
        <div className='max-w-6xl w-full bg-[#eef2f6] text-gray-900 rounded-3xl py-10 px-8 md:px-12 shadow-2xl flex flex-col items-center text-center border border-gray-200'>
          <h2 className='text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-2'>
            Email capture form for updates and promotions
          </h2>
          <p className='text-gray-600 text-sm md:text-base mb-8'>
            Subscribe to our newsletters and stay up to date on features and releases.
          </p>

         
          <form  className='flex items-center justify-between w-full max-w-xl bg-white border border-black rounded-full p-1.5 shadow-sm'>
            <input 
              type='email' 
              placeholder='Enter your work email' 
              className='w-full px-4 py-2.5 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-sm'
              required
            />
            <button 
              type='submit' 
              className='px-7 py-3 bg-black hover:bg-[#111944] text-white font-semibold rounded-full transition-colors text-sm shadow-md flex-shrink-0'
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    
      <footer className='w-full px-8 md:px-16 pb-16 pt-4 flex items-center justify-center'>
        <div className='max-w-6xl w-full bg-[#162054] border border-blue-900/60 rounded-3xl py-12 px-8 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-10 text-sm text-gray-300 shadow-2xl'>
          
          <div className='md:col-span-2 flex flex-col gap-4'>
            <div className='text-2xl font-black tracking-widest text-white'>LOGO</div>
            <p className='text-xs md:text-sm text-gray-400 leading-relaxed max-w-sm'>
              Subscribe to our newsletters and stay up to date on features and releases.
            </p>
            <p className='text-xs text-gray-500 mt-2'>
              Copyrights &copy; kyrian chidiogo 2024
            </p>
          </div>

          <div className='flex flex-col gap-3'>
            <h4 className='font-semibold text-white text-base mb-1'>Home</h4>
            <Link href="/about" className='hover:text-blue-400 transition-colors'>About Us</Link>
            <Link href="/services" className='hover:text-blue-400 transition-colors'>Service</Link>
          </div>

    
          <div className='flex flex-col gap-3'>
            <h4 className='font-semibold text-white text-base mb-1'>Works</h4>
            <Link href="/bootcamp" className='hover:text-blue-400 transition-colors'>Boot Camp</Link>
          </div>

          <div className='flex flex-col gap-3'>
            <h4 className='font-semibold text-white text-base mb-1'>Consultation</h4>
            <Link href="/blog" className='hover:text-blue-400 transition-colors'>Blog</Link>
            
            <h4 className='font-semibold text-white text-base mt-4 mb-1'>Contact</h4>
            <p className='text-xs text-white'>+234 802 371 6031</p>
            <p className='text-xs text-white'>benkay599@gmail.com</p>
            <p className='text-xs text-white leading-relaxed'>90 Nike lake road Trans-ekulu,Enugu Nigeria.</p>
            <div className='flex items-center gap-3 mt-3'>
            
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-blue-600 transition-colors'>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-blue-600 transition-colors'>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-blue-600 transition-colors'>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20v-7h-2.5v-3H12V9.5a3.5 3.5 0 0 1 3.5-3.5h2.5v3h-2a.5.5 0 0 0-.5.5V10h2.5l-.5 3H15v7a10 10 0 0 0-3-18z"/></svg>
              </a>
            </div>
          </div>
           
        </div>
      </footer>

    </div>
  )
}

export default Footer