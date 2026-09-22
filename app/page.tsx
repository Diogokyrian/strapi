import React from 'react'

import Hero from '../components/hero'
import Testimonials from '../components/Testimonials' 
import CareerSection from '@/components/careerSection'
import Footer from '@/components/Footer'
const Home = () => {
  return (
    <div >
 
  <Hero/>
  <CareerSection/>
    <Testimonials/>
    <Footer/>

    </div>
  )
}

export default Home
