import React from 'react'
import Hero from './components/Hero/Hero'
import Offers from './components/Offers/Offers'
import Portfolio from './components/portfolio/Portfolio'
import Slider from './components/slider/Slider'

const page = () => {
  return (
    <div>
     <Hero/>
     <Offers/>
     <Portfolio/>
     <Slider/>
    </div>
  )
}

export default page
