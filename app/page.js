import React from 'react'
import Hero from './components/Hero/Hero'
import Offers from './components/Offers/Offers'
import Slider from './components/slider/Slider'
import Masonry from './components/masonry/Masonry'
import World from './components/world/World'
import Tabs from './components/Tabs/Tabs'

const page = () => {
  return (
    <div>
     <Hero/>
     <Offers/>
     <Tabs/>
     <Slider/>
     <World/>
     <Masonry/>
    </div>
  )
}

export default page
